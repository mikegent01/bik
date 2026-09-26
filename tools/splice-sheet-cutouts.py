#!/usr/bin/env python3
"""Splice 2x2 contact-sheet images into individual transparent-background cutouts.

Built for the grid art added in the "Hunyuan-ready Bowser battle bases" pass:

  * ``docs/3d-reference/beanbean-battle/generic-enemies-sheet.png`` — a 2x2
    minor-enemy sheet. The packet README already says to crop quadrants before
    feeding Hunyuan 3D; this tool does the crop and removes the studio
    backdrop so each plate arrives as a clean sprite.
  * ``Reputation-Matrix2/tools/item sheet examples/assets/bones-weapons.png`` —
    a 2x2 item sheet whose four items (Longsword / Vile Mace / Light Crossbow /
    Wooden Shield) previously shared one image. They now get one cutout each
    (``bones-longsword.png`` etc.) so ``install_bones_assets.py`` can map every
    item to its own transparent icon.

How backgrounds are removed
---------------------------

  1. Quadrant tiles are cropped with measured boxes (the sheet divider / frame
     is excluded by the box coordinates, no line detection needed).
  2. A U^2-Net salient-object pass (``u2netp.onnx``, Apache-2.0 weights,
     redistributed with rembg) produces a foreground probability map at
     320x320, which is all the flat-backdrop tiles need.
  3. Dark, low-contrast tiles where the net under-segments (blade vs navy
     panel) are assisted by deterministic foreground seed strokes and explicit
     background kill polygons, then completed with GrabCut. The strokes are
     per-tile configuration, tuned against the source art — not magic numbers
     guessed at runtime.
  4. All masks go through component selection, small-hole fill (capped so the
     "window" inside the crossbow outline is *not* filled), a 1px feathered
     alpha, transparent-margin trim, and a centered square pad.

The pipeline has no randomness; rerunning it reproduces the committed PNGs.

Dependencies: pillow, numpy, onnxruntime, opencv-python-headless.
Model: ``tools/models/u2netp.onnx`` (committed; see ``--model`` / bootstrap
notes in ``ensure_model``). The file is byte-identical to rembg's published
``u2netp.onnx`` (md5 8e83ca70e441ab06c318d82300c84806).

Usage:
    python3 tools/splice-sheet-cutouts.py            # process all sheets
    python3 tools/splice-sheet-cutouts.py --sheet enemies
    python3 tools/splice-sheet-cutouts.py --qa-dir /tmp/cutout-qa
"""
from __future__ import annotations

import argparse
import hashlib
import sys
from pathlib import Path

import cv2
import numpy as np
import onnxruntime as ort
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
MODEL_PATH = Path(__file__).resolve().parent / "models" / "u2netp.onnx"
MODEL_MD5 = "8e83ca70e441ab06c318d82300c84806"
MODEL_URLS = (
    # rembg's published copy of the U^2-Net small weights (Apache-2.0)
    "https://github.com/danielgatis/rembg/releases/download/v0.0.0/u2netp.onnx",
    # mirror fetched through the GitHub contents API (same bytes)
    "https://api.github.com/repos/n1m21n/Infinite/contents/assets/models/u2netp.onnx",
)

# ---------------------------------------------------------------------------
# Sheet configuration. Coordinates are pixels in the source image, measured by
# hand against a grid overlay (see PR screenshots). boxes are (x0, y0, x1, y1);
# strokes and polygons are in the *tile* coordinate space of the cropped tile.
# ---------------------------------------------------------------------------

