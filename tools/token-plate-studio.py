#!/usr/bin/env python3
"""Token Plate Studio — a local GUI over make-token-plates.py and the ComfyUI inside Comfy Desktop.

    python tools\\token-plate-studio.py                       # opens http://127.0.0.1:8766 in your browser
    python tools\\token-plate-studio.py --url http://127.0.0.1:8000 --raw-dir ..\\token-renders --no-browser

What it is: the render loop of `make-token-plates.py render`, one character at a time, with eyes on it.
Three panes — Reference (what the model is shown) | Render (drag a rectangle to crop) | Plate (what gets wired),
over a checkerboard, a dark ground or the key colour. Buttons: Generate, Re-roll, Remove background (a second
pass through the model with Qwen's own instruction), Key (the chroma / flat-field fallback with tolerance
sliders and the heal pass), Accept (plate + `apply`, exactly what the batch does), Reject, Skip, Run queue.

How it talks to the model: Comfy Desktop runs a ComfyUI server on 127.0.0.1:8000. The studio builds the
Qwen-Image-2.1 graph in Python (no workflow JSON to export), uploads the prepared reference, queues, waits,
downloads — the same `Comfy` client and `Renderer` the batch command uses. The int8 "convrot" weights only load
through ComfyUI's own loaders, so Comfy Desktop has to be open; the studio can launch it for you (Windows).

All image work is Pillow in this process; the browser only displays and collects clicks. Nothing in the repo
changes until Accept. Renders, rejects, crops and previews live in --raw-dir (default <repo>/../token-renders).
"""
import argparse
import importlib.util
import json
import os
import random
import re
import subprocess
import sys
import threading
import time
import urllib.parse
import webbrowser
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

HERE = os.path.dirname(os.path.abspath(__file__))
HTML = os.path.join(HERE, "token-plate-studio.html")
MODES = ("auto", "alpha", "magenta", "green", "flat")
COMFY_DESKTOP_EXE = (os.path.join(os.environ.get("LOCALAPPDATA", ""), "Programs", "@comfyorgcomfyui-electron", "ComfyUI.exe"),)


def load_plates():
    """make-token-plates.py has a hyphen in its name: import it by path (TOKEN_PLATES_ROOT is honoured)."""
    spec = importlib.util.spec_from_file_location("make_token_plates", os.path.join(HERE, "make-token-plates.py"))
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


