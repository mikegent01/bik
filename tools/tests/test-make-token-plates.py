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
    """Upload → prompt → history → view. 'Renders' by handing back the uploaded reference canvas; the second
    attempt for an id stretches the figure to full height, so the QC/retry path is exercised."""
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
            return self._send(200, {name: {"input": {}}} if name == "TextEncodeQwenImageEdit" else {})
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
        if self.path == "/prompt":
            wf = json.loads(body)["prompt"]
            self.prompts.append(wf)
            load = [v for v in wf.values() if v["class_type"] == "LoadImage"][0]["inputs"]["image"].split("/")[-1]
            prefix = [v for v in wf.values() if v["class_type"] == "SaveImage"][0]["inputs"]["filename_prefix"]
            cid = prefix.split("/")[-1]
            self.attempts[cid] = self.attempts.get(cid, 0) + 1
            im = Image.open(self.inputs[load]).convert("RGB")
            if self.attempts[cid] >= 2:   # "the model drew the body": stretch the non-key content to 85% of the height
                import numpy as np
                arr = np.asarray(im).astype(int)
                mask = np.sqrt(((arr - np.array([255, 0, 255])) ** 2).sum(axis=2)) > 95
                ys, xs = np.where(mask)
                fig = im.crop((xs.min(), ys.min(), xs.max() + 1, ys.max() + 1)).resize((int(im.width * 0.4), int(im.height * 0.85)))
                im = Image.new("RGB", im.size, (255, 0, 255)); im.paste(fig, ((im.width - fig.width) // 2, int(im.height * 0.07)))
            pid = "p%d" % len(self.prompts)
            fn = "%s.png" % pid
            im.save(os.path.join(self.server.outdir, fn))
            self.outputs[pid] = fn
            return self._send(200, {"prompt_id": pid, "number": len(self.prompts), "node_errors": {}})
        self._send(404, {})


def serve():
    outdir = tempfile.mkdtemp(prefix="fakecomfy-")
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

    # render against the fake ComfyUI
    srv, url = serve()
    raw = os.path.join(root, "renders")
    res = run("render", "--url", url, "--raw-dir", raw, "--retries", "2", "--date", "2026-10-05")
    out = res.stdout + res.stderr
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
    check("cropped feet" in neg and wf["3"]["inputs"]["seed"] > 0 and wf["78"]["inputs"]["image"].endswith("bustguy.png"), "negative, seed and LoadImage filled")
    check(os.path.isfile(os.path.join(raw, "bustguy.rejected-1.png")), "rejected attempt kept for eyes")
    # resume: nothing left
    res = run("render", "--url", url, "--raw-dir", raw)
    check("render: 0 plated, 0 left" in res.stdout or "1 character(s) to do" in res.stdout, "resume skips plated ids: " + res.stdout.strip().splitlines()[-1])

    # workflow_fill on an exported workflow with a KSamplerAdvanced and a CLIPTextEncode
    mod = load_tool(root)
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

    srv.shutdown()
    shutil.rmtree(root, ignore_errors=True)
    shutil.rmtree(srv.outdir, ignore_errors=True)
    print(f"{PASSED} passed, {FAILED} failed")
    return 1 if FAILED else 0


if __name__ == "__main__":
    sys.exit(main())