SHEETS = {
    "enemies": {
        "source": ROOT / "docs" / "3d-reference" / "beanbean-battle" / "generic-enemies-sheet.png",
        "tiles": [
            # divider cross sits at x/y 507-516; boxes stop just short of it
            dict(key="top-left", box=(0, 0, 506, 506), mode="neural",
                 out=ROOT / "docs" / "3d-reference" / "beanbean-battle" / "enemy-clockwork-fawful-soldier.png"),
            dict(key="top-right", box=(518, 0, 1024, 506), mode="neural",
                 out=ROOT / "docs" / "3d-reference" / "beanbean-battle" / "enemy-corrupted-beanbean-guard.png"),
            dict(key="bottom-left", box=(0, 518, 506, 1024), mode="neural",
                 out=ROOT / "docs" / "3d-reference" / "beanbean-battle" / "enemy-cackletta-imp.png"),
            dict(key="bottom-right", box=(518, 518, 1024, 1024), mode="neural",
                 out=ROOT / "docs" / "3d-reference" / "beanbean-battle" / "enemy-masked-fawful-scout.png"),
        ],
    },
    "weapons": {
        "source": ROOT / "Reputation-Matrix2" / "tools" / "item sheet examples" / "assets" / "bones-weapons.png",
        "tiles": [
            # panel interiors are inset from the ornate frame; the sword box is
            # widened past the panel to keep the full blade tip
            dict(key="top-left", box=(102, 74, 482, 468), mode="seeded",
                 seeds=[((350, 60), (248, 165), 14)],
                 out=ROOT / "Reputation-Matrix2" / "tools" / "item sheet examples" / "assets" / "bones-longsword.png"),
            dict(key="top-right", box=(544, 74, 921, 468), mode="neural",
                 out=ROOT / "Reputation-Matrix2" / "tools" / "item sheet examples" / "assets" / "bones-vile-mace.png"),
            dict(key="bottom-left", box=(102, 541, 482, 906), mode="seeded",
                 seeds=[((30, 330), (365, 60), 18)],
                 kill_polys=[[(215, 200), (358, 230), (365, 285), (328, 300), (233, 264), (198, 232)]],
                 out=ROOT / "Reputation-Matrix2" / "tools" / "item sheet examples" / "assets" / "bones-light-crossbow.png"),
            dict(key="bottom-right", box=(544, 541, 921, 906), mode="neural",
                 out=ROOT / "Reputation-Matrix2" / "tools" / "item sheet examples" / "assets" / "bones-wooden-shield.png"),
        ],
    },
}

_session = None
GRABCUT_SEED = 20260926


def ensure_model(model_path: Path) -> Path:
    """Return a verified u2netp.onnx path, downloading+pinnning if absent."""
    if model_path.exists():
        return model_path
    model_path.parent.mkdir(parents=True, exist_ok=True)
    import urllib.request

    blob = None
    for url in MODEL_URLS:
        try:
            req = urllib.request.Request(url, headers={"Accept": "application/vnd.github.raw+json"})
            with urllib.request.urlopen(req, timeout=120) as resp:
                blob = resp.read()
            if hashlib.md5(blob).hexdigest() == MODEL_MD5:
                break
            print(f"  checksum mismatch from {url}, trying next source", file=sys.stderr)
            blob = None
        except Exception as exc:  # pragma: no cover - depends on network
            print(f"  download failed from {url}: {exc}", file=sys.stderr)
    if blob is None:
        raise SystemExit(
            f"Could not obtain u2netp.onnx (expected md5 {MODEL_MD5}).\n"
            "Place the file at tools/models/u2netp.onnx or pass --model. It ships with\n"
            "rembg (Apache-2.0 U^2-Net weights) and is committed to this repo under tools/models/."
        )
    model_path.write_bytes(blob)
    print(f"  downloaded model -> {model_path}")
    return model_path


def session(model_path: Path):
    global _session
    if _session is None:
        _session = ort.InferenceSession(str(model_path), providers=["CPUExecutionProvider"])
    return _session


def u2netp_probs(tile: Image.Image, model_path: Path) -> np.ndarray:
    """Foreground probability map (h, w) float32 0..1 for a PIL tile."""
    im = tile.convert("RGB").resize((320, 320), Image.Resampling.LANCZOS)
    a = np.asarray(im).astype(np.float32)
    a = a / max(float(a.max()), 1e-6)
    x = np.zeros_like(a)
    x[:, :, 0] = (a[:, :, 0] - 0.485) / 0.229
    x[:, :, 1] = (a[:, :, 1] - 0.456) / 0.224
    x[:, :, 2] = (a[:, :, 2] - 0.406) / 0.225
    x = x.transpose(2, 0, 1)[None]
    sess = session(model_path)
    pred = sess.run(None, {sess.get_inputs()[0].name: x})[0][:, 0, :, :]
    pred = np.squeeze(pred)
    pred = (pred - pred.min()) / (pred.max() - pred.min() + 1e-8)
    mask = Image.fromarray((np.clip(pred, 0, 1) * 255).astype(np.uint8), "L")
    mask = mask.resize(tile.size, Image.Resampling.LANCZOS)
    return np.asarray(mask).astype(np.float32) / 255.0


