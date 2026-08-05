# Workspace cleanup note

Files removed in this pass:
- assembly-events-data (1).js
- AssignNode.js

Files intentionally kept:
- assembly*.js/html/css runtime files
- lore/content json files
- supporting world data files not fully audited for removal

Recommended before git push:
- verify external dependencies such as common.js, state.js, lore.js, calendar-data.js, research-data.js, navigation.js, global.css, layout.css, components.css exist in repo
- run app locally and click each tab once
