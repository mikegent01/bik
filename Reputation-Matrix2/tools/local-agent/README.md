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

The runtime does not expose shell access, does not let an LM choose arbitrary
filesystem paths, and does not write canon merely because a model suggested it.
Normal chat has no repository context injected into its prompt, which prevents
an unrelated archive record from becoming a fabricated answer.
