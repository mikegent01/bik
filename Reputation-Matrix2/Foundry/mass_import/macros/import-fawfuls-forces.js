// Waluipedia: pull the Fawful's Forces packet straight from the repo — the
// Fury Meter's machines (Chortle-Bot, Intake Drone, Mustard Sprayer,
// Hypno-Helm, Fury-Bot, Boom-Crawler), the Bean Garrison (trooper,
// vial-flinger, Furybean brute, vat-warped thrall) and the two lieutenants
// (Maestro Mustardo, Countess Chortlebrass); 12 actors filed as
// Fawful's Furious Freaks / <tier>. Built by tools/build-forge-packets.py
// from the NPC Forge roster data/forge/fawfuls-forces.json.
// Script macro — needs the Mass Import module enabled and the token plates
// Reputation-Matrix2/portraits/fawfuls-forces/ copied into Data/portraits/
// (the sheets suite's install-images does it).
// Re-running updates the actors in place (ids are stable) — no duplicates.
const api = game.modules.get("waluipedia-mass-import")?.api;
if (!api) return ui.notifications.error("Enable the module “Waluipedia Mass Import / Export” first.");
const url = "https://raw.githubusercontent.com/mikegent01/bik/gh-pages/Reputation-Matrix2/actors/fawfuls-forces/import.json";
return api.openImportDialog({ url });
