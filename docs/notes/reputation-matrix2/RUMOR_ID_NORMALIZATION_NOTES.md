# Rumor ID Normalization Notes

I completed a second canonicalization pass on `assembly-data` posts.

## What was done
- Rebuilt chunk files again after applying a broader rumor-ID normalization pass.
- Mapped many draft / shorthand / pasted-title rumor IDs onto stronger canonical event targets.
- Preserved unresolved IDs that likely need actual `events.json` entries rather than blind merging.

## Important outcome
A large share of the remaining non-canonical rumor IDs now look like **good candidates for real event IDs**, not junk. In other words, the remaining set is much cleaner than before, and many of them should probably be added to `events.json` as canonical event entries in a future lore pass.

## Examples still remaining as non-canonical event-thread IDs
- `the_third_eye_escape`
- `purple_legion_mystery`
- `the_greenhouse_inferno`
- `the_cowbell_of_raventree`
- `titan_vs_arachnid`
- `ghost_gate_trap`
- `donkey_kong_crisis`
- `servants_of_the_lady`
- `the_supernatural_sovereignty_act`
- `the_shot_that_broke_the_revel`
- `dinner_with_the_damned`
- `the_valley_reclaimed`
- `aegis_prison_break_the_whispered_riot`
- `the_onyx_hand_vote`
- `the_wyrm_beneath`
- `the_valley_awakens`

## Recommendation
Next best cleanup is not more blind post rewriting — it is to add or normalize these event entries directly in `events.json`, then do one last rumor-ID sync pass.
