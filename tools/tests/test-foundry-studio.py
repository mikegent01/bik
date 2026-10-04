#!/usr/bin/env python3
"""tools/foundry-studio.py — the Foundry++ character editor suite, end to end
on a throwaway library that looks like the real mess (the screenshot: `ai bg
icons portraits tokens` subfolders, `bonesclean.webp`, `danm.png`,
`court-mage-a.png`, hash-named `-removebg-preview` cut-outs, an mp3, a wav).

    python3 tools/tests/test-foundry-studio.py

Proves: scan suggests the right characters; sort files by answers file,
by prompts (stdin) and by --auto; folders mirror kind/faction/slug; the
manifest round-trips; rename / edit / delete move the files and leave no
empty folders; delete goes to _trash unless --forever; link puts the repo
actor tree and every art file under Data/npc/waluipedia (symlinks here,
copies with --copy) and unlink removes exactly those; versions reads the
sheet index and prints an ERAS stub; adopt writes the repo portrait; changes
writes a bridge `apply` file with the Data paths. Nothing touches the repo
except a portraits dir the test redirects.
"""
import io
import json
import os
import struct
import subprocess
import sys
import tempfile
import zlib
import importlib.util

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
STUDIO = os.path.join(ROOT, "tools", "foundry-studio.py")

spec = importlib.util.spec_from_file_location("foundry_studio", STUDIO)
S = importlib.util.module_from_spec(spec)
spec.loader.exec_module(S)

OK, FAIL = 0, []


def check(name, cond, detail=""):
    global OK
    if cond:
        OK += 1
        print(f"  ok   {name}")
    else:
        FAIL.append(name)
        print(f"  FAIL {name} {detail}")


def png(path, w=64, h=64):
    raw = b"".join(b"\x00" + b"\xff\x00\x00\xff" * w for _ in range(h))

    def chunk(t, d):
        return struct.pack(">I", len(d)) + t + d + struct.pack(">I", zlib.crc32(t + d) & 0xFFFFFFFF)
    data = (b"\x89PNG\r\n\x1a\n" + chunk(b"IHDR", struct.pack(">IIBBBBB", w, h, 8, 6, 0, 0, 0))
            + chunk(b"IDAT", zlib.compress(raw)) + chunk(b"IEND", b""))
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "wb") as fh:
        fh.write(data)


def webp(path, w=64, h=64):
    bits = (w - 1) | ((h - 1) << 14)
    body = b"\x2f" + bits.to_bytes(4, "little") + b"\x00" * 16
    data = b"RIFF" + (4 + 8 + len(body)).to_bytes(4, "little") + b"WEBP" + b"VP8L" + len(body).to_bytes(4, "little") + body
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "wb") as fh:
        fh.write(data)


def run(*argv, stdin=None):
    p = subprocess.run([sys.executable, STUDIO] + list(argv), input=stdin, text=True, capture_output=True)
    return p.returncode, p.stdout + p.stderr


LOOSE = ["Axie.png", "bearr.png", "bio.png", "bluet.png", "Bluey.png", "bonesclean.webp", "brom.webp",
         "cfleadtoad.png", "chest.png", "court-chambermaid.png", "court-mage-a.png", "crazy.png", "cree.png",
         "danm.png", "dfas.webp", "dog.png", "boom.webp", "BrickBlock_-_2D_art.webp",
         "3f9a2c1d7b8e4f60-removebg-preview.png", "a1b2c3d4e5f60718-removebg-preview.webp"]


def make_library(root):
    for sub in ("ai", "bg", "icons", "portraits", "tokens"):
        os.makedirs(os.path.join(root, sub), exist_ok=True)
    for n in LOOSE:
        (png if n.endswith(".png") else webp)(os.path.join(root, n), 96, 128)
    with open(os.path.join(root, "28.-bowser's-stolen-castle.mp3"), "wb") as fh:
        fh.write(b"ID3" + b"\x00" * 200)
    with open(os.path.join(root, "ar.wav"), "wb") as fh:
        fh.write(b"RIFF" + b"\x00" * 40)
    png(os.path.join(root, "tokens", "old-token.png"), 32, 32)


