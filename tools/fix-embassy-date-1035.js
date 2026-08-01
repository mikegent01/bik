const fs = require('fs');
const path = require('path');

const whatifsPath = path.join(__dirname, '../Reputation-Matrix2/data/whatifs.json');
const eventsPath = path.join(__dirname, '../Reputation-Matrix2/data/events.json');
const mainPagePath = path.join(__dirname, '../Reputation-Matrix2/data/mainPage.json');

// 1. UPDATE WHATIFS.JSON TO 1035 BF
let whatifsData = JSON.parse(fs.readFileSync(whatifsPath, 'utf8'));
const wiIdx = whatifsData.whatifs.findIndex(w => w.id === 'the_embassy_ambush_and_luigi_interrogation');
if (wiIdx >= 0) {
  let w = whatifsData.whatifs[wiIdx];
  w.title = "The Mage's Embassy Ambush & The Luigi Interrogation (1035 BF)";
  w.kicker = "Classified Canonical Audit · Harvestide 1035 BF";
  w.status = "Canonical Intelligence Audit / Historical Retrospective (1035 BF Incident · Mushroom Kingdom Era)";
  w.premise = w.premise.replace("In Harvestide 1040 BF", "In Harvestide 1035 BF (Mushroom Kingdom Era)");
  w.summary = w.summary.replace("1040 BF", "1035 BF");
  w.tags = w.tags.map(t => t === "1040 BF" ? "1035 BF" : t);
  if (!w.tags.includes("Mushroom Kingdom")) w.tags.push("Mushroom Kingdom");
  if (!w.tags.includes("1030s BF")) w.tags.push("1030s BF");
  // Update date in text where needed
  whatifsData.whatifs[wiIdx] = w;
  fs.writeFileSync(whatifsPath, JSON.stringify(whatifsData, null, 2), 'utf8');
  console.log('Updated whatifs.json to 1035 BF.');
}

// 2. UPDATE EVENTS.JSON TO 1035 BF
let eventsData = JSON.parse(fs.readFileSync(eventsPath, 'utf8'));
const evIdx = eventsData.findIndex(e => e && e.id === 'the_embassy_ambush_and_luigi_interrogation');
if (evIdx >= 0) {
  let e = eventsData[evIdx];
  e.name = "The Mage's Embassy Ambush & The Luigi Interrogation (1035 BF)";
  e.date = "18 Harvestide, 1035 BF";
  e.era = "The Mushroom Kingdom Regency Era (1030s BF) — Mario's Disappearance Arc";
  e.location = "WarioWare Tower (Toad Town), The Mage's Embassy (Mushroom Kingdom Diplomatic Quarter), and the Backroads of Toad Town";
  e.summary = e.summary.replace("In Harvestide 1040 BF", "In Harvestide 1035 BF (Mushroom Kingdom Era)");
  e.description = e.description
    .replace("18 Harvestide, 1040 BF", "18 Harvestide, 1035 BF")
    .replace("in 1040 BF", "in 1035 BF during the Mushroom Kingdom Regency era (well after Princess Peach's assassination in 955 BF)")
    .replace("18 Harvestide", "18 Harvestide, 1035 BF");
  eventsData[evIdx] = e;
  fs.writeFileSync(eventsPath, JSON.stringify(eventsData, null, 1), 'utf8');
  console.log('Updated events.json to 1035 BF.');
}

// 3. UPDATE MAINPAGE.JSON TO 1035 BF
let mainPageData = JSON.parse(fs.readFileSync(mainPagePath, 'utf8'));
if (mainPageData.siteUpdates) {
  const suIdx = mainPageData.siteUpdates.findIndex(u => u.id === 'the_embassy_ambush_and_luigi_interrogation');
  if (suIdx >= 0) {
    mainPageData.siteUpdates[suIdx].title = "The Mage's Embassy Ambush & Luigi Interrogation (1035 BF)";
    mainPageData.siteUpdates[suIdx].summary = "Waluigi's Rank-1 analytical audit of 18 Harvestide, 1035 BF (Mushroom Kingdom Era)—the day Wario attempted to kidnap Luigi from the Mage's Embassy (next to the Regal Embassy) to force answers about Mario's disappearance, featuring Dave the greeter, a 3-second countdown, an embassy explosion, a banana-peel police chase, and Luigi's heart-wrenching backseat confession about the eastern farm.";
    fs.writeFileSync(mainPagePath, JSON.stringify(mainPageData, null, 2), 'utf8');
    console.log('Updated mainPage.json siteUpdates to 1035 BF.');
  }
}
