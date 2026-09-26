# Qwen Image Edit workflow slot

The local agent intentionally does not invent model wiring. Put a ComfyUI
**Save (API Format)** export here as:

```text
qwen-image-edit-api.json
```

The agent patches only these inputs:

- `LoadImage.image` — every supplied repository reference must be uploaded and
  connected to a load-image node;
- Qwen Edit positive and negative prompt fields, or the first two
  `CLIPTextEncode` nodes as a fallback;
- sampler `seed`, when present;
- `SaveImage.filename_prefix`, when present.

The current ComfyUI Qwen Image Edit workflow should contain
`TextEncodeQwenImageEditPlus` (or the current Qwen Edit equivalent), at least
one `LoadImage`, and a `SaveImage`. Export the API graph from ComfyUI instead
of using the normal UI workflow JSON. The runner rejects a UI graph so it cannot
silently submit an empty or differently wired prompt.

The missing attached workflow is not present in this checkout. Once it is
available locally, copy it here or pass it directly with `--workflow`.

## Reference policy

Qwen Edit jobs must include at least one image. Use repository references such
as:

```text
../3d-reference/beanbean-battle/bowser-base.png
../3d-reference/beanbean-battle/fawful-base.png
../3d-reference/beanbean-battle/cackletta-base.png
../3d-reference/bowser-troops/goomba-base.png
../3d-reference/bowser-troops/koopa-troopa-base.png
../3d-reference/bowser-troops/hammer-bro-base.png
../3d-reference/bowser-troops/magikoopa-base.png
```

The adapter uploads each reference through ComfyUI's local `/upload/image`
endpoint before queuing `/prompt`; it never replaces the references with a
text-only generation.
