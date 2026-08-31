## Run report

**Files** 
EDITED
  `index.html`  ~ Removed the Wikipedia-style `.infobox` sidebars from main articles and trials, repurposing all the metadata into modern inline "pill" badges inside the `.metabar` directly below the article titles. This fixes broken/awkward sidebar layouts and looks much better.
  `tools/gen-mages-guild-code.py`  ~ Removed `ai_self_check_every_20()`, which was pausing the entire overnight generation every 20 records to ask the LLM (with a 60-second timeout) if the previous outputs were good. Hardcoded python heuristics catch spam much faster now without the pause.

**Events filed** — None
**XP** — No XP awarded this run.

**Index** — index.html modified for UI.
**RNN** — Not applicable.

**Not done / open**
  · Some minor/custom articles (like Investigation records or specific custom formats) might still use the old `.infobox` styling, but the vast majority of the site's main articles have been upgraded to the metabar format.
