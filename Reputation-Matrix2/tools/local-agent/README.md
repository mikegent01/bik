# ArenaLLM local agent

ArenaLLM is the repository's small, local orchestration layer for LM Studio
plus ComfyUI. It is intentionally separate from the existing Hub and GenKit
tools. The operator writes one natural-language request; the agent creates its
own bounded work units, chooses tools, and keeps a checkpointed run internally.
There is no second checklist UI to manage.

## Start the prompt page

From the checkout root:

```bash
python workflow/server.py
```

Open `http://127.0.0.1:8787/` locally. The server binds to `0.0.0.0` by
default so the same page can be shown by a sandbox preview. Set `WORKFLOW_HOST`
or `WORKFLOW_PORT` when needed.

Write a request such as:

> Update the historical Bowser archive. Inspect the existing event, analysis,
> home card, and art first. Preserve the recovered scene, make the throne-room
> breach explicit, keep it backdated, and validate the result.

ArenaLLM decides whether it needs to search, read, patch, audit, queue an image,
or ask a question. It returns a normal plaintext response in the chat; the
actual tool actions and results are available as an expandable trace under that
response.

## Internal orchestration

`agent.py` splits large prompts on headings and paragraph boundaries, then asks
LM Studio for small executable work units. Those work units are implementation
details and are never presented as a manual operator checklist. A run is
checkpointed under `Reputation-Matrix2/tools/.local-agent-runs/` (ignored by
Git):

```text
request.txt       original operator request
plan.json         bounded source sections and model planning results
checklist.json    internal work-unit state used for recovery
state.json        internal run pointer
agent-log.jsonl   tool/action/result audit trail
```

The internal state lets an approval stop resume without asking the operator to
re-split the request. If LM Studio is unavailable, deterministic work units are
created quickly; the action loop still refuses to pretend that it completed a
model-driven edit without a running model.

## Actual tool-using loop

Each chat send calls `/api/chat`, which runs `agent_runtime.py`. LM Studio
receives the conversation, the original request, the current internal work
unit, recent tool results, and the write-approval state. It returns exactly one
allowlisted JSON action. The server executes that action, feeds the bounded
result back, and repeats. When the work is complete, a second local completion
turn writes the normal plaintext assistant answer shown in the chat.

Available actions:

- `repo_read` — read one bounded text file inside the checkout.
- `repo_search` — search a focused repository directory.
- `repo_status` and `repo_diff` — inspect local changes without writing.
- `repo_patch` — replace exactly one matching block inside the checkout.
- `run_audit` — run only the fixed JSON, timecode, home-feed, cover, or
  campaign-front audits.
- `queue_image` — submit a bounded Qwen Edit job with local references.
- `finish_task` — close an internal work unit after an audit.
- `ask_user` — stop when a fact or decision is genuinely missing.

There is no shell tool, arbitrary filesystem access, delete tool, Git commit
tool, push tool, or pull-request tool. Paths are repository-scoped. Exact
patches reject zero matches and duplicate matches.

## Approval boundary

Reading, searching, status, diff, and fixed audits can happen immediately.
Repository patches and image jobs require the page's explicit **Allow local
edits and image jobs** approval. With that switch off, ArenaLLM stops and the
page offers **Approve edits and continue**. Approval resumes the same internal
run; it does not make the operator split or re-enter the request.

ArenaLLM never commits or pushes automatically. Review the expandable tool
trace and `git diff` before promoting the result.

## Image jobs

An image request can be written in the same prompt as an article request. If
ArenaLLM can find a compatible API-format Qwen Edit workflow and existing
repository reference images, it may queue the job after approval. If a required
reference or decision is missing, it asks instead of inventing one. The direct
CLI remains available for explicit local image work:

```bash
python tools/local-agent/comfy_cli.py \
  --workflow /path/to/qwen-image-edit-api.json \
  --reference docs/3d-reference/beanbean-battle/bowser-base.png \
  --prompt "Edit the supplied references into a historically consistent scene" \
  --output-prefix waluipedia/archive-scene
```

Keep LM Studio and ComfyUI local. Review generated images and the repository
diff before using them in the site.
