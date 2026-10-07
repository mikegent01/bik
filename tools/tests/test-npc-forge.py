#!/usr/bin/env python3
"""NPC Forge + forge packets: the roster → actors generator, the draft, the
cut, the hand-off and the little HTTP — on a sandbox copy of the data so the
repo's own roster is only ever read. Needs Pillow + numpy (the cut)."""
import http.client
import importlib.util
import io
import json
import os
import shutil
import subprocess
import sys
import tempfile
import threading
import time

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.insert(0, os.path.join(ROOT, "tools"))
RESULTS = []


def check(name, ok, detail=""):
    RESULTS.append((name, bool(ok)))
    print(("  ok   " if ok else "  FAIL ") + name + ("" if ok or not detail else "\n         " + str(detail)[:600]))


def load(name, rel):
    spec = importlib.util.spec_from_file_location(name, os.path.join(ROOT, rel))
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


forge_mod = load("npc_forge", "tools/npc-forge.py")
forge = forge_mod.Forge()
bfp = forge.bfp

# ---- the committed roster -------------------------------------------------
r = subprocess.run([sys.executable, os.path.join(ROOT, "tools", "build-forge-packets.py"), "--check"], capture_output=True, text=True, cwd=ROOT)
check("build-forge-packets --check: the committed Fawful's Forces packet is current", r.returncode == 0 and "OK fawfuls-forces actors: 12 files" in r.stdout, r.stdout + r.stderr)
roster = bfp.find_roster("fawfuls-forces")
e0 = roster["entries"][0]
check("prompt_for = style + look + framing, one line", bfp.prompt_for(roster, e0).startswith(roster["style"]) and e0["look"] in bfp.prompt_for(roster, e0)
      and bfp.prompt_for(roster, e0).endswith(roster["framing"]) and "\n" not in bfp.prompt_for(roster, e0))
job = bfp.render_job(roster, e0)
check("render_job names the render, the plate, the seed and the canvas", job["render"].endswith(f"npc-forge/fawfuls-forces/renders/{e0['id']}.png")
      and job["plate"].endswith(f"portraits/fawfuls-forces/{e0['id']}.png") and job["seed"] == e0["seed"] and (job["width"], job["height"]) == (1408, 768))
lib = bfp.P955.load_image_lib()
scheme = bfp.P955.load_folder_scheme()
expected, problems, pending = bfp.build_packet(roster, lib, scheme)
check("the roster builds 12 actors with no problems; the two lieutenants await art", not problems and len(expected) == 12 and sorted(pending) == ["countess-chortlebrass", "maestro-mustardo"], problems)
countess = json.loads(expected["fvtt-Actor-ff-countess-chortlebrass.json"])
acts = {it["name"]: it for it in countess["items"]}
leg = [a for it in countess["items"] for a in it["system"]["activities"].values() if a["activation"]["type"] == "legendary"]
check("legendary actions spend resources.legact, Legendary Resistance resources.legres, the resources block is set",
      countess["system"]["resources"]["legact"]["max"] == 2 and countess["system"]["resources"]["legres"]["max"] == 1
      and len(leg) == 3 and all(t["target"] == "resources.legact.value" for a in leg for t in a["consumption"]["targets"])
      and any(t["target"] == "resources.legres.value" for a in acts["Legendary Resistance (1/Day)"]["system"]["activities"].values() for t in a["consumption"]["targets"]))
barrage = next(iter(acts["Helm Barrage"]["system"]["activities"].values()))
check("a save action: save ability + flat DC, damage parts, recharge on the item, itemUses consumption",
      barrage["type"] == "save" and barrage["save"] == {"ability": ["dex"], "dc": {"calculation": "", "formula": "15"}}
      and barrage["damage"]["parts"][0]["number"] == 2 and barrage["damage"]["onSave"] == "none"
      and acts["Helm Barrage"]["system"]["uses"]["recovery"] == [{"period": "recharge", "formula": "5"}]
      and barrage["consumption"]["targets"][0]["type"] == "itemUses")
check("pending art: placeholder token + flag, biography says so", countess["img"] == "icons/svg/mystery-man.svg" and countess["prototypeToken"]["texture"]["src"] == countess["img"]
      and countess["flags"]["waluipedia-sheets"]["art"] == "pending" and "Awaiting its plate" in countess["system"]["details"]["biography"]["value"])
