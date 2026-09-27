# Model weights

## `u2netp.onnx`

Small **U^2-Net** (salient-object detection) weights used by
[`../splice-sheet-cutouts.py`](../splice-sheet-cutouts.py) to remove image
backgrounds when splicing contact sheets.

| | |
|---|---|
| Source | U^2-Net, Xuebin Qin et al. — https://github.com/xuebinqin/U-2-Net |
| License | Apache License 2.0 |
| Redistribution | Byte-identical copy of the weights published with **rembg** (Daniel Gatis, MIT) at https://github.com/danielgatis/rembg/releases/tag/v0.0.0 and mirrored in the git tree of https://github.com/n1m21n/Infinite (`assets/models/u2netp.onnx`, see that repo's `NOTICE.txt`) |
| Integrity | 4,574,861 bytes; md5 `8e83ca70e441ab06c318d82300c84806` (matches rembg's pinned checksum) |

The tool verifies the file against this checksum if it ever has to re-fetch it.
