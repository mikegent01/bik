# Local Waluipedia Agent

This is the first local orchestration layer for LM Studio plus ComfyUI. It is
intentionally separate from the existing Hub and GenKit tools: those tools
remain available, while this layer adds bounded planning and image workflow
execution.

## 1. Turn a large request into a checklist

```bash
python tools/local-agent/agent.py plan \
  --input request.txt \
  --max-chars 6000 \
  --max-sections 20
```

For an offline deterministic plan:

```bash
python tools/local-agent/agent.py plan --input request.txt --no-llm
```

LM Studio is expected at `http://127.0.0.1:1234/v1/chat/completions`. Override
with `LM_STUDIO_URL` and `LM_STUDIO_MODEL`. Each section is sent in a separate bounded request. The planner probes LM
Studio once with a two-second timeout before starting; if it is offline, it
immediately uses deterministic checklist items instead of waiting once per
section. A failed local model call also falls back rather than retrying forever.

Runs are checkpointed under `tools/.local-agent-runs/` (ignored by Git):

```text
request.txt       original request
plan.json         bounded source sections and planning results
checklist.json    pending/in_progress/done/blocked tasks
state.json        next task pointer
```

Progress commands:

```bash
python tools/local-agent/agent.py next RUN_ID
python tools/local-agent/agent.py mark RUN_ID task-01 in_progress
python tools/local-agent/agent.py mark RUN_ID task-01 done --note "focused audit passed"
```

The agent does not decide that a task is complete from model prose. A local
operator or a later repository tool must mark it done after validation.

## 2. Actual tool-using agent loop

The GUI's **Run agent** button uses `agent_runtime.py`. This is different from
`agent.py plan`: LM Studio receives the active checklist item, chooses one
allowlisted action, gets the tool result, and chooses the next action. It can
read, search, patch, run fixed audits, queue a reference-backed image job, or
ask for input. It cannot run arbitrary shell commands or Git operations.

A patch or image job stops with an approval-required result unless the GUI's
explicit write switch is enabled. Every action is recorded in the run's
`agent-log.jsonl`, and the loop stops after a bounded number of steps.

## 3. Repository tools (bounded)

The local model may use `repo_tools.py` for focused reads, searches, status,
diff, and exact one-match patches:

```bash
python tools/local-agent/repo_tools.py read Reputation-Matrix2/data/events.json --limit 12000
python tools/local-agent/repo_tools.py search Bowser --dir Reputation-Matrix2/data --limit 20
python tools/local-agent/repo_tools.py status
python tools/local-agent/repo_tools.py diff Reputation-Matrix2/data/events.json
```

A patch refuses zero or multiple matches and all paths must stay inside the
checkout. There is no commit, push, delete, or arbitrary shell tool.

## 4. Queue a Qwen Edit job with required image references

Export the ComfyUI graph with **Save (API Format)** and pass it directly:

```bash
python tools/local-agent/comfy_cli.py \
  --workflow /path/to/qwen-image-edit-api.json \
  --reference docs/3d-reference/beanbean-battle/bowser-base.png \
  --reference docs/3d-reference/beanbean-battle/fawful-base.png \
  --reference docs/3d-reference/beanbean-battle/cackletta-base.png \
  --prompt "Edit the supplied references into a historically consistent Bowser Castle scene..." \
  --output-prefix waluipedia/bowser-castle \
  --wait
```

Set `COMFYUI_URL` or pass `--comfy` if ComfyUI is not on port 8188. The queue
adapter uploads every reference to ComfyUI first, patches the workflow's
`LoadImage` nodes, and fails if the graph has too few image inputs. It also
patches Qwen positive/negative prompts, seed, and output prefix. Model loading,
LoRA choice, sampler wiring, and resolution remain in the exported workflow.

## 5. Operating rules

- Keep LM Studio and ComfyUI local; do not expose either server to the public
  internet.
- Never give Gemma unrestricted shell access.
- Review generated images and `git diff` before promoting assets into the site.
- The agent never commits, pushes, deletes, or opens a PR automatically.
- Use repository-relative reference paths in the checklist so the run is
  portable across machines.
- Keep all prompts and generated output names scoped to the active checklist
  item.