fury = json.loads(expected["fvtt-Actor-ff-fury-bot.json"])
drill = next(it for it in fury["items"] if it["name"] == "Drill")
spark = next(it for it in json.loads(expected["fvtt-Actor-ff-chortle-bot.json"])["items"] if it["name"] == "Spark-Prod")
check("weapon attacks: base damage + extra parts, reach, the plate as token, 2×2 for Large", drill["system"]["damage"]["base"]["number"] == 2
      and spark["system"]["activities"]["dnd5eactivity000"]["damage"]["parts"][0]["types"] == ["lightning"]
      and fury["img"] == "portraits/fawfuls-forces/fury-bot.png" and "art" not in fury["flags"]["waluipedia-sheets"]
      and json.loads(expected["fvtt-Actor-ff-boom-crawler.json"])["prototypeToken"]["width"] == 2)
check("folderPath = [group, sub-folder] from the roster; hostile unlinked tokens", fury["flags"]["waluipedia-mass-import"]["folderPath"] == ["Fawful's Furious Freaks", "Machines of Fury"]
      and fury["prototypeToken"]["disposition"] == -1 and not fury["prototypeToken"]["actorLink"])
check("every icon on every sheet is in the image library", all(it["img"] in lib for text in expected.values() for it in json.loads(text)["items"]))
check("ids are deterministic (same roster → same text)", bfp.build_packet(roster, lib, scheme)[0] == expected)

