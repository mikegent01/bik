## Run report

**Files**
EDITED
  `Reputation-Matrix2/tools/genkit/gui.py`  ~ Plumbed the `retry_failed` setting into the HTTP API parsing (`/start` and `/overnight/start`) and added it to the Tkinter UI layout.
  `Reputation-Matrix2/tools/genkit/webui_template.html`  ~ Added a "Retry quarantined tasks" checkbox to both the standard run form and the overnight panel, wiring it up to the API JSON payload.

**Events filed** — None
**XP** — No XP awarded this run.

**Index** — Not applicable.
**RNN** — Not applicable.

**Not done / open**
  · The user will need to `git pull` their local repository, restart the Generator UI, and check "Retry quarantined tasks" to finally clear out those stuck failed records.