# ---------------------------------------------------------------------------
# Mask builders
# ---------------------------------------------------------------------------

def neural_mask(prob: np.ndarray, lo: float = 0.28, hi: float = 0.72) -> np.ndarray:
    """Straight threshold of the neural map; enough for clean flat backdrops."""
    return (prob > ((lo + hi) / 2)).astype(np.uint8)


def seeded_grabcut_mask(tile: Image.Image, prob: np.ndarray,
                        seeds=(), kill_polys=(), iters: int = 7) -> np.ndarray:
    """GrabCut seeded by the neural core, foreground strokes and kill polygons.

    ``seeds`` are ((x0, y0), (x1, y1), width) lines forced foreground — they
    mark thin structure the net drops (sword blade, crossbow stock).
    ``kill_polys`` are vertex lists forced background — they carve enclosed
    "window" regions the net incorrectly includes in the silhouette sail.
    """
    rgb = np.asarray(tile.convert("RGB"))
    bgr = cv2.cvtColor(rgb, cv2.COLOR_RGB2BGR)
    h, w = prob.shape
    mask = np.full((h, w), cv2.GC_BGD, np.uint8)
    ring = 6
    mask[ring:-ring, ring:-ring] = cv2.GC_PR_BGD
    core = cv2.erode((prob > 0.55).astype(np.uint8), np.ones((3, 3), np.uint8))
    mask[core == 1] = cv2.GC_FGD
    mask[prob > 0.28] = np.maximum(mask[prob > 0.28], cv2.GC_PR_FGD)
    for (x0, y0), (x1, y1), wd in seeds:
        cv2.line(mask, (x0, y0), (x1, y1), int(cv2.GC_FGD), wd)
    killmask = np.zeros((h, w), np.uint8)
    for poly in kill_polys:
        pts = np.array(poly, np.int32).reshape(-1, 1, 2)
        cv2.fillPoly(mask, [pts], int(cv2.GC_BGD))
        cv2.fillPoly(killmask, [pts], 1)
    mask[:ring] = cv2.GC_BGD
    mask[-ring:] = cv2.GC_BGD
    mask[:, :ring] = cv2.GC_BGD
    mask[:, -ring:] = cv2.GC_BGD
    # grabCut's GMM k-means init reads the process RNG, so without a fixed
    # seed the result depends on how many tiles ran before this one
    cv2.setRNGSeed(GRABCUT_SEED)
    cv2.grabCut(bgr, mask, None, np.zeros((1, 65), np.float64),
                np.zeros((1, 65), np.float64), iters, cv2.GC_INIT_WITH_MASK)
    fg = ((mask == cv2.GC_FGD) | (mask == cv2.GC_PR_FGD)).astype(np.uint8)
    fg[prob > 0.62] = 1
    fg[killmask == 1] = 0  # hard kill: window areas score high on the net
    return fg


# ---------------------------------------------------------------------------
# Shared finishing: components, holes, feather, trim, square pad
# ---------------------------------------------------------------------------