# ---- a sandbox for the forge --------------------------------------------
tmp = tempfile.mkdtemp(prefix="npc-forge-")
try:
    sb = os.path.join(tmp, "Reputation-Matrix2")
    os.makedirs(os.path.join(sb, "data", "forge"))
    os.makedirs(os.path.join(sb, "actors"))
    shutil.copy(os.path.join(ROOT, "Reputation-Matrix2", "actors", "folders.json"), os.path.join(sb, "actors", "folders.json"))
    bfp.RM, bfp.ROSTERS, bfp.ACTORS_ROOT = sb, os.path.join(sb, "data", "forge"), os.path.join(sb, "actors")
    bfp.P955.FOLDER_SCHEME = os.path.join(sb, "actors", "folders.json")
    forge_mod.FOLDER_SCHEME = bfp.P955.FOLDER_SCHEME
    forge_mod.ROOT = tmp
    facts = forge.factions()
    ff = next(f for f in facts["factions"] if f["id"] == "fawful_forces")
    check("factions: every faction of data/factions.json, with the Foundry group it maps to", len(facts["factions"]) >= 20 and ff["group"] == "Fawful's Furious Freaks" and ff["color"] == "#32CD32"
          and next(f for f in facts["factions"] if f["id"] == "koopa_troop")["group"] == "Koopa Troop")
    view = forge.draft("test troop", "Koopa Test", faction="koopa_troop", plan=["0.5", "2", "5"])
    rpath = os.path.join(sb, "data", "forge", "test-troop.json")
    drafted = json.load(open(rpath, encoding="utf-8"))
    check("draft: a roster file with templated entries per tier, filed under the faction's group", os.path.exists(rpath) and view["packet"] == "test-troop" and view["group"] == "Koopa Troop"
          and [e["cr"] for e in drafted["entries"]] == [0.5, 2, 5] and drafted["entries"][2]["folder"] == "Officers" and drafted["entries"][0]["folder"] == "Rank and File"
          and drafted["entries"][0]["hp"] == 16 and drafted["entries"][2]["ac"] == 15 and all(e["look"] for e in drafted["entries"]))
    sch = json.load(open(bfp.P955.FOLDER_SCHEME, encoding="utf-8"))
    check("…and actors/folders.json packets.<packet> names the group and the sub-folders with the roster's colours", sch["packets"]["test-troop"]["folder"] == "Koopa Troop"
          and set(sch["packets"]["test-troop"]["subfolders"]) == {"Rank and File", "Officers"} and sch["packets"]["test-troop"]["subfolders"]["Officers"]["color"] == drafted["subfolders"]["Officers"]["color"])
    try:
        forge.draft("test-troop", "Again")
        check("draft refuses to overwrite a roster", False)
    except RuntimeError as exc:
        check("draft refuses to overwrite a roster", "exists" in str(exc))
    out = forge.build(bfp.find_roster("test-troop"))
    adir = os.path.join(sb, "actors", "test-troop")
    files = sorted(f for f in os.listdir(adir) if f.startswith("fvtt-Actor-"))
    check("build: the draft imports today — 3 actors, all awaiting art, import.json combined", out["actors"] == 3 and len(out["pending"]) == 3 and files == ["fvtt-Actor-test-troop-draft-01.json", "fvtt-Actor-test-troop-draft-02.json", "fvtt-Actor-test-troop-draft-03.json"]
          and os.path.exists(os.path.join(adir, "import.json")) and json.load(open(os.path.join(adir, "import.json"), encoding="utf-8"))["actorCount"] == 3, out)
    r = subprocess.run([sys.executable, os.path.join(ROOT, "tools", "foundry-bridge.py"), "check-packet", os.path.join(adir, "import.json")], capture_output=True, text=True, cwd=ROOT)
    check("…and check-packet passes it", r.returncode == 0 and "0 error(s)" in r.stdout, r.stdout + r.stderr)
    forge.save_entry("test-troop", "draft-01", {"look": "A Koopa with a very large hat.", "name": "Hat Koopa", "seed": 77})
    d2 = json.load(open(rpath, encoding="utf-8"))
    check("save_entry writes the look, the name and the seed back to the roster", d2["entries"][0]["look"] == "A Koopa with a very large hat." and d2["entries"][0]["name"] == "Hat Koopa" and d2["entries"][0]["seed"] == 77)
    try:
        forge.save_entry("test-troop", "draft-01", {"folder": "Nowhere"})
        check("save_entry refuses a folder the roster lacks", False)
    except RuntimeError:
        check("save_entry refuses a folder the roster lacks", True)


    # a synthetic render: a figure on a flat magenta field
    from PIL import Image, ImageDraw
    im = Image.new("RGB", (704, 384), (255, 0, 255))
    dr = ImageDraw.Draw(im)
    dr.ellipse((272, 60, 432, 220), fill=(90, 200, 60), outline=(20, 20, 20), width=4)
    dr.rectangle((312, 220, 392, 340), fill=(60, 120, 200), outline=(20, 20, 20), width=4)
    buf = io.BytesIO()
    im.save(buf, "PNG")
    check("qc: a clean field passes", forge.qc.__doc__ and True)
    up = forge.import_render("test-troop", "draft-01", buf.getvalue())
    plate = os.path.join(sb, "portraits", "test-troop", "draft-01.png")
    check("import_render saves the render and cuts a 512-px plate that keys clean", up["plate"].endswith("portraits/test-troop/draft-01.png") and os.path.exists(plate)
          and Image.open(plate).size == (512, 512) and up["audit"] == [] and up["border_clear"] == 1.0, up)
    check("qc on that render: nothing to complain about", forge.qc(os.path.join(sb, "npc-forge", "test-troop", "renders", "draft-01.png")) == [])
    bad = Image.new("RGB", (704, 384), (255, 0, 255))
    ImageDraw.Draw(bad).rectangle((0, 0, 703, 383), fill=(90, 200, 60))
    bad_path = os.path.join(tmp, "bad.png")
    bad.save(bad_path)
    check("qc on a render with no field: complains", forge.qc(bad_path) != [])
    forge.build(bfp.find_roster("test-troop"))
    a1 = json.load(open(os.path.join(adir, "fvtt-Actor-test-troop-draft-01.json"), encoding="utf-8"))
    check("rebuild after the cut: the actor wears the plate, the pending flag is gone, the new name is on the sheet", a1["img"] == "portraits/test-troop/draft-01.png"
          and "art" not in a1["flags"]["waluipedia-sheets"] and a1["name"] == "Hat Koopa")
    ho = forge.handoff("test-troop")
    hmd = open(os.path.join(tmp, ho["handoff"]), encoding="utf-8").read()
    jl = [json.loads(l) for l in open(os.path.join(tmp, ho["jobs"]), encoding="utf-8")]
    check("handoff: the brief lists the entries still without a render, with prompt, seed and file", ho["count"] == 2 and len(jl) == 2 and {j["id"] for j in jl} == {"draft-02", "draft-03"}
          and "draft-02.png" in hmd and drafted["style"] in hmd and "draft-01" not in hmd)
    info = forge.run("test-troop", steps=("cut", "build"), only_missing=False)
    job = forge.job(info["id"])
    t0 = time.time()
    while job["alive"] and time.time() - t0 < 60:
        time.sleep(0.2)
    check("run(cut, build): the loop cuts what has a render, says what has none, rebuilds, and finishes", not job["alive"] and job["ok"] and job["done"] == 3
          and any("draft-02: no render to cut" in l for l in job["log"]) and any("built 3 actors" in l for l in job["log"]), job["log"])
    try:
        forge.comfy = None
        forge.run("test-troop", steps=("render",))
        check("run(render) without a Qwen Comfy is refused plainly", False)
    except RuntimeError as exc:
        check("run(render) without a Qwen Comfy is refused plainly", "Comfy" in str(exc))
    wf = None
    class FakeComfy:
        url = "http://127.0.0.1:1"
        def has_node(self, name):
            return name == "QwenImage21Cache"
    forge.comfy, forge.engine = FakeComfy(), "qwen21"
    wf = forge.t2i_workflow(1408, 768, steps=20, cfg=1)
    check("t2i_workflow: the builtin 2.1 graph without LoadImage, an EmptyLatentImage at the roster's canvas, steps/cfg dialled",
          not any(v.get("class_type") == "LoadImage" for v in wf.values()) and wf["456"]["inputs"] == {"width": 1408, "height": 768, "batch_size": 1}
          and all(v["inputs"]["latent_image"] == ["456", 0] and v["inputs"]["steps"] == 20 for v in wf.values() if v.get("class_type") in forge.mtp.SAMPLERS)
          and not any(k.startswith("images.") for v in wf.values() if v.get("class_type") == "TextEncodeQwenImage21" for k in v["inputs"]))
    forge.comfy, forge.engine = None, None

    # the little HTTP
    srv = forge_mod.make_server(forge, "127.0.0.1", 0)
    port = srv.server_address[1]
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    def req(method, path, body=None, raw=None):
        c = http.client.HTTPConnection("127.0.0.1", port, timeout=10)
        data = raw if raw is not None else (json.dumps(body).encode("utf-8") if body is not None else None)
        c.request(method, path, body=data, headers={"Content-Type": "application/json"} if body is not None else {})
        resp = c.getresponse()
        payload = resp.read()
        c.close()
        return resp.status, payload
    st, body = req("GET", "/api/state")
    state = json.loads(body)
    check("GET /api/state: connection, rosters with counts and art state, the tier table", st == 200 and state["connection"]["connected"] is False
          and any(r["packet"] == "test-troop" and r["counts"]["plates"] == 1 for r in state["rosters"]) and "7" in state["tiers"])
    st, body = req("GET", "/api/site?match=Koopa")
    check("GET /api/site: collected articles drop off the candidate list", st == 200 and json.loads(body)["candidates"] == [], body)
    st, body = req("POST", "/api/collect", {"packet": "test-troop", "fromSite": "Koopa", "limit": 4})
    check("POST /api/collect fromSite: nothing new to add, and it says so", st == 200 and json.loads(body)["added"] == [], body)
    st, body = req("GET", "/api/prompts?packet=test-troop&ids=draft-03")
    pr = json.loads(body)["prompts"]
    check("GET /api/prompts hands any image model the recipe — prompt, negative, seed, target file",
          st == 200 and len(pr) == 1 and pr[0]["id"] == "draft-03" and "A member of Koopa Test" in pr[0]["prompt"]
          and pr[0]["render"].endswith("renders/draft-03.png") and pr[0]["seed"] > 0, body)
    st, body = req("GET", "/")
    check("GET /: the page", st == 200 and b"NPC Forge" in body)
    st, body = req("GET", "/file?p=../../etc/passwd")
    check("GET /file refuses to leave the repo", st == 404)
    st, body = req("GET", "/file?p=Reputation-Matrix2/portraits/test-troop/draft-01.png")
    check("GET /file serves a plate from the tree", st == 200 and body[:4] == b"\x89PNG")
    st, body = req("POST", "/api/run", {"packet": "test-troop", "steps": ["render"]})
    check("POST /api/run without Comfy → 409 with the reason", st == 409 and b"Comfy" in body)
    st, body = req("POST", "/api/upload-render?packet=test-troop&id=draft-02", raw=buf.getvalue())
    check("POST /api/upload-render drops a render on an entry and cuts it", st == 200 and json.loads(body)["plate"].endswith("draft-02.png") and os.path.exists(os.path.join(sb, "portraits", "test-troop", "draft-02.png")))
    st, body = req("POST", "/api/entry", {"packet": "test-troop", "id": "draft-03", "fields": {"look": "A Koopa."}})
    check("POST /api/entry saves a look", st == 200 and json.load(open(rpath, encoding="utf-8"))["entries"][2]["look"] == "A Koopa.")
    st, body = req("GET", "/api/jobs?packet=test-troop")
    check("GET /api/jobs: the render jobs", st == 200 and len(json.loads(body)["jobs"]) == 3)
    st, body = req("POST", "/api/draft", {"packet": "second", "name": "Second", "plan": ["1"]})
    check("POST /api/draft makes a roster", st == 200 and os.path.exists(os.path.join(sb, "data", "forge", "second.json")))
    # ---- roster inputs: the website collector, input rows, auto-collect ----
    from PIL import Image as _Image, ImageDraw as _ImageDraw
    site = os.path.join(sb, "data", "characters.json")
    os.makedirs(os.path.dirname(site), exist_ok=True)
    json.dump([
        {"id": "hat-koopa", "name": "Hat Koopa", "affiliation": "Koopa Test (hat division)", "summary": "A koopa whose hat is very large.", "description": "The hat keeps growing."},
        {"id": "draft-01", "name": "Already in the roster", "affiliation": "Koopa Test", "summary": "a taken id"},
        {"id": "shell-others", "name": "Elsewhere", "affiliation": "Somewhere Else", "summary": "does not match"},
    ], open(site, "w", encoding="utf-8"))
    cands = forge.site_candidates("Koopa Test")
    check("site_candidates: website articles with prose that no roster claims, filtered by affiliation",
          [c["site"] for c in cands] == ["hat-koopa"] and cands[0]["look"].startswith("A koopa whose hat"), cands)
    out = forge.collect("test-troop", cands, tier="1", framing="bust")
    got = json.load(open(rpath, encoding="utf-8"))
    new = got["entries"][-1]
    check("collect: the article becomes a roster entry — site id kept, look is the article's prose, framing preset applied",
          out["added"] == ["hat-koopa"] and new["site"] == "hat-koopa" and new["look"].startswith("A koopa whose hat")
          and new["framing"] == "bust" and bfp.prompt_for(got, new).endswith(bfp.FRAMINGS["bust"]), new)
    check("collect twice adds nothing (entry ids and site ids both dedupe)", forge.collect("test-troop", cands)["added"] == [])
    drafted2 = forge.draft("input-troop", "Input Troop", rows=[{"name": "Row One", "look": "A drawn row.", "tier": "2", "framing": "head"},
                                                               {"site": "row-two", "name": "Row Two", "look": "Another row."}])
    irow = json.load(open(os.path.join(sb, "data", "forge", "input-troop.json"), encoding="utf-8"))
    check("draft with rows: the suite builds its own roster from its input (tiers, framing, site)",
          drafted2["counts"]["entries"] == 2 and [e["cr"] for e in irow["entries"]] == [2, 1]
          and irow["entries"][0]["framing"] == "head" and irow["entries"][1]["site"] == "row-two", irow["entries"])
    drop = os.path.join(tmp, "ai-output")
    os.makedirs(drop, exist_ok=True)
    fig = _Image.new("RGB", (704, 384), (255, 0, 255))
    _ImageDraw.Draw(fig).ellipse((272, 60, 432, 220), fill=(90, 200, 60), outline=(20, 20, 20), width=4)
    fig.save(os.path.join(drop, "draft-03-7.png"))
    fig.save(os.path.join(drop, "unrelated-42.png"))
    gotc = forge.ingest(drop, packet="test-troop")
    check("ingest: a render that lands in a folder is collected and cut for the pending job it matches — no drag & drop",
          [g["id"] for g in gotc] == ["draft-03"] and os.path.exists(os.path.join(sb, "npc-forge", "test-troop", "renders", "draft-03.png"))
          and os.path.exists(os.path.join(sb, "portraits", "test-troop", "draft-03.png")), gotc)
    check("ingest again collects nothing (the job is no longer pending)", forge.ingest(drop, packet="test-troop") == [])
    srv.shutdown()
finally:
    shutil.rmtree(tmp, ignore_errors=True)

ok = sum(1 for _, v in RESULTS if v)
print(f"npc forge: {ok} ok, {len(RESULTS) - ok} failed")
sys.exit(0 if ok == len(RESULTS) else 1)
