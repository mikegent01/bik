# Chat-first local runtime

`agent_runtime.py` is the runtime behind `workflow/server.py`.

The design is intentionally smaller than a model-driven tool planner:

1. classify the current request locally;
2. answer normal conversation directly with LM Studio;
3. ask one clarification for ambiguous archive language;
4. use one bounded repository operation only for an explicit read;
5. write the target directly when the user asked (git is the undo);
6. never claim a tool ran when it did not.

## Every reply is written by the model

There are **no canned responses**. The deterministic layer decides *which*
bounded tool runs (if any) and hands the model structured, grounded context;
the local model writes every user-facing reply itself — clarifying questions,
file-lookup answers, draft presentations, failure explanations, and
repeat-handling included. The only fixed strings left are the offline notice
used when LM Studio cannot be reached at all.

On a repeat or an insistence (“i just told you”, resending the same message),
the model is told what the user already sent, what its own previous reply was,
and what is still missing — so it acknowledges the repeat and asks for only
the missing piece instead of looping the same question. A short answer that
supplies the missing piece (a bare name, a bare source title, or “make the
profile”) completes the request on the next turn.

A noun is not an instruction. These do not search the checkout:

- `I like this character`
- `what do you think about Freddy?`
- `draft a character profile for Freddy`
- `the character file looks good`
- `hello`
- `read above` (a reference to earlier conversation, not the archive)

These are explicit archive requests and may use a focused read:

- `read the article about Freddy in canon`
- `find Freddy in the repository`
- `what does this source say?`
- `read the factions json`

## Source-backed profile requests

A source-backed profile request is a separate staged workflow. It works as one
message or as several, and the source may be an event record **or a named
archive file**:

```text
for Freddy can you make a character profile for him
The Seven Nights at Fazbear: A Complete Record you can learn about him from
```

```text
for freddy
you may edit files
The Seven Nights at Fazbear: A Complete Record you can learn about him from
maybe we can make a profile for him
```

```text
Cosmic Jester seems to be important can we create a character profile for him
please check the factions json and edit the file
```

The runtime resolves the source (an event by title search, or a record inside a
named file such as `factions.json`), resolves the named participant or
reference (`Gabriel / Freddy`; the Cosmic Jester material in the Disaster Inc.
faction record), drafts the `characters.json` object from that evidence —
quoting sentences that actually mention the character (for a character that is
only referenced, the full name must appear in a sentence, and matching event
records are searched for extra grounded material) — and **writes it directly**.
The model writes the profile prose itself (title, summary, description,
`waluigiComment`) in the Waluipedia voice from the quoted evidence, while ids,
key events, related articles, and the source record stay deterministic and
grounded; if the model is unavailable, the deterministic prose is written
unchanged. Re-running a profile updates the existing record in place.

There is no approval step: the archive lives in git, version control is the
undo, and the only gate left is that the user must have asked. Notes after a
profile is on file revise it the same way — “this is the leader of it i
guess”, “make it sound good, waluigi tone”, “write it better, flesh out the
description” — and the revised profile is written immediately. Revision wording
always wins over approval wording (“write it better” is a revision, not a go-
ahead). Courtesies (“thanks”) stay chat. Writes are deterministic — they still
execute when the model is offline, and the reply then carries the offline
notice plus a bracketed note of exactly what completed, instead of stopping
the work.

Permission lines such as “you may edit files” are understood without triggering
a clarification, and the name may appear as the subject of the sentence
(“Cosmic Jester seems to be important … profile for him”) rather than after
“for”.

Unresolvable sources no longer pretend otherwise: an empty search never falls
back to the first event in the file. The model is given the real failure
detail — closest records, or the participants a record actually lists — and
phrases the follow-up itself.

The runtime does not expose shell access, does not let an LM choose arbitrary
filesystem paths, and does not write canon merely because a model suggested it.
Normal chat has no repository context injected into its prompt, which prevents
an unrelated archive record from becoming a fabricated answer.

## The archive's own generator tools

The runtime can run the repository's generator (`tools/generate_all.py` and its
genkit systems) directly. Asking to “generate a battle”, “make some events”,
“run the generator for reputation”, or “fill in the faction dossiers”:

1. reads the live inventory (which systems have pending work, and how much);
2. picks the system from the request — or lets the model choose from the
   inventory when the request does not name one;
3. runs one bounded generation (`--only <system> --limit N`, no shell, the
   chat's model endpoint passed through to genkit via `LM_STUDIO_URL`);
4. reports the result in the model's own words, quoting real counts.

A system with nothing pending is reported honestly from the inventory instead
of running anything.

## Failure notices never become conversation

The runtime's own error texts (“LM Studio is offline”, “returned HTTP 400”, “did
not finish in time”) are shown to the user but never sent back to the model as
conversation history — a model that reads “LM Studio is offline” in its history
starts insisting it cannot edit files. Both the server (`_redact_conversation`
drops them) and the chat page (error notices are marked and excluded from the
next request) enforce this, and the page no longer sends the current message
twice. Transient LM Studio HTTP errors (model backend channel errors) are
retried once before anything is reported.