class Studio:
    """State + the operations the GUI exposes. No HTTP in here, so it can be driven from a test."""

    def __init__(self, mod, raw_dir, url=None):
        self.mod = mod
        self.raw_dir = os.path.abspath(os.path.expanduser(raw_dir))
        os.makedirs(self.raw_dir, exist_ok=True)
        self.url = url
        self.comfy = None
        self.engine = None
        self.choices = {"unet": [], "clip": [], "vae": []}
        self.models = dict(mod.QWEN21_MODELS)
        self.jobs = {}
        self.lock = threading.Lock()
        self.work = threading.Lock()        # one model job at a time (manual or queue)
        self.stop_flag = False
        self.queue_state = {"running": False, "done": 0, "failed": 0, "eyes": [], "current": None, "total": 0}
        self.log_path = os.path.join(self.raw_dir, mod.RENDER_LOG)
        self._rows = None
        self._dirty = True

    # ---------------------------------------------------------------- comfy ----
    def connect(self, url=None):
        m = self.mod
        self.url = url or self.url
        comfy = m.Comfy.discover(self.url)
        if not comfy.alive():
            self.comfy, self.engine = None, None
            return self.connection()
        self.comfy = comfy
        self.url = comfy.url
        self.engine = comfy.engine()
        if self.engine in m.ENGINES:
            self.choices = {"unet": comfy.choices("UNETLoader", "unet_name"), "clip": comfy.choices("CLIPLoader", "clip_name"),
                            "vae": comfy.choices("VAELoader", "vae_name")}
            defaults = m.QWEN21_MODELS if self.engine == "qwen21" else {
                k: m.ENGINES["qwen-edit"][1][n]["inputs"][f] for k, n, f in (("unet", "37", "unet_name"), ("clip", "38", "clip_name"), ("vae", "39", "vae_name"))}
            for k, want in defaults.items():
                have = self.choices[k]
                if want in have or not have:
                    self.models[k] = want
                elif self.models.get(k) not in have:
                    self.models[k] = have[0]
        return self.connection()

    def connection(self):
        return {"connected": self.comfy is not None, "url": self.url or "", "engine": self.engine, "models": self.models, "choices": self.choices,
                "ports": list(self.mod.COMFY_PORTS)}

    def start_comfy(self):
        """Best effort: launch Comfy Desktop (Windows) and let the user press Connect once its server is up."""
        for exe in COMFY_DESKTOP_EXE:
            if exe and os.path.isfile(exe):
                try:
                    subprocess.Popen([exe], close_fds=True)
                    return {"started": True, "exe": exe}
                except OSError as exc:
                    return {"started": False, "error": str(exc)}
        return {"started": False, "error": "Comfy Desktop not found at %s — open it by hand, then Connect" % COMFY_DESKTOP_EXE[0]}

    # ---------------------------------------------------------------- roster ----
    def rows(self, refresh=False):
        """statuses() opens every plate and lead (a few seconds for the whole roster): computed once, again after Accept."""
        if self._rows is None or refresh or self._dirty:
            arts, by_sheet = self.mod.load()
            self._arts = {a["id"]: a for a in arts}
            self._rows = {r["id"]: r for r in self.mod.statuses(arts, by_sheet)}
            self._refs = {r["id"]: self.mod.reference_for(self._arts[r["id"]], r) for r in self._rows.values()}
            self._dirty = False
        return self._rows

    def roster(self):
        m = self.mod
        files = os.listdir(self.raw_dir)
        out = []
        for r in self.rows().values():
            cid = r["id"]
            out.append({"id": cid, "name": r["name"], "tier": r["tier"], "status": r["status"], "uses": r["uses"],
                        "hasRef": bool(self._refs[cid][0]), "plate": os.path.isfile(os.path.join(m.RM, m.PLATES, cid + ".png")),
                        "renders": len([f for f in files if re.match(r"^%s-\d+(-nobg)?\.png$" % re.escape(cid), f)]),
                        "rejected": len([f for f in files if f.startswith(cid + ".rejected-")])})
        return out

    def renders(self, cid):
        pat = re.compile(r"^%s-(\d+)(-nobg)?\.png$" % re.escape(cid))
        found = []
        for f in os.listdir(self.raw_dir):
            mm = pat.match(f)
            if mm:
                found.append({"file": f, "seed": int(mm.group(1)), "nobg": bool(mm.group(2)), "mtime": os.path.getmtime(os.path.join(self.raw_dir, f))})
        found.sort(key=lambda x: -x["mtime"])
        return found

    def character(self, cid):
        m = self.mod
        rows = self.rows()
        if cid not in rows:
            self.rows(refresh=True)
            if cid not in self._rows:
                raise KeyError(cid)
        r = self._rows[cid]
        art = self._arts[cid]
        ref, full_body = m.reference_for(art, r)
        plate_rel = m.PLATES + "/" + cid + ".png"
        plate_path = os.path.join(m.RM, m.PLATES, cid + ".png")
        info = {"id": cid, "name": r["name"], "tier": r["tier"], "status": r["status"], "uses": r["uses"],
                "reference": ref, "fullBodyRef": full_body, "look": m.look_of(art), "key": m.key_for(art),
                "prompt": m.default_prompt(art, r, self.engine or "qwen21"),
                "promptOpaque": m.default_prompt(art, r, self.engine or "qwen21", transparent=False),
                "plate": plate_rel if os.path.isfile(plate_path) else None,
                "renders": self.renders(cid), "lead": (art.get("image") or "").replace("\\", "/")}
        if info["plate"]:
            fw, fh, clear, _ = m.plate_facts(plate_path)
            info["plateFacts"] = {"size": [fw, fh], "border_clear": round(clear, 3)}
        return info

    # ---------------------------------------------------------------- jobs ----
    def _job(self, kind, cid, target, *args):
        jid = "%s-%d" % (kind, int(time.time() * 1000) % 10 ** 9)
        job = {"id": jid, "kind": kind, "cid": cid, "status": "queued", "started": time.time(), "result": None, "error": None}
        with self.lock:
            self.jobs[jid] = job

        def go():
            if not self.work.acquire(timeout=0.5):
                job.update(status="error", error="another render is running — wait for it (or Stop the queue)")
                return
            try:
                job["status"] = "running"
                job["result"] = target(*args)
                job["status"] = "done"
            except Exception as exc:  # noqa: BLE001
                job.update(status="error", error="%s: %s" % (type(exc).__name__, str(exc)[:300]))
            finally:
                job["finished"] = time.time()
                self.work.release()
        threading.Thread(target=go, daemon=True).start()
        return job

    def job(self, jid):
        return self.jobs.get(jid)

    def _renderer(self, steps=None, resolution=None, models=None):
        if not self.comfy:
            raise RuntimeError("not connected — press Connect (is Comfy Desktop open?)")
        return self.mod.Renderer(self.comfy, models=models or self.models, steps=steps, resolution=resolution)

    def generate(self, cid, prompt=None, seed=None, steps=None, resolution=None, transparent=True, models=None):
        """One render for one character, kept as <id>-<seed>.png; the automatic plate attempt comes back as facts + QC."""
        seed = int(seed) if seed else random.randint(1, 2 ** 31 - 1)
        if models:
            self.models.update({k: v for k, v in models.items() if v})

        def run():
            m = self.mod
            rend = self._renderer(steps=steps, resolution=resolution)
            art, row = self._arts[cid], self.rows()[cid]
            raw, facts, why = rend.render(art, row, self.raw_dir, seed, prompt=prompt or None, transparent=transparent, raw_name="%s-%d.png" % (cid, seed))
            if raw is None:
                raise RuntimeError("; ".join(why))
            self._log(cid, {"seed": seed, "engine": rend.engine, "qc": why, "render": os.path.basename(raw)})
            return {"render": os.path.basename(raw), "seed": seed, "facts": facts, "qc": why, "engine": rend.engine,
                    "reference": cid + ".ref.png"}
        return self._job("generate", cid, run)

    def remove_bg(self, cid, render, resolution=None):
        src = self._raw(render)

        def run():
            rend = self._renderer(resolution=resolution)
            out = re.sub(r"\.png$", "-nobg.png", render) if not render.endswith("-nobg.png") else render
            rend.remove_background(src, os.path.join(self.raw_dir, out))
            return {"render": out}
        return self._job("removebg", cid, run)

    def _raw(self, name):
        name = os.path.basename(name or "")
        path = os.path.join(self.raw_dir, name)
        if not name or not os.path.isfile(path):
            raise FileNotFoundError("no such render: %s" % name)
        return path

    def _log(self, cid, entry):
        try:
            log = json.load(open(self.log_path, encoding="utf-8")) if os.path.isfile(self.log_path) else {}
        except ValueError:
            log = {}
        log.setdefault(cid, {})
        log[cid].setdefault("studio", []).append(dict(entry, at=time.strftime("%Y-%m-%dT%H:%M:%S")))
        json.dump(log, open(self.log_path, "w", encoding="utf-8"), indent=1)

    # ---------------------------------------------------------------- plate ----
    def plate(self, cid, render, crop=None, mode="auto", hard=None, soft=None, heal=True):
        """Crop (optional) → key or trim → square → heal: the preview the user sees before Accept (<id>.preview.png)."""
        from PIL import Image
        m = self.mod
        np = m._np()
        src = self._raw(render)
        im = Image.open(src)
        im.load()
        if crop:
            x0, y0, x1, y1 = [int(round(v)) for v in crop]
            x0, x1 = max(0, min(x0, x1)), min(im.width, max(x0, x1))
            y0, y1 = max(0, min(y0, y1)), min(im.height, max(y0, y1))
            if x1 - x0 >= 8 and y1 - y0 >= 8:
                im = im.crop((x0, y0, x1, y1))
        work = os.path.join(self.raw_dir, cid + ".crop.png")
        im.save(work)
        if mode not in MODES:
            mode = "auto"
        key = mode
        if mode == "flat":
            rgb = np.asarray(im.convert("RGB"))
            ring = np.concatenate([rgb[0, :], rgb[-1, :], rgb[:, 0], rgb[:, -1]]).astype(float)
            key = tuple(int(x) for x in np.median(ring, axis=0))
        preview = os.path.join(self.raw_dir, cid + ".preview.png")
        try:
            facts = m.cut(work, preview, key, hard_tol=int(hard) if hard else None, soft_tol=int(soft) if soft else None)
        except SystemExit as exc:
            raise RuntimeError(str(exc))
        healed = 0
        if heal and facts["key"] != "alpha" and facts["key"] in m.KEYS:
            healed = m.heal(preview, key=facts["key"], hard_tol=int(hard) if hard else 95, soft_tol=int(soft) if soft else 150)
        qc = m.render_qc(work, facts)
        fw, fh, clear, _ = m.plate_facts(preview)
        sp = m.specks(preview) if hasattr(m, "specks") else None
        facts = dict(facts, size=[fw, fh], border_clear=round(clear, 3), healed=healed, specks=sp, figure=list(facts["figure"]))
        facts["key"] = str(facts["key"])
        return {"preview": cid + ".preview.png", "facts": facts, "qc": qc, "crop": crop, "mode": mode, "ok": not qc}

    def accept(self, cid, date=None):
        import shutil
        m = self.mod
        preview = os.path.join(self.raw_dir, cid + ".preview.png")
        if not os.path.isfile(preview):
            raise FileNotFoundError("no preview to accept — press Plate first")
        dst = os.path.join(m.RM, m.PLATES, cid + ".png")
        os.makedirs(os.path.dirname(dst), exist_ok=True)
        shutil.copyfile(preview, dst)
        m.cmd_apply(argparse.Namespace(date=date))
        self._log(cid, {"accepted": m.PLATES + "/" + cid + ".png"})
        self._dirty = True
        return {"plate": m.PLATES + "/" + cid + ".png"}

    def reject(self, cid, render):
        src = self._raw(render)
        n = 1
        while os.path.isfile(os.path.join(self.raw_dir, "%s.rejected-%d.png" % (cid, n))):
            n += 1
        dst = os.path.join(self.raw_dir, "%s.rejected-%d.png" % (cid, n))
        os.replace(src, dst)
        self._log(cid, {"rejected": os.path.basename(dst)})
        return {"rejected": os.path.basename(dst)}

    # ---------------------------------------------------------------- queue ----
    def run_queue(self, tier=None, limit=None, ids=None, retries=2, steps=None, resolution=None, transparent=True):
        """The batch, in the background: auto-Accept whatever passes QC, leave the rest for eyes. Stop between characters."""
        if self.queue_state["running"]:
            raise RuntimeError("the queue is already running")
        rows = [r for r in self.rows(refresh=True).values() if r["status"] in ("GENERATE", "SMALL") and (not tier or r["tier"] <= int(tier))]
        if ids:
            rows = [self._rows[i] for i in ids if i in self._rows]
        if limit:
            rows = rows[:int(limit)]
        self.stop_flag = False
        self.queue_state = {"running": True, "done": 0, "failed": 0, "eyes": [], "current": None, "total": len(rows), "log": []}

        def loop():
            m = self.mod
            qs = self.queue_state
            try:
                rend = self._renderer(steps=steps, resolution=resolution)
                for r in rows:
                    if self.stop_flag:
                        break
                    cid = r["id"]
                    qs["current"] = cid
                    art = self._arts[cid]
                    if not m.reference_for(art, r)[0]:
                        qs["eyes"].append({"id": cid, "why": ["no usable reference"]}); qs["failed"] += 1
                        continue
                    ok, why = False, []
                    for attempt in range(1, int(retries) + 2):
                        if self.stop_flag:
                            break
                        seed = random.randint(1, 2 ** 31 - 1)
                        with self.work:
                            try:
                                raw, facts, why = rend.render(art, r, self.raw_dir, seed, transparent=transparent, raw_name="%s-%d.png" % (cid, seed))
                            except Exception as exc:  # noqa: BLE001
                                raw, facts, why = None, None, ["%s: %s" % (type(exc).__name__, str(exc)[:200])]
                        if raw and not why:
                            os.replace(os.path.join(self.raw_dir, cid + ".cut.png"), os.path.join(self.raw_dir, cid + ".preview.png"))
                            self.accept(cid)
                            qs["log"].append("%s: ok (seed %d, attempt %d)" % (cid, seed, attempt))
                            ok = True
                            break
                        qs["log"].append("%s: attempt %d — %s" % (cid, attempt, "; ".join(why)))
                    if ok:
                        qs["done"] += 1
                    else:
                        qs["failed"] += 1
                        qs["eyes"].append({"id": cid, "why": why})
            except Exception as exc:  # noqa: BLE001
                qs["log"].append("queue stopped: %s: %s" % (type(exc).__name__, str(exc)[:200]))
            finally:
                qs["current"] = None
                qs["running"] = False
        threading.Thread(target=loop, daemon=True).start()
        return self.queue_state

    def stop(self):
        self.stop_flag = True
        return {"stopping": self.queue_state["running"]}

    def state(self):
        return {"connection": self.connection(), "queue": self.queue_state, "rawDir": self.raw_dir,
                "jobs": [j for j in self.jobs.values() if j["status"] in ("queued", "running")]}