def finish_tile(tile: Image.Image, fg: np.ndarray,
                keep_ratio: float = 0.03, max_hole_ratio: float = 0.015) -> Image.Image:
    n, lbl, stats, _ = cv2.connectedComponentsWithStats(fg, 8)
    keep = np.zeros_like(fg)
    if n > 1:
        biggest = stats[1:, cv2.CC_STAT_AREA].max()
        for i in range(1, n):
            if stats[i, cv2.CC_STAT_AREA] >= max(keep_ratio * biggest, 250):
                keep[lbl == i] = 1
    out = np.zeros_like(keep)
    cnts, _ = cv2.findContours(keep, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    cv2.drawContours(out, cnts, -1, 1, cv2.FILLED)
    # carve enclosed "window" pockets back out (e.g. inside a bow outline);
    # only holes <= max_hole_ratio of the body stay filled (dents, joints)
    filled_only = out - keep
    nh, lhl, sh, _ = cv2.connectedComponentsWithStats(filled_only, 8)
    body_area = int(keep.sum())
    for i in range(1, nh):
        if sh[i, cv2.CC_STAT_AREA] > max_hole_ratio * max(body_area, 1):
            out[lhl == i] = 0
    alpha = (out * 255).astype(np.uint8)
    alpha = cv2.GaussianBlur(alpha, (0, 0), 1.0)

    rgba = np.dstack([np.asarray(tile.convert("RGB")), alpha])
    ys, xs = np.where(alpha > 8)
    if len(xs) == 0:
        raise SystemExit(f"empty mask for tile of size {tile.size}; adjust its config")
    pad = 16
    y0, y1 = max(0, ys.min() - pad), min(rgba.shape[0], ys.max() + pad + 1)
    x0, x1 = max(0, xs.min() - pad), min(rgba.shape[1], xs.max() + pad + 1)
    rgba = rgba[y0:y1, x0:x1]
    th, tw = rgba.shape[:2]
    side = max(th, tw)
    canvas = np.zeros((side, side, 4), np.uint8)
    oy, ox = (side - th) // 2, (side - tw) // 2
    canvas[oy:oy + th, ox:ox + tw] = rgba
    return Image.fromarray(canvas, "RGBA")


def checkerboard(pil_img: Image.Image, cell: int = 32) -> Image.Image:
    """QA helper: render a cutout over a checker mat."""
    w, h = pil_img.size
    cb = np.zeros((h, w, 3), np.uint8)
    for y in range(0, h, cell):
        for x in range(0, w, cell):
            c = 205 if (x // cell + y // cell) % 2 == 0 else 155
            cb[y:y + cell, x:x + cell] = c
    bg = Image.fromarray(cb).convert("RGBA")
    bg.alpha_composite(pil_img)
    return bg


def process_tile(tile_img: Image.Image, cfg: dict, model_path: Path) -> Image.Image:
    prob = u2netp_probs(tile_img, model_path)
    if cfg["mode"] == "seeded":
        fg = seeded_grabcut_mask(tile_img, prob,
                                 seeds=cfg.get("seeds", ()),
                                 kill_polys=cfg.get("kill_polys", ()))
    else:
        fg = neural_mask(prob)
    return finish_tile(tile_img, fg)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("--sheet", choices=[*SHEETS.keys()], default=None,
                        help="process only one sheet (default: all)")
    parser.add_argument("--model", type=Path, default=MODEL_PATH,
                        help=f"u2netp.onnx path (default: {MODEL_PATH})")
    parser.add_argument("--qa-dir", type=Path, default=None,
                        help="also write checkerboard QA renders to this directory")
    parser.add_argument("--force", action="store_true",
                        help="overwrite existing output files (default: refuse)")
    args = parser.parse_args()

    model_path = ensure_model(args.model)
    names = [args.sheet] if args.sheet else list(SHEETS)
    written = 0
    for name in names:
        sheet = SHEETS[name]
        src = Image.open(sheet["source"]).convert("RGB")
        for cfg in sheet["tiles"]:
            out_path: Path = cfg["out"]
            if out_path.exists() and not args.force:
                print(f"  SKIP {out_path.relative_to(ROOT)} (exists; use --force)")
                continue
            tile = src.crop(cfg["box"])
            cutout = process_tile(tile, cfg, model_path)
            out_path.parent.mkdir(parents=True, exist_ok=True)
            cutout.save(out_path)
            print(f"  WROTE {out_path.relative_to(ROOT)} {cutout.size[0]}x{cutout.size[1]}px")
            written += 1
            if args.qa_dir:
                args.qa_dir.mkdir(parents=True, exist_ok=True)
                checkerboard(cutout).convert("RGB").save(
                    args.qa_dir / f"{name}_{cfg['key']}_checker.jpg", quality=92)
    print(f"Done. {written} cutout(s) written.")
    if args.qa_dir:
        print(f"QA renders in {args.qa_dir}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
