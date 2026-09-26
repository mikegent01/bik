#!/usr/bin/env python3
"""Bounded ComfyUI API adapter for Qwen Image Edit workflows.

Use a ComfyUI API-format export as the workflow input. The adapter patches
only prompts, seeds, output prefix, and LoadImage inputs; all model wiring is
kept in the user's workflow.
"""
from __future__ import annotations

import json
import mimetypes
import os
import time
import urllib.request
import uuid
from pathlib import Path
from typing import Any

DEFAULT_COMFY = os.environ.get("COMFYUI_URL", "http://127.0.0.1:8188")


def _url(base: str, path: str) -> str:
    return base.rstrip("/") + path


def post_json(base: str, path: str, value: dict[str, Any], timeout: int = 30) -> dict[str, Any]:
    request = urllib.request.Request(_url(base, path), data=json.dumps(value).encode(),
                                     headers={"Content-Type": "application/json"}, method="POST")
    with urllib.request.urlopen(request, timeout=timeout) as response:
        result = json.loads(response.read())
    if not isinstance(result, dict):
        raise RuntimeError("ComfyUI returned a non-object response")
    return result


def upload_image(base: str, path: Path, timeout: int = 60) -> str:
    """Upload one local repository image to ComfyUI's input directory."""
    boundary = "----WaluipediaAgent" + uuid.uuid4().hex
    data = path.read_bytes()
    mime = mimetypes.guess_type(path.name)[0] or "application/octet-stream"
    chunks = [
        f"--{boundary}\r\nContent-Disposition: form-data; name=\"image\"; filename=\"{path.name}\"\r\nContent-Type: {mime}\r\n\r\n".encode(),
        data,
        f"\r\n--{boundary}\r\nContent-Disposition: form-data; name=\"type\"\r\n\r\ninput".encode(),
        f"\r\n--{boundary}\r\nContent-Disposition: form-data; name=\"overwrite\"\r\n\r\ntrue".encode(),
        f"\r\n--{boundary}--\r\n".encode(),
    ]
    request = urllib.request.Request(_url(base, "/upload/image"), data=b"".join(chunks),
                                     headers={"Content-Type": f"multipart/form-data; boundary={boundary}"}, method="POST")
    with urllib.request.urlopen(request, timeout=timeout) as response:
        result = json.loads(response.read())
    name = result.get("name")
    if not name:
        raise RuntimeError(f"ComfyUI upload did not return a filename: {result}")
    return str(name)


def load_api_workflow(path: Path) -> dict[str, dict[str, Any]]:
    raw = json.loads(path.read_text(encoding="utf-8"))
    if isinstance(raw, dict) and isinstance(raw.get("prompt"), dict):
        raw = raw["prompt"]
    if not isinstance(raw, dict) or not raw:
        raise ValueError("workflow must be a non-empty ComfyUI API-format object")
    nodes = {str(key): value for key, value in raw.items()
             if isinstance(value, dict) and isinstance(value.get("class_type"), str)}
    if not nodes:
        raise ValueError("this looks like a ComfyUI UI export, not an API-format export; use Save (API Format)")
    return nodes


def _inputs(node: dict[str, Any]) -> dict[str, Any]:
    value = node.setdefault("inputs", {})
    if not isinstance(value, dict):
        raise ValueError("workflow node inputs must be an object")
    return value


def patch_workflow(nodes: dict[str, dict[str, Any]], positive: str, negative: str,
                   uploaded_images: list[str], seed: int | None = None,
                   filename_prefix: str = "waluipedia/qwen-edit") -> dict[str, dict[str, Any]]:
    """Patch an API graph and fail closed if references cannot be connected."""
    image_nodes = []
    qwen_nodes = []
    text_nodes = []
    seed_nodes = []
    save_nodes = []
    for node_id, node in nodes.items():
        cls = node.get("class_type", "")
        low = cls.lower()
        inputs = _inputs(node)
        if low == "loadimage" and "image" in inputs:
            image_nodes.append((node_id, inputs))
        if "qwenimageedit" in low or "qwenedit" in low:
            qwen_nodes.append((node_id, inputs))
        if low in {"cliptextencode", "cliptextencodeflux"} and "text" in inputs:
            text_nodes.append((node_id, inputs))
        if "seed" in inputs and any(token in low for token in ("ksampler", "sampler", "noise")):
            seed_nodes.append((node_id, inputs))
        if low == "saveimage" and "filename_prefix" in inputs:
            save_nodes.append((node_id, inputs))

    if len(uploaded_images) == 0:
        raise ValueError("at least one reference image is required")
    if len(image_nodes) < len(uploaded_images):
        raise ValueError(f"workflow has {len(image_nodes)} LoadImage node(s), but {len(uploaded_images)} reference image(s) were supplied")
    for (_, inputs), image_name in zip(image_nodes, uploaded_images):
        inputs["image"] = image_name

    if qwen_nodes:
        # Official Qwen Edit graphs generally use one node with prompt/prompt_1
        # or two encoder nodes with one prompt each. Support both forms.
        if len(qwen_nodes) == 1 and "prompt_1" in qwen_nodes[0][1]:
            qwen_nodes[0][1]["prompt"] = positive
            qwen_nodes[0][1]["prompt_1"] = negative
        else:
            for index, (_, inputs) in enumerate(qwen_nodes):
                key = "prompt" if "prompt" in inputs else "text" if "text" in inputs else None
                if key:
                    inputs[key] = positive if index == 0 else negative
    elif text_nodes:
        for index, (_, inputs) in enumerate(text_nodes[:2]):
            inputs["text"] = positive if index == 0 else negative
    else:
        raise ValueError("workflow has no Qwen Edit or CLIP text encoder node to receive prompts")

    if seed is not None and seed_nodes:
        seed_nodes[0][1]["seed"] = int(seed)
    for _, inputs in save_nodes:
        inputs["filename_prefix"] = filename_prefix
    return nodes


def queue(nodes: dict[str, dict[str, Any]], base: str, client_id: str | None = None) -> dict[str, Any]:
    return post_json(base, "/prompt", {"prompt": nodes, "client_id": client_id or str(uuid.uuid4())})


def wait_for_history(base: str, prompt_id: str, timeout: int = 900, interval: float = 2.0) -> dict[str, Any]:
    deadline = time.time() + timeout
    while time.time() < deadline:
        request = urllib.request.Request(_url(base, f"/history/{prompt_id}"))
        with urllib.request.urlopen(request, timeout=30) as response:
            history = json.loads(response.read())
        if prompt_id in history:
            return history[prompt_id]
        time.sleep(interval)
    raise TimeoutError(f"ComfyUI job {prompt_id} did not finish within {timeout} seconds")


def queue_from_files(workflow: Path, references: list[Path], positive: str, negative: str,
                     *, base: str = DEFAULT_COMFY, seed: int | None = None,
                     filename_prefix: str = "waluipedia/qwen-edit", wait: bool = False) -> dict[str, Any]:
    nodes = load_api_workflow(workflow)
    uploaded = [upload_image(base, path) for path in references]
    patch_workflow(nodes, positive, negative, uploaded, seed, filename_prefix)
    result = queue(nodes, base)
    prompt_id = result.get("prompt_id")
    if wait and prompt_id:
        result["history"] = wait_for_history(base, str(prompt_id))
    result["uploaded_images"] = uploaded
    return result
