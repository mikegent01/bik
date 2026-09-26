# Waluigi's WAH-Desk

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

## Chat workflow

The page is a ChatGPT-style local conversation. Type a question such as
`What is the latest current filing?` or a full change request and press send.
Waluigi's WAH-Desk returns a normal plaintext assistant message; its generated
plan, tool activity, evidence, and completion status are shown in a process
panel beneath the answer rather than replacing the conversation.

The browser saves multiple chat rooms locally, including their prompts,
answers, tool traces, and room titles. Select a saved room in the sidebar to
continue it, or use **New chat** to start a separate story or roleplay thread.
Recent room messages are sent back to the local agent, and the agent is told to
use the canonical Waluipedia files under `Reputation-Matrix2/data` as the site
canon before inventing story details. Do not manually split requests into
sections or create tasks. The agent automatically:

1. inspects the request and creates internal bounded work units;
2. reads/searches the repository before proposing a change;
3. chooses one allowlisted browse, edit, image, or audit action at a time;
4. feeds each bounded result back to LM Studio;
5. validates after patches and continues until done or a stop is required.

Internal checkpoint files are kept under
`Reputation-Matrix2/tools/.local-agent-runs/` and are ignored by Git. They are
for recovery and auditability, not a checklist that the operator has to manage.
The assistant answer is returned to the chat as plaintext. Tool actions and
results remain available under the assistant message when you need to audit
what happened.

## Creation mode and roleplay rooms

Open **Creation mode · roleplay** in the sidebar. The catalog is loaded from the
current local `characters.json` and `events.json` files each time the desk
starts or when **Refresh canon catalog** is pressed. Select any number of canon
characters and events, choose a campaign year/era, choose whether you are
playing yourself or one of the selected characters, and add room-only custom
characters or event seeds when the scene needs something new.

The selected context and saved room conversation are sent with each turn. The
agent retrieves relevant canon before continuing a scene and treats new events
as draft fiction rather than silently declaring them historical fact. Every five
player messages, the room saves a lore checkpoint containing the recent
transcript and selected continuity. That checkpoint stays in the local room;
it does not silently rewrite `characters.json` or `events.json`.

Automatically editing canonical files after every five messages would be a bad
default: roleplay often explores alternatives, contradicts itself, or produces
unapproved canon. Use an explicit approved repository-edit request when a draft
should become canon. The existing patch approval and audit boundary remains in
force.

## Speed and process visibility

The sidebar includes a parallel batch runner for up to six independent prompts.
The agent can also read files and search terms concurrently inside one run.
Large prompts are planned in a small worker pool, and the assistant trace shows
its generated work plan, current step, tool call, result, and completed step.
That is an observable process trace, not private hidden chain-of-thought.

The bounded tool set includes safe offline Python analysis over explicitly read
repository text. It cannot import modules, open files, use the network, spawn
processes, or write. This gives Gemma a fast way to count, compare, parse, and
summarize data without granting an unrestricted shell.

LM Studio requests use `LM_STUDIO_TIMEOUT=-1` by default. In Python, `-1` is
translated to `timeout=None`, which is the real no-socket-deadline setting;
fixed local audits still have safety bounds. The page has a cancel button so a
run can be stopped from the UI rather than waiting for another model turn.

The composer accepts PNG, JPEG, WEBP, and GIF attachments up to 7 MB. They are
sent as OpenAI-compatible image parts to a vision-capable loaded model such as
a compatible Gemma build. If the loaded model is text-only, the agent reports
that limitation instead of pretending it saw the image.

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
`SaveImage` node. Waluigi's WAH-Desk can queue a compatible workflow when it
finds local references and the request supplies enough detail; otherwise it asks
rather than fabricating a path. Text-to-image workflows may omit references;
edit workflows still require them. Explicit CLI use remains available through
`Reputation-Matrix2/tools/local-agent/comfy_cli.py`.

Uploaded workflow/reference files, if used by the CLI or compatibility API, are
saved under `workflow/intake-inputs/` and ignored by Git. The Windows Comfy
Desktop model paths belong to the machine running ComfyUI; they should not be
passed as repository paths or copied into Git. Comfy workflows refer to the
model filenames, so the Qwen text encoders, diffusion model, and VAE are picked
up by Comfy Desktop from its configured model directories. Set `COMFYUI_URL` if
the chat server and ComfyUI are on different local ports.
