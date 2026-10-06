#!/usr/bin/env python3
"""Tests for tools/make-token-plates.py — the cut, the pixel pass, apply/check, and the ComfyUI render loop
against a fake ComfyUI that speaks just enough of the real server's HTTP (upload, prompt, history, view).

  python3 tools/tests/test-make-token-plates.py
"""
import io
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
import threading
from http.server import BaseHTTPRequestHandler, HTTPServer

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
TOOL = os.path.join(ROOT, "tools", "make-token-plates.py")
sys.path.insert(0, os.path.join(ROOT, "tools"))
import importlib.util  # noqa: E402

from PIL import Image, ImageDraw  # noqa: E402

PASSED = FAILED = 0


def check(cond, what):
    global PASSED, FAILED
    if cond:
        PASSED += 1
    else:
        FAILED += 1
        print("FAIL:", what)


def load_tool(root):
    os.environ["TOKEN_PLATES_ROOT"] = root
    spec = importlib.util.spec_from_file_location("mtp", TOOL)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def figure(w, h, colour=(40, 60, 200)):
    """A stand-in character: body + head on a transparent field."""
    im = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    d.ellipse((w * 0.3, h * 0.04, w * 0.7, h * 0.26), fill=colour + (255,))
    d.rectangle((w * 0.2, h * 0.26, w * 0.8, h * 0.9), fill=(200, 60, 40, 255))
    d.rectangle((w * 0.3, h * 0.9, w * 0.7, h * 0.96), fill=(20, 20, 20, 255))
    return im


# ------------------------------------------------------------ fixtures ----
def scratch_repo():
    root = tempfile.mkdtemp(prefix="plates-")
    rm = os.path.join(root, "Reputation-Matrix2")
    for d in ("data", "portraits", "portraits/player/fullbody"):
        os.makedirs(os.path.join(rm, d))
    fig = figure(400, 900)
    fig.save(os.path.join(rm, "portraits", "fullguy.png"))                       # transparent full-body lead
    bust = Image.new("RGB", (300, 300), (230, 230, 230))
    bust.paste(figure(300, 700).crop((0, 0, 300, 300)), (0, 0), figure(300, 700).crop((0, 0, 300, 300)))
    bust.save(os.path.join(rm, "portraits", "bustguy.jpg"))                      # opaque bust lead
    flat = Image.new("RGB", (600, 600), (245, 240, 225))
    f2 = figure(260, 560); flat.paste(f2, (170, 20), f2)
    flat.save(os.path.join(rm, "portraits", "flatguy.png"))                      # full body on a flat cream field
    px = Image.new("RGBA", (60, 90), (0, 0, 0, 0)); d = ImageDraw.Draw(px)
    d.rectangle((20, 5, 40, 60), fill=(255, 255, 255, 255)); d.rectangle((5, 75, 55, 85), fill=(0, 0, 0, 255))   # sprite + label
    px.save(os.path.join(rm, "portraits", "pixelguy.png"))
    arts = [
        {"id": "fullguy", "name": "Full Guy", "race": "Toad", "image": "portraits/fullguy.png", "imageCaption": "Lead plate — established look: blue head, red coat."},
        {"id": "bustguy", "name": "Bust Guy", "race": "Human", "image": "portraits/bustguy.jpg"},
        {"id": "flatguy", "name": "Flat Guy", "image": "portraits/flatguy.png"},
        {"id": "pixelguy", "name": "Pixel Guy", "image": "portraits/pixelguy.png"},
        {"id": "linkguy", "name": "Link Guy", "image": "https://example.invalid/x.jpg"},
        {"id": "nosheet", "name": "No Sheet", "image": "portraits/bustguy.jpg"},
    ]
    json.dump(arts, open(os.path.join(rm, "data", "characters.json"), "w", encoding="utf-8"), indent=2, ensure_ascii=False)
    sheets = {"meta": {}, "sheets": [{"id": i, "name": i, "source": "generated", "party": i == "fullguy", "portrait": "x"} for i in
                                     ("fullguy", "bustguy", "flatguy", "pixelguy", "linkguy")], "skipped": []}
    json.dump(sheets, open(os.path.join(rm, "data", "sheets.json"), "w", encoding="utf-8"))
    json.dump([{"id": "e1", "participants": ["bustguy", "bustguy", "bustguy"]}], open(os.path.join(rm, "data", "events.json"), "w", encoding="utf-8"))
    return root


