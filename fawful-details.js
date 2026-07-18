// This file contains the detailed data for Fawful's unique faction system.

export const FAWFUL_DETAILS = {
    description: "Fawful's power is as erratic as his personality, measured by the 'Fury Meter'. As his fury grows, his actions become more destructive and unpredictable. His presence has also thrown the Mushroom Kingdom Civil War into further chaos.",
    fury_meter: {
        current_fury: 75,
        levels: [
            { threshold: 0, name: "Simmering with Chortles", effect: "Minor mechanical minions patrol the castle. Defenses are standard." },
            { threshold: 25, name: "Giggling with Glee", effect: "Increased minion patrols. Castle defenses are enhanced with minor traps." },
            { threshold: 50, name: "Chuckling with Contempt", effect: "Deployment of mid-tier 'Fawful-Bots'. Unpredictable energy surges affect castle corridors." },
            { threshold: 75, name: "I HAVE FURY!", effect: "Unleashes elite 'Fury-Bots'. The castle's main cannon is powered up and may fire randomly. All minions are enraged." },
            { threshold: 100, name: "MAXIMUM FURY!", effect: "The entire castle becomes a weapon. Reality itself seems to warp within its walls. Fawful may make a personal appearance on the battlefield." }
        ]
    }
};