# -------------------------------------------------------------------- HTTP ----
class Handler(BaseHTTPRequestHandler):
    studio = None

    def log_message(self, fmt, *args):
        if os.environ.get("STUDIO_LOG"):
            sys.stderr.write("%s - %s\n" % (self.address_string(), fmt % args))

    def _send(self, code, body, ctype="application/json; charset=utf-8"):
        data = body if isinstance(body, bytes) else json.dumps(body, ensure_ascii=False).encode("utf-8")
        try:
            self.send_response(code)
            self.send_header("Content-Type", ctype)
            self.send_header("Content-Length", str(len(data)))
            self.send_header("Cache-Control", "no-store")
            self.end_headers()
            self.wfile.write(data)
        except (BrokenPipeError, ConnectionResetError):
            pass                                  # the page navigated away mid-reply; nothing to do

    def _file(self, root, rel):
        path = os.path.realpath(os.path.join(root, rel))
        if not path.startswith(os.path.realpath(root) + os.sep) or not os.path.isfile(path):
            return self._send(404, {"error": "not found"})
        ext = os.path.splitext(path)[1].lower()
        ctype = {".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".gif": "image/gif"}.get(ext, "application/octet-stream")
        self._send(200, open(path, "rb").read(), ctype)

    def do_GET(self):
        s = self.studio
        u = urllib.parse.urlsplit(self.path)
        q = dict(urllib.parse.parse_qsl(u.query))
        try:
            if u.path in ("/", "/index.html"):
                return self._send(200, open(HTML, "rb").read(), "text/html; charset=utf-8")
            if u.path == "/img":
                root = {"rm": s.mod.RM, "raw": s.raw_dir}.get(q.get("k"))
                if not root:
                    return self._send(404, {"error": "bad root"})
                return self._file(root, q.get("p", "").replace("\\", "/").lstrip("/"))
            if u.path == "/api/state":
                return self._send(200, s.state())
            if u.path == "/api/roster":
                return self._send(200, {"rows": s.roster()})
            if u.path == "/api/character":
                return self._send(200, s.character(q.get("id", "")))
            if u.path == "/api/job":
                job = s.job(q.get("id", ""))
                return self._send(200 if job else 404, job or {"error": "no such job"})
            return self._send(404, {"error": "no route " + u.path})
        except KeyError as exc:
            return self._send(404, {"error": "unknown id %s" % exc})
        except Exception as exc:  # noqa: BLE001
            return self._send(500, {"error": "%s: %s" % (type(exc).__name__, exc)})

    def do_POST(self):
        s = self.studio
        n = int(self.headers.get("Content-Length") or 0)
        try:
            body = json.loads(self.rfile.read(n).decode("utf-8") or "{}")
        except ValueError:
            return self._send(400, {"error": "bad JSON"})
        path = urllib.parse.urlsplit(self.path).path
        try:
            if path == "/api/connect":
                return self._send(200, s.connect(body.get("url") or None))
            if path == "/api/start-comfy":
                return self._send(200, s.start_comfy())
            if path == "/api/generate":
                job = s.generate(body["id"], prompt=body.get("prompt"), seed=body.get("seed"), steps=body.get("steps"), resolution=body.get("resolution"),
                                 transparent=body.get("transparent", True), models=body.get("models"))
                return self._send(202, job)
            if path == "/api/removebg":
                return self._send(202, s.remove_bg(body["id"], body["render"], resolution=body.get("resolution")))
            if path == "/api/plate":
                return self._send(200, s.plate(body["id"], body["render"], crop=body.get("crop"), mode=body.get("mode", "auto"),
                                               hard=body.get("hard"), soft=body.get("soft"), heal=body.get("heal", True)))
            if path == "/api/accept":
                return self._send(200, s.accept(body["id"], date=body.get("date")))
            if path == "/api/reject":
                return self._send(200, s.reject(body["id"], body["render"]))
            if path == "/api/queue/run":
                return self._send(202, s.run_queue(tier=body.get("tier"), limit=body.get("limit"), ids=body.get("ids"), retries=body.get("retries", 2),
                                                   steps=body.get("steps"), resolution=body.get("resolution"), transparent=body.get("transparent", True)))
            if path == "/api/queue/stop":
                return self._send(200, s.stop())
            return self._send(404, {"error": "no route " + path})
        except (KeyError, FileNotFoundError) as exc:
            return self._send(404, {"error": str(exc)})
        except RuntimeError as exc:
            return self._send(409, {"error": str(exc)})
        except Exception as exc:  # noqa: BLE001
            return self._send(500, {"error": "%s: %s" % (type(exc).__name__, exc)})


def make_server(studio, host="127.0.0.1", port=8766):
    Handler.studio = studio
    srv = ThreadingHTTPServer((host, port), Handler)
    srv.daemon_threads = True
    return srv


def main(argv=None):
    ap = argparse.ArgumentParser(description="Token Plate Studio — preview, crop, key and accept token plates rendered by the local ComfyUI")
    ap.add_argument("--host", default="127.0.0.1")
    ap.add_argument("--port", type=int, default=8766)
    ap.add_argument("--url", default=None, help="ComfyUI server (default: COMFY_URL, else probe 127.0.0.1:8000 then :8188)")
    ap.add_argument("--raw-dir", default=None, help="where renders, rejects and previews go (default <repo>/../token-renders)")
    ap.add_argument("--no-browser", action="store_true")
    a = ap.parse_args(argv)
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
    mod = load_plates()
    raw_dir = a.raw_dir or os.path.join(mod.ROOT, "..", "token-renders")
    studio = Studio(mod, raw_dir, url=a.url)
    info = studio.connect()
    studio.rows()                       # the roster scan (a few seconds) happens before the page asks for it
    srv = make_server(studio, a.host, a.port)
    where = "http://%s:%d/" % ("127.0.0.1" if a.host in ("0.0.0.0", "") else a.host, srv.server_address[1])
    print("Token Plate Studio at %s  (renders in %s)" % (where, studio.raw_dir))
    print("ComfyUI: %s" % ("%s — %s" % (info["url"], info["engine"] or "no Qwen edit node") if info["connected"] else "not running (open Comfy Desktop, then press Connect)"))
    if not a.no_browser:
        threading.Timer(0.6, lambda: webbrowser.open(where)).start()
    try:
        srv.serve_forever()
    except KeyboardInterrupt:
        print("\nstudio closed")
    return 0


if __name__ == "__main__":
    sys.exit(main())
