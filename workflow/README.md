# Waluipedia ArenaLLM

This is a dependency-free, prompt-first local page for the bounded LM Studio
agent and the ComfyUI adapter.

## Start it

From the repository root:

```bash
python workflow/server.py
```

Open `http://127.0.0.1:8787/`. The server binds `0.0.0.0` by default for a
sandbox preview; the browser still uses the page's same-origin API. On Windows,
double-click `workflow\Waluipedia Workflow.bat`.

Optional local-service check:

```bash
python workflow/server.py --check
```

## Prompt-first workflow

The page intentionally has one main input. Enter the full request in natural
language and press **Start ArenaLLM**. Do not manually split it into sections
or create tasks. The agent automatically:

1. inspects the request and creates internal bounded work units;
2. reads/searches the repository before proposing a change;
3. chooses one allowlisted browse, edit, image, or audit action at a time;
4. feeds each bounded result back to LM Studio;
5. validates after patches and continues until done or a stop is required.

Internal checkpoint files are kept under
`Reputation-Matrix2/tools/.local-agent-runs/` and are ignored by Git. They are
for recovery and auditability, not a checklist that the operator has to manage.
The live trace on the page shows actual actions and results.

## Safety boundary

LM Studio and ComfyUI remain local. The model receives no shell, delete, Git,
or arbitrary filesystem tool. Its repository tools are bounded to this checkout:
focused reads, focused search, status, diff, and exact one-match patches. Fixed
audits are the only subprocesses available to it.

Browsing and audits are read-only. Patches and image jobs stop for explicit
page approval unless **Allow local edits and image jobs** is enabled before the
run. The agent can never commit, push, or open a pull request.

## Qwen workflow requirement

For image requests, use a ComfyUI **Save (API Format)** workflow. The adapter
requires Qwen Edit prompt encoding, one or more `LoadImage` nodes, and a
`SaveImage` node. ArenaLLM can queue a compatible workflow when it finds local
references and the request supplies enough detail; otherwise it asks rather
than fabricating a path. Explicit CLI use remains available through
`Reputation-Matrix2/tools/local-agent/comfy_cli.py`.

Uploaded workflow/reference files, if used by the CLI or compatibility API, are
saved under `workflow/intake-inputs/` and ignored by Git.
