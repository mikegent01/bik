# Waluipedia Local Intake GUI

A small dependency-free local GUI for the bounded LM Studio planner and the
ComfyUI Qwen Image Edit adapter.

## Start it any time

From the repository root:

```bash
python workflow/server.py
```

Open:

```text
http://127.0.0.1:8787/
```

On Windows, double-click `workflow\Waluipedia Workflow.bat`.

Optional checks:

```bash
python workflow/server.py --check
python workflow/server.py --port 8788
```

## What it does

1. Accepts a large request.
2. Sends bounded sections to local LM Studio, when enabled.
3. Falls back quickly if LM Studio is offline.
4. Creates a persistent checklist under
   `Reputation-Matrix2/tools/.local-agent-runs/`.
5. Lets you mark individual items in progress, done, or blocked.
6. Runs a real bounded LM Studio loop: observe task → choose one allowlisted
   action → execute locally → return the result → validate → advance.
7. Lets you choose a ComfyUI API-format workflow and reference files from the
   browser.
8. Uploads the references to local ComfyUI and queues the Qwen Image Edit job.

The GUI itself binds to `127.0.0.1`. LM Studio and ComfyUI are expected to be
local as well. No cloud service or external package is required.

## Qwen workflow requirement

Use a ComfyUI **Save (API Format)** export. The ordinary UI graph export is
rejected because it cannot be safely submitted to `/prompt`. The selected
workflow must contain Qwen Edit prompt encoding, one or more `LoadImage` nodes,
and a `SaveImage` node.

The reference image requirement is enforced: a Qwen job cannot be queued
without at least one supplied image. The adapter patches the supplied images
into `LoadImage` nodes before submission.

Uploaded workflow/reference files are saved under `workflow/intake-inputs/` and
ignored by Git. Repository paths can also be entered directly.

## Agent loop and safety boundary

The **Run agent** button is the actual tool-using path. Gemma receives the
current checklist task and may choose only `repo_read`, `repo_search`,
`repo_patch`, `run_audit`, `queue_image`, `finish_task`, or `ask_user`. The
server executes those actions locally and feeds the bounded result back to the
model. It stops at a maximum step count and writes `agent-log.jsonl` beside the
run checkpoint.

Repository patches and image jobs are disabled until **Allow local patches and
image jobs** is explicitly enabled. The GUI does not expose a shell to Gemma,
and the agent cannot commit, push, delete, or open pull requests. Review the
checklist, generated image, and `git diff` before promoting any result into the
site.
