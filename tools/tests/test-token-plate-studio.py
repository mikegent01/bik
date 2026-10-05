#!/usr/bin/env python3
"""Token Plate Studio against the fake ComfyUI from test-make-token-plates.py: the Studio object and the HTTP
routes the page uses (state, roster, character, generate → job → plate → accept, reject, remove-background,
queue, image serving with the path check). No browser needed — the page's JS only calls these routes."""
import importlib.util
import json
import os
import shutil
import sys
import threading
import time
import urllib.error
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
HERE = os.path.dirname(os.path.abspath(__file__))
FAILS = []
PASSES = [0]


def check(cond, what):
    if cond:
        PASSES[0] += 1
    else:
        FAILS.append(what)
        print("FAIL:", what)


def load(name, path):
    spec = importlib.util.spec_from_file_location(name, path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def http(url, body=None):
    data = json.dumps(body).encode() if body is not None else None
    req = urllib.request.Request(url, data=data, method="POST" if data is not None else "GET", headers={"Content-Type": "application/json"} if data else {})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            raw = r.read()
            return r.status, (json.loads(raw) if r.headers.get("Content-Type", "").startswith("application/json") else raw)
    except urllib.error.HTTPError as exc:
        raw = exc.read()
        try:
            return exc.code, json.loads(raw)
        except ValueError:
            return exc.code, raw


def wait_job(base, jid, timeout=60):
    t0 = time.time()
    while time.time() - t0 < timeout:
        code, j = http(base + "/api/job?id=" + jid)
        if j["status"] in ("done", "error"):
            return j
        time.sleep(0.2)
    raise TimeoutError(jid)


def main():
    from PIL import Image
    tmp = load("tmp_plates", os.path.join(HERE, "test-make-token-plates.py"))
    root = tmp.scratch_repo()
    rm = os.path.join(root, "Reputation-Matrix2")
    os.environ["TOKEN_PLATES_ROOT"] = root
    studio_mod = load("studio", os.path.join(ROOT, "tools", "token-plate-studio.py"))
    plates = studio_mod.load_plates()
    check(plates.ROOT == root, "studio imports make-token-plates against TOKEN_PLATES_ROOT")
    fake, url = tmp.serve("qwen21")
    raw_dir = os.path.join(root, "studio-renders")
    st = studio_mod.Studio(plates, raw_dir, url=url)

    # connection + models
    conn = st.connect()
    check(conn["connected"] and conn["engine"] == "qwen21" and conn["url"] == url, "studio connected to the fake and picked the 2.1 engine: %s" % conn)
    check(conn["choices"]["unet"] == ["qwen_image_2.1_int8_convrot.safetensors", "other.safetensors"] and conn["models"]["unet"] == "qwen_image_2.1_int8_convrot.safetensors", "loader choices + default model")
    bad = studio_mod.Studio(plates, raw_dir, url="http://127.0.0.1:9").connect()
    check(not bad["connected"], "a dead URL reports not connected")

    # HTTP server
    srv = studio_mod.make_server(st, "127.0.0.1", 0)
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    base = "http://127.0.0.1:%d" % srv.server_address[1]
    code, page = http(base + "/")
    check(code == 200 and b"Token Plate Studio" in page and b"renderCanvas" in page, "page served")
    code, state = http(base + "/api/state")
    check(code == 200 and state["connection"]["engine"] == "qwen21" and state["rawDir"] == os.path.abspath(raw_dir), "/api/state")
    code, roster = http(base + "/api/roster")
    ids = {r["id"]: r for r in roster["rows"]}
    check(code == 200 and ids["bustguy"]["status"] == "GENERATE" and ids["bustguy"]["hasRef"] and not ids["linkguy"]["hasRef"], "/api/roster statuses + reference flags")
    code, ch = http(base + "/api/character?id=bustguy")
    check(code == 200 and "<image1>" in ch["prompt"] and "Transparent background" in ch["prompt"] and "bright magenta" in ch["promptOpaque"] and ch["reference"] and not ch["fullBodyRef"], "/api/character: prompts + reference")
    code, _ = http(base + "/api/character?id=nobody")
    check(code == 404, "unknown id is 404")

    # generate → job → result
    code, job = http(base + "/api/generate", {"id": "bustguy", "prompt": ch["prompt"], "seed": 4242, "steps": 8, "resolution": 1024, "transparent": True, "models": {"unet": "other.safetensors"}})
    check(code == 202 and job["status"] in ("queued", "running"), "generate accepted as a job")
    j = wait_job(base, job["id"])
    check(j["status"] == "done" and j["result"]["render"] == "bustguy-4242.png" and j["result"]["seed"] == 4242, "job finished with the seed-named render: %s" % (j.get("error") or j["result"]["render"]))
    check(j["result"]["qc"] and "bust?" in j["result"]["qc"][0], "first attempt QC flags the bust (the fake returns the reference as-is)")
    check(tmp.FakeComfy.prompts[-1]["451"]["inputs"]["unet_name"] == "other.safetensors" and tmp.FakeComfy.prompts[-1]["458"]["inputs"]["steps"] == 8, "model + steps from the GUI reached the graph")
    check(Image.open(os.path.join(raw_dir, "bustguy-4242.png")).mode == "RGBA" and Image.open(os.path.join(raw_dir, "bustguy.ref.png")).size == (832, 1216), "RGBA render + prepared portrait reference on disk")
    code, ch = http(base + "/api/character?id=bustguy")
    check(ch["renders"] and ch["renders"][0]["file"] == "bustguy-4242.png" and ch["renders"][0]["seed"] == 4242, "renders listed for the character")

    # second generate: the fake stretches the figure → passes QC; plate with a crop; image routes; accept
    code, job = http(base + "/api/generate", {"id": "bustguy", "seed": 7, "transparent": True})
    j = wait_job(base, job["id"])
    check(j["status"] == "done" and not j["result"]["qc"] and j["result"]["facts"]["key"] == "alpha", "second render passes QC through the native-alpha path: %s" % (j["result"]["qc"] if j["status"] == "done" else j["error"]))
    code, pl = http(base + "/api/plate", {"id": "bustguy", "render": "bustguy-7.png", "crop": None, "mode": "auto", "heal": True})
    check(code == 200 and pl["ok"] and pl["facts"]["key"] == "alpha" and pl["preview"] == "bustguy.preview.png", "plate preview from the alpha render: %s" % pl.get("qc"))
    w, h = Image.open(os.path.join(raw_dir, "bustguy-7.png")).size
    code, pl2 = http(base + "/api/plate", {"id": "bustguy", "render": "bustguy-7.png", "crop": [w * 0.1, h * 0.02, w * 0.9, h * 0.6], "mode": "auto"})
    check(code == 200 and pl2["facts"]["figure"][1] < pl["facts"]["figure"][1] and pl2["crop"], "a crop rectangle cuts a shorter figure: %s vs %s" % (pl2["facts"]["figure"], pl["facts"]["figure"]))
    code, pl3 = http(base + "/api/plate", {"id": "bustguy", "render": "bustguy-7.png", "mode": "magenta", "hard": 80, "soft": 140})
    check(code == 200 and pl3["facts"]["key"] == "magenta", "forcing a chroma key works on an RGBA render too: %s" % pl3["facts"]["key"])
    code, pl = http(base + "/api/plate", {"id": "bustguy", "render": "bustguy-7.png", "mode": "auto"})
    code, png = http(base + "/img?k=raw&p=bustguy.preview.png")
    check(code == 200 and png[:4] == b"\x89PNG", "preview image served")
    code, _ = http(base + "/img?k=rm&p=../data/characters.json")
    check(code == 404, "image route refuses to leave its root")
    code, _ = http(base + "/img?k=raw&p=bustguy-7.png")
    check(code == 200, "render image served")
    code, _ = http(base + "/img?k=rm&p=" + ch["reference"])
    check(code == 200, "reference image served from the Reputation Matrix")
    code, acc = http(base + "/api/accept", {"id": "bustguy", "date": "2026-10-05"})
    plate_path = os.path.join(rm, "portraits/player/fullbody/bustguy.png")
    arts = {x["id"]: x for x in json.load(open(os.path.join(rm, "data/characters.json"), encoding="utf-8"))}
    check(code == 200 and os.path.isfile(plate_path) and Image.open(plate_path).getpixel((0, 0))[3] == 0, "accept copied the preview to the plate path")
    check(arts["bustguy"].get("fullBody") == "portraits/player/fullbody/bustguy.png", "accept applied the plate to characters.json")
    code, roster = http(base + "/api/roster")
    check({r["id"]: r for r in roster["rows"]}["bustguy"]["plate"], "roster now shows the plate")
    code, chk = http(base + "/api/character?id=bustguy")
    check(chk["plate"] == "portraits/player/fullbody/bustguy.png" and chk["plateFacts"]["border_clear"] >= 0.95, "character reports the wired plate")

    # reject + remove background
    code, rj = http(base + "/api/reject", {"id": "bustguy", "render": "bustguy-4242.png"})
    check(code == 200 and rj["rejected"] == "bustguy.rejected-1.png" and os.path.isfile(os.path.join(raw_dir, "bustguy.rejected-1.png")), "reject renames the render")
    code, _ = http(base + "/api/reject", {"id": "bustguy", "render": "missing.png"})
    check(code == 404, "rejecting a missing render is 404")
    opaque = Image.open(os.path.join(raw_dir, "bustguy-7.png")).convert("RGB")
    opaque.save(os.path.join(raw_dir, "bustguy-99.png"))
    code, job = http(base + "/api/removebg", {"id": "bustguy", "render": "bustguy-99.png"})
    j = wait_job(base, job["id"])
    check(j["status"] == "done" and j["result"]["render"] == "bustguy-99-nobg.png" and Image.open(os.path.join(raw_dir, "bustguy-99-nobg.png")).mode == "RGBA", "remove-background pass made an RGBA sibling: %s" % (j.get("error") or j["result"]))
    check(tmp.FakeComfy.prompts[-1]["474"]["inputs"]["prompt"] == plates.REMOVE_BG_PROMPT, "the official remove-background instruction was sent")
    log = json.load(open(os.path.join(raw_dir, "render-log.json")))
    check(len(log["bustguy"]["studio"]) >= 4 and any("accepted" in e for e in log["bustguy"]["studio"]), "studio log keeps the trail")

    # queue: bustguy again (redo) + linkguy (no reference → eyes)
    os.remove(plate_path)
    code, q = http(base + "/api/queue/run", {"ids": ["bustguy", "linkguy"], "retries": 2, "transparent": True})
    check(code == 202 and q["running"] and q["total"] == 2, "queue started")
    t0 = time.time()
    while time.time() - t0 < 60:
        code, stt = http(base + "/api/state")
        if not stt["queue"]["running"]:
            break
        time.sleep(0.2)
    q = stt["queue"]
    check(not q["running"] and q["done"] == 1 and q["failed"] == 1 and q["eyes"][0]["id"] == "linkguy", "queue: one plated, one for eyes: %s" % json.dumps(q)[:300])
    check(os.path.isfile(plate_path), "queue auto-accepted the passing render")
    code, q2 = http(base + "/api/queue/run", {"ids": ["bustguy"]})
    check(code == 202, "queue can run again once finished")
    http(base + "/api/queue/stop", {})
    t0 = time.time()
    while time.time() - t0 < 60 and http(base + "/api/state")[1]["queue"]["running"]:
        time.sleep(0.2)
    check(not http(base + "/api/state")[1]["queue"]["running"], "queue stops")

    # start_comfy is honest when there is no Comfy Desktop here
    r = st.start_comfy()
    check(r["started"] is False and "not found" in r["error"] or r["started"], "start_comfy reports what happened")

    srv.shutdown()
    fake.shutdown()
    shutil.rmtree(root, ignore_errors=True)
    shutil.rmtree(fake.outdir, ignore_errors=True)
    print("%d passed, %d failed" % (PASSES[0], len(FAILS)))
    return 1 if FAILS else 0


if __name__ == "__main__":
    sys.exit(main())