with tempfile.TemporaryDirectory() as tmp:
    lib = os.path.join(tmp, "npcs")
    make_library(lib)

    print("# archive + helpers")
    A = S.Archive(ROOT)
    check("characters, factions, the 955 roster and the ledger load", len(A.characters) > 100 and len(A.faction_ids) > 10 and "Castle Chambermaid" in A.roster_955 and A.ledger.get("bowser", {}).get("level") == 8)
    check("image_size reads PNG and WebP headers", S.image_size(os.path.join(lib, "danm.png")) == (96, 128) and S.image_size(os.path.join(lib, "bonesclean.webp")) == (96, 128))
    check("suggest: bonesclean → Bones, danm → Dan, court-chambermaid → the 955 roster, hash names → nothing",
          A.suggest("bonesclean")[0][1] == "bones" and A.suggest("danm")[0][1] == "dan"
          and A.suggest("court-chambermaid")[0][0] == "Castle Chambermaid" and A.suggest("3f9a2c1d7b8e4f60-removebg-preview") == [])
    check("suggest never repeats a character", all(len({c for _, c, _ in A.suggest(s) if c}) == len([c for _, c, _ in A.suggest(s) if c]) for s in ("cree", "dan", "bones")))
    check("faction_for reads the ledger (Bowser → disaster_inc) and the article (Kamek → koopa_troop)", A.faction_for("bowser") == "disaster_inc" and A.faction_for("kamek") == "koopa_troop" and A.faction_for(None) == S.UNAFFILIATED)
    check("kind_of: cut-outs are tokens, audio is audio, a subfolder names its kind", S.Library.kind_of("x-removebg-preview.png") == "tokens" and S.Library.kind_of("ar.wav") == "audio" and S.Library.kind_of("icons/sword.png") == "icons" and S.Library.kind_of("danm.png") == "portraits")

    print("\n# scan")
    rc, out = run("scan", lib)
    check("scan lists every loose root file with a size and a guess", rc == 0 and "loose:   22 files" in out and "bonesclean.webp" in out and "Bones (bones)" in out and "96×128" in out)
    rc, out = run("scan", lib, "--all")
    check("scan --all also sees the subfolders", rc == 0 and "tokens/old-token.png" in out and "loose:   23 files" in out)

    print("\n# sort by answers file")
    answers = {
        "bonesclean.webp": {"name": "Bones", "kind": "tokens", "faction": "liberated_toads", "character": "bones"},
        "danm.png": {"name": "Dan", "kind": "portraits", "faction": "liberated_toads"},
        "court-mage-a.png": {"name": "Court Mage A", "kind": "tokens", "faction": "mushroom_regency", "version": "955-bf"},
        "3f9a2c1d7b8e4f60-removebg-preview.png": {"name": "Court Herald", "kind": "tokens", "faction": "peach_loyalists", "version": "955 BF", "notes": "ceremonial herald"},
        "28.-bowser's-stolen-castle.mp3": {"name": "Bowser's Stolen Castle", "kind": "audio", "faction": "koopa_troop"},
        "chest.png": {"name": "s"},
        "dog.png": {"name": "d"},
    }
    apath = os.path.join(tmp, "answers.json")
    with open(apath, "w", encoding="utf-8") as fh:
        json.dump(answers, fh)
    rc, out = run("sort", lib, "--answers", apath)
    check("sort exits 0 and reports what it filed", rc == 0 and "filed 5" in out and "not in the answers file" in out, out[-400:])
    L = S.Library(lib)
    check("files moved under <kind>/<faction>/<slug>[--version].<ext>",
          os.path.isfile(os.path.join(lib, "tokens", "liberated_toads", "bones.webp"))
          and os.path.isfile(os.path.join(lib, "portraits", "liberated_toads", "dan.png"))
          and os.path.isfile(os.path.join(lib, "tokens", "mushroom_regency", "court_mage_a--955-bf.png"))
          and os.path.isfile(os.path.join(lib, "tokens", "peach_loyalists", "court_herald--955-bf.png"))
          and os.path.isfile(os.path.join(lib, "audio", "koopa_troop", "bowser_s_stolen_castle.mp3")))
    check("the manifest records name, faction, character, version, notes and the files",
          L.entries["bones"]["character"] == "bones" and L.entries["bones"]["files"]["tokens"] == "tokens/liberated_toads/bones.webp"
          and L.entries["dan"]["character"] == "dan" and L.entries["court_mage_a--955-bf"]["version"] == "955-bf"
          and L.entries["court_herald--955-bf"]["notes"] == "ceremonial herald" and L.entries["court_herald--955-bf"]["character"] is None)
    check("s skips (remembered), d deletes to _trash", "chest.png" in L.data["skipped"] and os.path.isfile(os.path.join(lib, "_trash", "dog.png")) and not os.path.exists(os.path.join(lib, "dog.png")))
    check("an answers file is the whole conversation: the other files stay loose", os.path.isfile(os.path.join(lib, "Bluey.png")) and os.path.isfile(os.path.join(lib, "cree.png")) and "cree" not in L.entries)
    rc, out = run("sort", lib, "--auto")
    L = S.Library(lib)
    check("--auto takes only the confident suggestions (cree → Creek 89%) and leaves the rest loose",
          rc == 0 and "creek" in L.entries and L.entries["creek"]["character"] == "creek_medic" and os.path.isfile(os.path.join(lib, "Bluey.png"))
          and os.path.isfile(os.path.join(lib, "cfleadtoad.png")) and os.path.isfile(os.path.join(lib, "court-chambermaid.png")) and "auto: no confident match" in out)

    print("\n# sort by prompts (stdin)")
    # the loose files come alphabetically: Axie.png is first — name typed, kind default, faction typed, no version; then q on Bluey.png
    rc, out = run("sort", lib, stdin="Axie the Axolotl\n\nkoopa_troop\n\nq\n")
    check("prompted answers file the first loose file and q stops the run", rc == 0 and os.path.isfile(os.path.join(lib, "portraits", "koopa_troop", "axie_the_axolotl.png")) and "stopped early" in out, out[-300:])
    check("the prompt shows the suggestions and the key help", "looks like" in out and "Enter = accept" in out)
    rc, out = run("sort", lib, stdin="")
    check("a closed stdin stops instead of filing everything by default", rc == 0 and "stopped early" in out and os.path.isfile(os.path.join(lib, "Bluey.png")))
    # Bluey.png: name typed, audio refused for a .png then tokens accepted, faction default, no version; then quit
    rc, out = run("sort", lib, stdin="Bluey\naudio\ntokens\n\n\nq\n")
    check("a kind that does not fit the extension is refused and asked again", rc == 0 and ".png is not a audio file" in out and os.path.isfile(os.path.join(lib, "tokens", "unaffiliated", "bluey.png")))
    rc, out = run("sort", lib, stdin="\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
    L = S.Library(lib)
    check("Enter on a hash-named cut-out files nothing (no name, left loose)", rc == 0 and "no name given" in out and os.path.isfile(os.path.join(lib, "a1b2c3d4e5f60718-removebg-preview.webp")) and not any(k.startswith("a1b2") for k in L.entries))
    rc, out = run("rename", lib, "axie_the_axolotl", "Bear")
    check("(rename for the next steps)", rc == 0 and os.path.isfile(os.path.join(lib, "portraits", "koopa_troop", "bear.png")))

    print("\n# list / edit / rename / delete")
    rc, out = run("list", lib)
    check("list prints every entry with its files and sheet facts", rc == 0 and "bones" in out and "tokens:tokens/liberated_toads/bones.webp" in out and "sheet PC L5" in out)
    rc, out = run("list", lib, "--faction", "koopa_troop", "--kind", "audio")
    check("list filters by faction and kind", rc == 0 and "bowser_s_stolen_castle" in out and "bones" not in out)
    rc, out = run("rename", lib, "bear", "Bear Guard")
    check("rename moves the file and re-keys the entry", rc == 0 and os.path.isfile(os.path.join(lib, "portraits", "koopa_troop", "bear_guard.png")) and "bear_guard" in S.Library(lib).entries and "bear" not in S.Library(lib).entries)
    rc, out = run("edit", lib, "bear_guard", "--faction", "iron_legion", "--character", "bowser", "--notes", "guards the door")
    L = S.Library(lib)
    check("edit re-factions (file moves, empty folder pruned), sets the character and notes",
          rc == 0 and os.path.isfile(os.path.join(lib, "portraits", "iron_legion", "bear_guard.png")) and not os.path.exists(os.path.join(lib, "portraits", "koopa_troop"))
          and L.entries["bear_guard"]["character"] == "bowser" and L.entries["bear_guard"]["notes"] == "guards the door")
    rc, out = run("edit", lib, "bear_guard", "--version", "955-bf")
    check("edit --version re-keys with the era suffix", rc == 0 and "bear_guard--955-bf" in S.Library(lib).entries and os.path.isfile(os.path.join(lib, "portraits", "iron_legion", "bear_guard--955-bf.png")))
    rc, out = run("edit", lib, "nope", "--name", "x")
    check("edit refuses an unknown key", rc != 0 and "no entry" in out)
    rc, out = run("edit", lib, "dan", "--character", "not_a_character")
    check("edit refuses an unknown character id", rc != 0 and "no character" in out)
    rc, out = run("delete", lib, "dan")
    check("delete moves to _trash and drops the entry", rc == 0 and os.path.isfile(os.path.join(lib, "_trash", "portraits", "liberated_toads", "dan.png")) and "dan" not in S.Library(lib).entries)
    rc, out = run("delete", lib, "bear_guard--955-bf/portraits", "--forever")
    check("delete --forever removes the file for good", rc == 0 and not os.path.exists(os.path.join(lib, "portraits", "iron_legion", "bear_guard--955-bf.png")) and "bear_guard--955-bf" not in S.Library(lib).entries)

    print("\n# link / unlink")
    data = os.path.join(tmp, "Data")
    os.makedirs(data)
    rc, out = run("link", lib, "--data", data, "--dry-run")
    check("link --dry-run makes nothing", rc == 0 and "dry run" in out and not os.path.exists(os.path.join(data, "npc")))
    rc, out = run("link", lib, "--data", data)
    base = os.path.join(data, "npc", "waluipedia")
    check("link puts the repo actor tree at npc/waluipedia/actors", rc == 0 and os.path.isdir(os.path.join(base, "actors", "cast")) and os.path.isfile(os.path.join(base, "actors", "cast", "import.json")))
    check("link puts every art file at npc/waluipedia/art/<faction>/<slug>/<kind>.<ext> and audio under audio/",
          os.path.isfile(os.path.join(base, "art", "liberated_toads", "bones", "token.webp"))
          and os.path.isfile(os.path.join(base, "art", "mushroom_regency", "court_mage_a--955-bf", "token.png"))
          and os.path.isfile(os.path.join(base, "audio", "koopa_troop", "bowser_s_stolen_castle.mp3")))
    links = json.load(open(os.path.join(base, S.LINKS_FILE), encoding="utf-8"))
    check("links are symlinks here and recorded for unlink", os.path.islink(os.path.join(base, "actors")) and os.path.islink(os.path.join(base, "art", "liberated_toads", "bones", "token.webp")) and len(links["links"]) >= 5)
    rc, out = run("unlink", "--data", data)
    check("unlink removes exactly what link made and leaves the library alone", rc == 0 and not os.path.lexists(os.path.join(base, "actors")) and not os.path.exists(os.path.join(base, "art")) and os.path.isfile(os.path.join(lib, "tokens", "liberated_toads", "bones.webp")))
    rc, out = run("link", lib, "--data", data, "--copy", "--no-actors")
    check("link --copy copies instead (and --no-actors skips the repo tree)", rc == 0 and os.path.isfile(os.path.join(base, "art", "liberated_toads", "bones", "token.webp")) and not os.path.islink(os.path.join(base, "art", "liberated_toads", "bones", "token.webp")) and not os.path.lexists(os.path.join(base, "actors")))
    rc, out = run("link", "--data", os.path.join(tmp, "nowhere"))
    check("link refuses a Data folder that does not exist", rc != 0 and "not found" in out)

    print("\n# versions / adopt / changes")
    rc, out = run("versions", "mario")
    check("versions lists now + the 955 BF past self with routes", rc == 0 and "#/sheets/mario" in out and "955-bf" in out and "#/sheets/mario/955-bf" in out and "Mario at his height" in out)
    rc, out = run("versions", "bowser")
    check("Bowser: intake now, 955 BF past self", rc == 0 and "intake" in out and "Bowser, King of the Koopas" in out)
    rc, out = run("versions", "kamek", "--stub", "955-bf")
    check("--stub prints a pasteable ERAS entry capped at the ledger", rc == 0 and '"kamek": [dict(' in out and 'version="955-bf"' in out and "level=2" in out and "Wizard" in out)
    rc, out = run("versions", "not_a_character")
    check("versions refuses an unknown character", rc != 0)
    pdir = os.path.join(tmp, "portraits")
    rc, out = run("adopt", lib, "bones", "--portraits-dir", pdir)
    check("adopt copies the entry's portrait/token to <portraits>/<character id>.<ext>", rc == 0 and os.path.isfile(os.path.join(pdir, "bones.webp")) and "build-character-sheets" in out)
    rc, out = run("adopt", lib, "bones", "--portraits-dir", pdir)
    check("adopt refuses to overwrite without --force", rc != 0 and "already has a portrait" in out)
    rc, out = run("adopt", lib, "court_herald--955-bf", "--portraits-dir", pdir)
    check("adopt needs a character id", rc != 0 and "--as" in out)
    cpath = os.path.join(tmp, "changes.json")
    rc, out = run("changes", lib, "--out", cpath)
    ch = json.load(open(cpath, encoding="utf-8"))["changes"]
    by = {c["_studio"]: c for c in ch}
    check("changes writes bridge apply entries pointing at the linked art",
          rc == 0 and by["bones"]["match"]["name"] == "Bones" and by["bones"]["set"]["prototypeToken.texture.src"] == "npc/waluipedia/art/liberated_toads/bones/token.webp"
          and by["court_mage_a--955-bf"]["match"]["name"] == "Court Mage A (955 BF)" and "bowser_s_stolen_castle" not in by)

print(f"\n{OK} passed, {len(FAIL)} failed")
sys.exit(1 if FAIL else 0)