# ------------------------------------------------------- fake ComfyUI ----
class FakeComfy(BaseHTTPRequestHandler):
    """Upload → prompt → history → view, for either engine. 'Renders' by handing back the uploaded reference
    canvas; the second attempt for an id stretches the figure to full height, so the QC/retry path is exercised.
    With engine qwen21 a prompt that asks for transparency (or the remove-background instruction) comes back as a
    real RGBA image, keyed off the canvas colour — what Qwen-Image-2.1 does natively."""
    engine = "qwen21"
    reject = ""
    inputs = {}
    outputs = {}
    attempts = {}
    prompts = []

    def log_message(self, *_):
        pass

    def _send(self, code, body, ctype="application/json"):
        self.send_response(code)
        self.send_header("Content-Type", ctype)
        self.end_headers()
        self.wfile.write(body if isinstance(body, bytes) else json.dumps(body).encode())

    def do_GET(self):
        if self.path.startswith("/system_stats"):
            return self._send(200, {"system": {"os": "fake"}})
        if self.path.startswith("/object_info/"):
            name = self.path.rsplit("/", 1)[1]
            have = {"qwen21": {"TextEncodeQwenImage21", "QwenImage21Cache"}, "qwen-edit": {"TextEncodeQwenImageEdit"}}[self.engine]
            if name == "UNETLoader":
                return self._send(200, {"UNETLoader": {"input": {"required": {"unet_name": [["qwen_image_2.1_int8_convrot.safetensors", "other.safetensors"]], "weight_dtype": [["default"]]}}}})
            return self._send(200, {name: {"input": {}}} if name in have else {})
        if self.path.startswith("/history/"):
            pid = self.path.rsplit("/", 1)[1]
            out = self.outputs.get(pid)
            return self._send(200, {pid: {"outputs": {"60": {"images": [{"filename": out, "subfolder": "", "type": "output"}]}},
                                          "status": {"status_str": "success", "completed": True}}} if out else {})
        if self.path.startswith("/view?"):
            fn = re.search(r"filename=([^&]+)", self.path).group(1)
            return self._send(200, open(os.path.join(self.server.outdir, fn), "rb").read(), "image/png")
        self._send(404, {})

    def do_POST(self):
        n = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(n)
        if self.path == "/upload/image":
            m = re.search(rb'filename="([^"]+)"\r\nContent-Type: [^\r]+\r\n\r\n', body)
            name = m.group(1).decode()
            data = body[m.end():body.rfind(b"\r\n--")]
            path = os.path.join(self.server.outdir, "in-" + name)
            open(path, "wb").write(data)
            self.inputs[name] = path
            return self._send(200, {"name": name, "subfolder": "token-plates", "type": "input"})
        if self.path == "/prompt" and self.reject:
            return self._send(400, {"error": {"type": "prompt_outputs_failed_validation", "message": "Prompt outputs failed validation"},
                                    "node_errors": {"451": {"class_type": "UNETLoader", "errors": [{"type": "value_not_in_list", "message": self.reject, "details": "unet_name: 'x'"}]}}})
        if self.path == "/prompt":
            import numpy as np
            wf = json.loads(body)["prompt"]
            self.prompts.append(wf)
            loads = [v for v in wf.values() if v["class_type"] == "LoadImage"]
            prefix = [v for v in wf.values() if v["class_type"] == "SaveImage"][0]["inputs"]["filename_prefix"]
            enc = [v for v in wf.values() if v["class_type"].startswith("TextEncodeQwenImage")]
            text = " ".join(v["inputs"].get("prompt", "") for v in enc)
            cid = prefix.split("/")[-1]
            self.attempts[cid] = self.attempts.get(cid, 0) + 1
            if loads:
                im = Image.open(self.inputs[loads[0]["inputs"]["image"].split("/")[-1]]).convert("RGB")
            else:   # text-only: a figure drawn "from the record" on the empty latent's canvas (magenta field, keyed below)
                lat = [v for v in wf.values() if v["class_type"] == "EmptyLatentImage"][0]["inputs"]
                im = Image.new("RGB", (lat["width"], lat["height"]), (255, 0, 255))
                fig = figure(int(lat["width"] * 0.35), int(lat["height"] * 0.8), (90, 50, 20))
                im.paste(fig, ((im.width - fig.width) // 2, int(im.height * 0.1)), fig)
            arr = np.asarray(im).astype(int)
            ring = np.concatenate([arr[0], arr[-1], arr[:, 0], arr[:, -1]])
            kc = np.median(ring, axis=0)
            mask = np.sqrt(((arr - kc) ** 2).sum(axis=2)) > 95
            if self.attempts[cid] >= 2 and cid != "removebg":   # "the model drew the body": stretch the non-key content to 85% of the height
                ys, xs = np.where(mask)
                fig = im.crop((xs.min(), ys.min(), xs.max() + 1, ys.max() + 1)).resize((int(im.width * 0.4), int(im.height * 0.85)))
                im = Image.new("RGB", im.size, tuple(int(x) for x in kc)); im.paste(fig, ((im.width - fig.width) // 2, int(im.height * 0.07)))
                arr = np.asarray(im).astype(int); mask = np.sqrt(((arr - kc) ** 2).sum(axis=2)) > 95
            transparent = self.engine == "qwen21" and ("Transparent background" in text or "Remove the background" in text)
            if transparent:
                rgba = np.dstack([np.asarray(im), (mask * 255).astype("uint8")])
                im = Image.fromarray(rgba, "RGBA")
            pid = "p%d" % len(self.prompts)
            fn = "%s.png" % pid
            im.save(os.path.join(self.server.outdir, fn))
            self.outputs[pid] = fn
            return self._send(200, {"prompt_id": pid, "number": len(self.prompts), "node_errors": {}})
        self._send(404, {})


def serve(engine="qwen21"):
    outdir = tempfile.mkdtemp(prefix="fakecomfy-")
    FakeComfy.engine = engine
    FakeComfy.inputs, FakeComfy.outputs, FakeComfy.attempts, FakeComfy.prompts = {}, {}, {}, []
    srv = HTTPServer(("127.0.0.1", 0), FakeComfy)
    srv.outdir = outdir
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    return srv, "http://127.0.0.1:%d" % srv.server_address[1]


# ---------------------------------------------------------------- tests ----
def main():
    root = scratch_repo()
    rm = os.path.join(root, "Reputation-Matrix2")
    env = dict(os.environ, TOKEN_PLATES_ROOT=root)
    run = lambda *args: subprocess.run([sys.executable, TOOL, *args], env=env, capture_output=True, text=True)  # noqa: E731

    mod = load_tool(root)

    # plan: statuses
    out = run("plan").stdout
    check("READY-LEAD 1" in out and "GENERATE 2" in out and "CUT 1" in out and "SMALL 1" in out, "plan statuses: " + out.splitlines()[0])
    check("linkguy" in out and "bustguy" in out, "plan lists the ones to render")

    # cut --flat keys the cream field, keeps the figure
    out = run("cut", "--flat").stdout
    plate = os.path.join(rm, "portraits/player/fullbody/flatguy.png")
    check(os.path.isfile(plate) and "border clear 100%" in out, "cut --flat made a transparent plate: " + out.strip())
    im = Image.open(plate)
    check(im.mode == "RGBA" and im.size[0] == im.size[1] and im.getpixel((0, 0))[3] == 0, "flat plate is square RGBA with a clear corner")
    a = im.split()[3]
    check(a.getbbox()[3] - a.getbbox()[1] > im.size[1] * 0.85, "flat plate kept the whole figure")

    # chroma cut keys enclosed holes too
    hole = Image.new("RGB", (400, 400), (255, 0, 255)); d = ImageDraw.Draw(hole)
    d.rectangle((100, 50, 300, 350), fill=(30, 30, 30)); d.rectangle((150, 150, 250, 250), fill=(255, 0, 255))
    hp = os.path.join(root, "hole.png"); hole.save(hp)
    out = run("cut", "--id", "bustguy", "--src", hp).stdout
    hp_out = Image.open(os.path.join(rm, "portraits/player/fullbody/bustguy.png"))
    cx = hp_out.size[0] // 2
    check(hp_out.getpixel((cx, cx))[3] == 0, "chroma key clears the enclosed hole")
    os.remove(os.path.join(rm, "portraits/player/fullbody/bustguy.png"))

    # pixel: label dropped, whole-pixel upscale
    out = run("pixel").stdout
    pp = os.path.join(rm, "portraits/player/fullbody/pixelguy.png")
    check(os.path.isfile(pp) and "1 label block(s) dropped" in out, "pixel pass dropped the label: " + out.strip())
    pim = Image.open(pp)
    check(max(pim.size) >= 640 and pim.getpixel((pim.size[0] // 2, pim.size[1] - 3))[3] == 0, "pixel plate upscaled and the label row is gone")

    # apply wires fullBody after imageCaption / image
    out = run("apply", "--date", "2026-10-05").stdout
    arts = {x["id"]: x for x in json.load(open(os.path.join(rm, "data/characters.json"), encoding="utf-8"))}
    check(arts["flatguy"].get("fullBody") == "portraits/player/fullbody/flatguy.png" and "cut from a keyed render on 2026-10-05" in arts["flatguy"]["fullBodyCaption"], "apply wired flatguy")
    check(list(arts["flatguy"].keys()).index("fullBody") == list(arts["flatguy"].keys()).index("image") + 1, "fullBody sits right after image")
    check("fullBody" not in arts["nosheet"], "apply leaves articles without a plate alone")

    # render against the fake ComfyUI — Qwen-Image-Edit engine (chroma key)
    srv, url = serve("qwen-edit")
    raw = os.path.join(root, "renders")
    res = run("render", "--url", url, "--raw-dir", raw, "--retries", "2", "--date", "2026-10-05")
    out = res.stdout + res.stderr
    check("(qwen-edit;" in out, "engine picked from the server's nodes: " + out[:200])
    check("bustguy: attempt 1 not usable" in out and "bust?" in out, "QC rejected the bust-sized first attempt: " + out[-400:])
    check(re.search(r"bustguy: ok in \d+s \(seed \d+, attempt 2\)", out) is not None, "second attempt accepted")
    check("linkguy: no usable reference" in out, "hotlinked lead is skipped with a reason")
    check("render: 1 plated" in out, "summary counts: " + out.strip().splitlines()[-1])
    bp = os.path.join(rm, "portraits/player/fullbody/bustguy.png")
    check(os.path.isfile(bp) and Image.open(bp).getpixel((0, 0))[3] == 0, "render produced a transparent plate")
    arts = {x["id"]: x for x in json.load(open(os.path.join(rm, "data/characters.json"), encoding="utf-8"))}
    check(arts["bustguy"].get("fullBody") == "portraits/player/fullbody/bustguy.png", "render applied the plate to the article")
    log = json.load(open(os.path.join(raw, "render-log.json")))
    check(log["bustguy"]["ok"] and log["bustguy"]["attempt"] == 2 and log["linkguy"] == {"skipped": "no reference"}, "render log")
    wf = FakeComfy.prompts[0]
    pos = wf["76"]["inputs"]["prompt"]; neg = wf["77"]["inputs"]["prompt"]
    check("whole figure" in pos and "Extend the body downward" in pos and "bright magenta" in pos, "edit prompt filled on the sampler's positive")
    check("extra limbs" in neg and "cropped feet" not in neg and wf["3"]["inputs"]["seed"] > 0 and wf["78"]["inputs"]["image"].endswith("bustguy.png"), "negative, seed and LoadImage filled")
    check(os.path.isfile(os.path.join(raw, "bustguy.rejected-1.png")), "rejected attempt kept for eyes")
    res = run("render", "--url", url, "--raw-dir", raw)
    check("render: 0 plated" in res.stdout, "resume skips plated ids: " + res.stdout.strip().splitlines()[-1])
    srv.shutdown()

    # render — Qwen-Image-2.1 engine: native alpha, portrait reference canvas, <image1> prompt
    srv, url = serve("qwen21")
    os.remove(bp)
    arts = json.load(open(os.path.join(rm, "data/characters.json"), encoding="utf-8"))
    for art in arts:
        art.pop("fullBody", None); art.pop("fullBodyCaption", None)
    json.dump(arts, open(os.path.join(rm, "data/characters.json"), "w", encoding="utf-8"), indent=2, ensure_ascii=False)
    raw2 = os.path.join(root, "renders21")
    res = run("render", "--url", url, "--raw-dir", raw2, "--retries", "2", "--ids", "bustguy", "--steps", "8", "--resolution", "1536")
    out = res.stdout + res.stderr
    check("(qwen21;" in out and re.search(r"bustguy: ok in \d+s \(seed \d+, attempt 2\)", out), "2.1 engine renders and retries: " + out[-300:])
    wf = FakeComfy.prompts[0]
    enc = wf["474"]["inputs"]
    check("<image1>" in enc["prompt"] and "Transparent background" in enc["prompt"] and enc["negative_prompt"] == mod.NEGATIVE, "2.1 prompt on the one encoder node")
    check(enc["resolution"] == 1536 and wf["458"]["inputs"]["steps"] == 8 and wf["458"]["inputs"]["cfg"] == 1.0 and "469" in wf, "2.1 graph tuned: resolution, steps, cache node kept")
    check(enc["images.image_1"] == ["470", 0] and wf["470"]["inputs"]["image"].endswith("bustguy.png"), "reference wired into images.image_1")
    ref = Image.open(os.path.join(raw2, "bustguy.ref.png"))
    check(ref.size == (832, 1216), "2.1 reference canvas is portrait: %s" % (ref.size,))
    rawim = Image.open(os.path.join(raw2, "bustguy.png"))
    check(rawim.mode == "RGBA", "the fake 2.1 returned RGBA")
    log = json.load(open(os.path.join(raw2, "render-log.json")))
    check(log["bustguy"]["ok"] and log["bustguy"]["engine"] == "qwen21", "2.1 log entry")
    check(os.path.isfile(bp) and Image.open(bp).getpixel((0, 0))[3] == 0, "2.1 plate on disk, transparent")
    # Renderer.remove_background: a second pass with the official instruction
    comfy = mod.Comfy(url)
    rend = mod.Renderer(comfy, resolution=1024)
    opaque = os.path.join(root, "opaque.png")
    Image.open(os.path.join(raw2, "bustguy.ref.png")).convert("RGB").save(opaque)
    outp = rend.remove_background(opaque, os.path.join(root, "removed.png"))
    check(Image.open(outp).mode == "RGBA" and FakeComfy.prompts[-1]["474"]["inputs"]["prompt"] == mod.REMOVE_BG_PROMPT, "remove-background pass")
    check(comfy.choices("UNETLoader", "unet_name") == ["qwen_image_2.1_int8_convrot.safetensors", "other.safetensors"], "loader choices read from the server")
    srv.shutdown()

    # render --full: one attempt each; bustguy fails QC (bust) -> best attempt kept + flagged; linkguy drawn from the record
    srv, url = serve("qwen21")
    arts = json.load(open(os.path.join(rm, "data/characters.json"), encoding="utf-8"))
    for art in arts:
        art.pop("fullBody", None); art.pop("fullBodyCaption", None)
    json.dump(arts, open(os.path.join(rm, "data/characters.json"), "w", encoding="utf-8"), indent=2, ensure_ascii=False)
    for f in os.listdir(os.path.join(rm, "portraits/player/fullbody")):
        os.remove(os.path.join(rm, "portraits/player/fullbody", f))
    raw3 = os.path.join(root, "renders-full")
    res = run("render", "--full", "--url", url, "--raw-dir", raw3, "--retries", "0", "--date", "2026-10-05")
    out = res.stdout + res.stderr
    check("full run" in out and "kept the best of 1" in out and "needs eyes" in out, "--full keeps the best attempt when QC fails: " + out[-500:])
    check(re.search(r"linkguy: ok in \d+s \(seed \d+, attempt 1, from the record\)", out) is not None, "--full draws the reference-less character from the record: " + out[-300:])
    arts = {x["id"]: x for x in json.load(open(os.path.join(rm, "data/characters.json"), encoding="utf-8"))}
    check("needs eyes" in arts["bustguy"].get("fullBodyCaption", "") and "bust?" in arts["bustguy"]["fullBodyCaption"], "flagged caption on the kept-best plate: " + arts["bustguy"].get("fullBodyCaption", "")[:120])
    check("drawn from the record alone" in arts["linkguy"].get("fullBodyCaption", ""), "text-only caption on the record-drawn plate")
    wf = next(w for w in FakeComfy.prompts if "token-plates/linkguy" in json.dumps(w))
    check(not any(v["class_type"] == "LoadImage" for v in wf.values()) and wf["458"]["inputs"]["latent_image"] == ["456", 0]
          and "images.image_1" not in wf["474"]["inputs"] and "Link Guy" in wf["474"]["inputs"]["prompt"], "text-only graph: no LoadImage, empty latent, name in the prompt")
    log = json.load(open(os.path.join(raw3, "render-log.json")))
    check(log["bustguy"].get("needsEyes") and log["linkguy"].get("textOnly"), "full-run log marks needs-eyes and text-only")
    check(os.path.isfile(os.path.join(raw3, "run-sheet.png")) and "flagged for eyes" in out, "contact sheet + summary at the end of a full run")
    check(res.returncode == 0, "full run exit code 0 when everybody got a plate: %s" % res.returncode)
    # drop: the undo
    res = run("drop", "--ids", "bustguy", "--raw-dir", raw3)
    arts = {x["id"]: x for x in json.load(open(os.path.join(rm, "data/characters.json"), encoding="utf-8"))}
    check("1 plate(s) removed" in res.stdout and "fullBody" not in arts["bustguy"] and not os.path.isfile(os.path.join(rm, "portraits/player/fullbody/bustguy.png"))
          and os.path.isfile(os.path.join(raw3, "bustguy.dropped.png")), "drop removes the plate, unwires the article, keeps a copy")
    # a server that answers but rejects every graph: the run stops after three characters, naming the reason
    FakeComfy.reject = "value not in list: unet_name"
    res = run("render", "--url", url, "--raw-dir", raw3, "--retries", "0", "--ids", "bustguy", "linkguy", "flatguy", "pixelguy", "--text-only", "--redo")
    FakeComfy.reject = ""
    check(res.returncode == 3 and "no image came back for 3 characters in a row" in res.stdout and "unet_name" in res.stdout, "a rejected graph stops the run with the server's reason: " + res.stdout[-300:])
    srv.shutdown()

    # cut: a native-alpha render is trimmed and squared, never keyed
    nat = Image.new("RGBA", (400, 600), (0, 0, 0, 0)); f = figure(200, 500); nat.paste(f, (100, 50), f)
    natp = os.path.join(root, "native.png"); nat.save(natp)
    facts = mod.cut(natp, os.path.join(root, "native-plate.png"))
    check(facts["key"] == "alpha" and facts["figure"][1] >= 450 and facts["border_clear"] >= 0.95, "native alpha cut: %s" % facts)

    # workflow_tune drops the cache node cleanly when asked
    wf0 = mod.workflow_tune(mod.BUILTIN_QWEN21, steps=4, resolution=2048, models={"unet": "x.safetensors"}, engine="qwen21", cache=False)
    check("469" not in wf0 and wf0["458"]["inputs"]["model"] == ["451", 0] and wf0["451"]["inputs"]["unet_name"] == "x.safetensors"
          and wf0["474"]["inputs"]["resolution"] == 2048 and wf0["458"]["inputs"]["steps"] == 4, "workflow_tune")

    # workflow_fill on an exported workflow with a KSamplerAdvanced and a CLIPTextEncode
    wf2 = {"1": {"class_type": "KSamplerAdvanced", "inputs": {"noise_seed": 1, "positive": ["2", 0], "negative": ["3", 0]}},
           "2": {"class_type": "CLIPTextEncode", "inputs": {"text": "old"}}, "3": {"class_type": "CLIPTextEncode", "inputs": {"text": ""}},
           "4": {"class_type": "LoadImage", "inputs": {"image": "a.png"}}, "5": {"class_type": "SaveImage", "inputs": {"filename_prefix": "x"}}}
    filled = mod.workflow_fill(wf2, "NEW", "ref.png", "token-plates/y", 77)
    check(filled["2"]["inputs"]["text"] == "NEW" and filled["3"]["inputs"]["text"] == mod.NEGATIVE and filled["1"]["inputs"]["noise_seed"] == 77
          and filled["4"]["inputs"]["image"] == "ref.png" and filled["5"]["inputs"]["filename_prefix"] == "token-plates/y", "workflow_fill follows the sampler's links")
    check(wf2["2"]["inputs"]["text"] == "old", "workflow_fill does not mutate the template")

    # heal: exact restore where the colour is stored, neighbour fill for tiny black holes, legit gaps untouched
    import numpy as np
    arr = np.zeros((300, 300, 4), dtype=np.uint8)
    arr[40:260, 60:240] = (40, 60, 200, 255)                                      # the figure
    arr[100:120, 100:120] = (255, 0, 255, 0)                                      # a real gap, keyed magenta
    arr[150, 150] = (40, 60, 200, 0)                                              # a punched pixel, colour still stored
    arr[200:202, 200:202] = (0, 0, 0, 0)                                          # a punched patch a downscale blackened
    arr[40:260, 60] = (200, 60, 220, 255)                                         # magenta spill on the left edge
    hp = os.path.join(rm, "portraits/player/fullbody/healme.png")
    Image.fromarray(arr, "RGBA").save(hp)
    check(mod.specks(hp) > 0 and mod.plate_key(np.asarray(Image.open(hp)).astype(np.int32)) == "magenta", "specks sees the damage and the key")
    n = mod.heal(hp)
    h = np.asarray(Image.open(hp)).astype(int)
    check(n > 0 and tuple(h[150, 150]) == (40, 60, 200, 255), "heal restored the stored pixel exactly")
    check(h[200, 200, 3] == 255 and abs(h[200, 200, 2] - 200) < 3, "heal filled the black patch from its neighbours")
    check(h[110, 110, 3] == 0 and h[100, 100, 3] == 0, "heal left the real gap alone")
    check(h[150, 60, 0] <= h[150, 60, 1] + 40 and h[150, 60, 2] <= h[150, 60, 1] + 40, "heal despilled the edge")
    check(mod.specks(hp) == 0 and mod.heal(hp) == 0, "heal is idempotent and specks is 0 after")
    os.remove(hp)

    # check
    out = run("check").stdout
    check("fullBody plate(s)" in out, "check runs: " + out.splitlines()[0])

    # body plans: the prompt, the canvas and the QC follow how the character is built — nobody gets legs they do not have
    bp = mod.body_plan_of
    check(bp({"race": "Toad"})[0] == "short" and bp({"race": "Beanish"})[0] == "short" and bp({"race": "Boo (king-level)"})[0] == "floating"
          and bp({"race": "Goomba"})[0] == "goomba" and bp({"race": "Ghost / hostile spirit"})[0] == "ghost" and bp({"race": "Centaur"})[0] == "quadruped"
          and bp({"race": "Plant (fey overgrowth)"})[0] == "plant" and bp({"race": "Spore monster (not a toad)"})[0] == "plant", "plans read from the race line")
    check(bp({"race": "Human (Kivotan)"})[0] == "biped" and bp({"race": "Skeleton / Bone-Line Kin"})[0] == "biped" and bp({"race": "Unknown — appears human"})[0] == "biped"
          and bp({"race": "Underground-linked entity"})[0] == "unknown" and bp({})[0] == "unknown", "people are bipeds, a race that says nothing is unknown")
    check(bp({"race": "Underground-linked entity", "bodyPlan": "plant"}) == ("plant", mod.BODY_PLANS["plant"])
          and bp({"race": "Human", "bodyPlan": "a round pink ball with stubby arms and two red feet, no legs."}) == ("custom", "a round pink ball with stubby arms and two red feet, no legs"),
          "bodyPlan on the article wins: a plan name or a free sentence")
    toad = {"id": "t", "key": "magenta", "look": "", "plan": "short", "build": mod.BODY_PLANS["short"]}
    man = {"id": "m", "key": "magenta", "look": "", "plan": "biped", "build": mod.BODY_PLANS["biped"]}
    for fn in (mod.qwen21_prompt, mod.render_prompt):
        pt, pm = fn(toad, False), fn(man, False)
        check("short, big-headed" in pt and "only as far as this build goes" in pt and "legs and feet" not in pt and "soles of the feet" not in pt,
              fn.__name__ + " for a short build: the build sentence, no legs added")
        check("two legs and feet" in pm and ("draw the legs and feet" in pm or "feet included" in pm), fn.__name__ + " for a biped: still asks for the legs")
        check("only as far as this build goes" not in fn(toad, True), fn.__name__ + " with a full-body reference: no continuation sentence")
    t2i = mod.qwen21_t2i_prompt({"id": "kb", "name": "King Boo", "race": "Boo"})
    check("floating ghost" in t2i and "no legs, feet or human proportions" in t2i and "soles of the feet" not in t2i, "text-only prompt carries the build")
    mp, _ = mod.prompt_for({"id": "fl", "name": "Flowey", "race": "Underground-linked entity", "bodyPlan": "plant"})
    check("a plant — a flower" in mp and "do not add legs" in mp, "manifest prompt carries the build")
    check(mod.plan_canvas("biped", "qwen21") == (832, 1216) and mod.plan_canvas("short", "qwen21") == (1024, 1024)
          and mod.plan_canvas("floating", "qwen-edit") == (1024, 1024) and mod.plan_canvas("unknown", "qwen21") == (1024, 1024), "portrait canvas for bipeds only")
    bust_src = os.path.join(root, "bust.png")
    Image.new("RGBA", (300, 400), (40, 60, 200, 255)).save(bust_src)
    bottoms = {}
    for plan in ("biped", "short", "floating"):
        dst = os.path.join(root, "ref-%s.png" % plan)
        mod.prep_reference(bust_src, dst, "magenta", False, size=mod.plan_canvas(plan, "qwen21"), plan=plan)
        im = Image.open(dst); arr = np.asarray(im.convert("RGB")).astype(int)
        fig = np.sqrt(((arr - np.array(mod.KEYS["magenta"])) ** 2).sum(axis=2)) > 95
        rows = np.where(fig.any(axis=1))[0]
        bottoms[plan] = rows[-1] / im.size[1]
    check(bottoms["biped"] < 0.5 < bottoms["short"] < bottoms["floating"] and Image.open(os.path.join(root, "ref-short.png")).size == (1024, 1024),
          "the less body there is to add, the lower and larger the bust sits: %s" % {k: round(v, 2) for k, v in bottoms.items()})
    shorty = os.path.join(root, "shorty.png")
    sh = Image.new("RGBA", (1024, 1024), (0, 0, 0, 0)); ImageDraw.Draw(sh).ellipse((312, 330, 712, 690), fill=(40, 60, 200, 255)); sh.save(shorty)
    facts = {"keyed": 1.0, "border_clear": 1.0, "key": "alpha"}
    check(any("bust?" in w for w in mod.render_qc(shorty, facts, "biped")) and not mod.render_qc(shorty, facts, "short")
          and not mod.render_qc(shorty, facts, "floating") and any("38%" in w for w in mod.render_qc(shorty, facts, "unknown")),
          "QC height floor follows the build (45 / 38 / 28 %)")
    tall = (["x"], "tall", 1, {"figure": (200, 900)}); wide = (["x"], "wide", 2, {"figure": (700, 500)}); clean = ([], "clean", 3, {"figure": (100, 100)})
    check(mod.best_attempt([tall, wide])[1] == "wide" and mod.best_attempt([tall, wide, clean])[1] == "clean", "best attempt: fewest flags, then area — not the tallest")
    leggy = os.path.join(rm, "portraits/player/fullbody/leggy.png")
    lg = Image.new("RGBA", (1024, 1024), (0, 0, 0, 0)); ImageDraw.Draw(lg).rectangle((400, 20, 620, 1000), fill=(40, 60, 200, 255)); lg.save(leggy)
    sus = [{"id": "leggy", "race": "Toad", "fullBody": "portraits/player/fullbody/leggy.png", "fullBodyCaption": "Full-body token plate — Leggy head to foot on a transparent field, the look of the lead; cut from a keyed render on 2026-10-05 for the table's token."},
           {"id": "leggy", "race": "Human", "fullBody": "portraits/player/fullbody/leggy.png", "fullBodyCaption": "Full-body token plate — Leggy head to foot on a transparent field; cut on 2026-10-05."},
           {"id": "leggy", "race": "Toad", "fullBody": "portraits/player/fullbody/leggy.png", "fullBodyCaption": "Full-body token plate — Leggy whole on a transparent field, the look of the lead, built as short; cut from a keyed render on 2026-10-06 for the table's token."},
           {"id": "leggy", "race": "Toad", "fullBody": "portraits/player/fullbody/leggy.png", "fullBodyCaption": "Hand-made plate."}]
    check([mod.legs_suspects([a]) for a in sus] == [["leggy"], [], [], []] and mod.figure_aspect(leggy) > 4, "check names a tall pipeline plate of a short build, once")
    os.remove(leggy)
    figure(400, 900).save(os.path.join(rm, "portraits/player/fullbody/fullguy.png"))      # a plate for the Toad of the fixture
    out = run("apply", "--date", "2026-10-06").stdout
    arts = {x["id"]: x for x in json.load(open(os.path.join(rm, "data/characters.json"), encoding="utf-8"))}
    check("built as short" in arts["fullguy"].get("fullBodyCaption", "") and "built as" not in arts["bustguy"].get("fullBodyCaption", ""),
          "apply's caption names a non-biped build: " + arts["fullguy"].get("fullBodyCaption", "")[:90])

    shutil.rmtree(root, ignore_errors=True)
    shutil.rmtree(srv.outdir, ignore_errors=True)
    print(f"{PASSED} passed, {FAILED} failed")
    return 1 if FAILED else 0


if __name__ == "__main__":
    sys.exit(main())
