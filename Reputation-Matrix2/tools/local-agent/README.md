# Chat-first local runtime

`agent_runtime.py` is the runtime behind `workflow/server.py`.

The design is intentionally smaller than a model-driven tool planner:

1. classify the current request locally;
2. answer normal conversation directly with LM Studio;
3. ask one clarification for ambiguous archive language;
4. use one bounded repository operation only for an explicit read;
5. read a write target before any approval-gated write;
6. never claim a tool ran when it did not.

A noun is not an instruction. These do not search the checkout:

- `I like this character`
- `what do you think about Freddy?`
- `draft a character profile for Freddy`
- `the character file looks good`
- `hello`

These are explicit archive requests and may use a focused read:

- `read the article about Freddy in canon`
- `find Freddy in the repository`
- `what does this source say?`

Vague creation requests stop for input before resolving a source. A request such
as `The article has some people we need to create` asks for the names first. A
request such as `create a new character file` asks for the exact target.

A source-backed profile request is a separate staged workflow. For example:

```text
for Freddy can you make a character profile for him
The Seven Nights at Fazbear: A Complete Record you can learn about him from
```

The runtime resolves the source event, resolves the named participant (`Gabriel /
Freddy`), drafts the `characters.json` object from that evidence, shows the draft,
and waits for `approve`. It does not ask for an unrelated target file and it does
not write before the exact draft is approved. The approval then writes one unique
object and validates the JSON collection.

The same request works when it arrives in one message with permission language
included, because the source title is extracted from either side of the
“you can learn about him from” marker:

```text
for freddy
you may edit files
The Seven Nights at Fazbear: A Complete Record you can learn about him from
maybe we can make a profile for him
```

It also works when the pieces arrive as separate messages: “for freddy” and the
source name in earlier turns, the profile words in the latest one. The pieces are
reassembled from the conversation, and the trailing request line (“maybe we can
make a profile for him”) is never mistaken for the source title.

## No repeated canned questions

A clarification is asked once. If the user resends the same message, or answers
with “i just told you,” the runtime does not repeat the question it just asked.
Instead it states what it already has and asks for only the missing piece:

- both pieces known → “Reply ‘make the profile’ and I will draft it for your
  approval”;
- character known → “I am still missing the source record to draft from”;
- source known → “I am still missing the character’s name”;
- nothing known → both pieces are named plainly.

When the user then sends just the missing piece — a bare name, a bare source
title, or “make the profile” — the profile flow runs immediately. Repeating “i
just told you” after a canned question re-serves the grounded draft instead of
re-asking. The guard only fires after one of this runtime’s own canned
questions, so ordinary model answers are never mistaken for a stuck gate.

Unresolvable source titles no longer pretend otherwise: an empty search never
falls back to the first event in the file. The failure message names the closest
event records it can see, and a participant mismatch lists the participants the
record actually has.

The runtime does not expose shell access, does not let an LM choose arbitrary
filesystem paths, and does not write canon merely because a model suggested it.
Normal chat has no repository context injected into its prompt, which prevents
an unrelated archive record from becoming a fabricated answer.
