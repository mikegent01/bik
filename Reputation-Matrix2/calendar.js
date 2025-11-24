
export const CURRENT_GAME_DATE = {
    year: 1040,
    monthIndex: 6, // 0-indexed for Highsun (ordinal 7)
    day: 20
};


export const CALENDAR_DATA = {
  "name": "Regal Empire Standard Calendar",
  "description": "The official calendar of the Regal Empire...",
  "version": "1.2.0",
  "path": "",
  "id": "regal-empire-standard-1040bf",
  "note": "This calendar reflects the state of the Doughnut World around 1040 BF.",
  "years": {
    "yearZero": 0,
    "firstWeekday": 0,
    "leapYear": { "leapStart": 4, "leapInterval": 4 }
  },
  "months": {
    "values": [
      { "name": "Firstlight", "abbreviation": "Fst", "ordinal": 1, "days": 30, "leapDays": 30 },
      { "name": "Chillwind", "abbreviation": "Chl", "ordinal": 2, "days": 30, "leapDays": 30 },
      { "name": "Veridia", "abbreviation": "Ver", "ordinal": 3, "days": 30, "leapDays": 30 },
      { "name": "Bloom", "abbreviation": "Blo", "ordinal": 4, "days": 30, "leapDays": 30 },
      { "name": "Floria", "abbreviation": "Flo", "ordinal": 5, "days": 30, "leapDays": 30 },
      { "name": "Efferd", "abbreviation": "Eff", "ordinal": 6, "days": 30, "leapDays": 30 },
      { "name": "Highsun", "abbreviation": "Hsn", "ordinal": 7, "days": 30, "leapDays": 30 },
      { "name": "Harvestide", "abbreviation": "Hrv", "ordinal": 8, "days": 30, "leapDays": 30 },
      { "name": "Aethel", "abbreviation": "Aet", "ordinal": 9, "days": 30, "leapDays": 30 },
      { "name": "Darkmoon", "abbreviation": "Drk", "ordinal": 10, "days": 30, "leapDays": 30 },
      { "name": "Frostfall", "abbreviation": "Frs", "ordinal": 11, "days": 30, "leapDays": 30 },
      { "name": "Deepwinter", "abbreviation": "Dpw", "ordinal": 12, "days": 35, "leapDays": 36 }
    ]
  },
  "days": {
    "values": [
      { "name": "Soldas", "abbreviation": "Sol", "ordinal": 1 },
      { "name": "Lunadas", "abbreviation": "Lun", "ordinal": 2 },
      { "name": "Terras", "abbreviation": "Ter", "ordinal": 3 },
      { "name": "Mercurias", "abbreviation": "Mer", "ordinal": 4 },
      { "name": "Jovias", "abbreviation": "Jov", "ordinal": 5 },
      { "name": "Venerias", "abbreviation": "Ven", "ordinal": 6, "isRestDay": true },
      { "name": "Saturias", "abbreviation": "Sat", "ordinal": 7, "isRestDay": true }
    ],
    "daysPerYear": 365,
    "hoursPerDay": 24,
    "minutesPerHour": 60,
    "secondsPerMinute": 60
  },
  "seasons": {
    "values": [
      { "name": "Verdant Spring", "abbreviation": "Spr", "monthStart": 3, "monthEnd": 5, "dayStart": 1, "dayEnd": 30, "color": "#90EE90" },
      { "name": "Golden Summer", "abbreviation": "Sum", "monthStart": 6, "monthEnd": 8, "dayStart": 1, "dayEnd": 30, "color": "#FFD700" },
      { "name": "Crimson Fall", "abbreviation": "Fal", "monthStart": 9, "monthEnd": 11, "dayStart": 1, "dayEnd": 30, "color": "#FFA07A" },
      { "name": "Hoarfrost Winter", "abbreviation": "Win", "monthStart": 12, "monthEnd": 2, "dayStart": 1, "dayEnd": 30, "color": "#ADD8E6" }
    ]
  },
  "moons": {
    "values": [
      { "name": "Luna Imperia", "cycleLength": 28, "phaseNames": ["New", "Waxing Crescent", "First Quarter", "Waxing Gibbous", "Full", "Waning Gibbous", "Last Quarter", "Waning Crescent"], "offset": 0, "color": "#E0E0E0" },
      { "name": "Crimson Eye", "cycleLength": 40, "phaseNames": ["Hidden", "Awakening", "Gazing", "Fading"], "offset": 15, "color": "#DC143C" },
      { "name": "Scintilla", "cycleLength": 73.5, "phaseNames": ["Veiled", "Glimmer", "Brilliance", "Fading"], "offset": 30, "color": "#FFFACD" }
    ]
  },
  "birthdays": [
    { name: "Archie Miser", month: 1, day: 1, description: "Born on Empire's Founding Day. A chaotic start." },
    { name: "Markop Judi", month: 7, day: 15, description: "Mid-Highsun. A time of light and strength." },
    { name: "Humpik", month: 2, day: 3, description: "Early Chillwind. Born in the deep cold of the mountains." },
    { name: "Bowser", month: 12, day: 30, description: "Doughnut Hole Festival. A festive, gluttonous day." },
    { name: "Remi (FNG)", month: 8, day: 12, description: "Harvestide. A time of reaping what is sown." }
  ],
  "holidays": {
    "values": [
      { "name": "Empire's Founding Day", "month": 1, "day": 1, "description": "Commemorates the establishment of the Regal Empire.", "traditions": "Parades, Oaths." },
      { "name": "First Hum Imperial Recognition", "month": 1, "day": 2, "description": "Cosmic significance of the First Hum.", "traditions": "Contemplation." },
      { "name": "Zootopian Founders' Day", "month": 1, "day": 25, "description": "Zootopia celebrates equality.", "traditions": "Community Service." },
      { "name": "Midlands' King's Coronation", "month": 2, "day": 5, "description": "King Alaric's ascent.", "traditions": "Feasts, Warding." },
      { "name": "First Bloom Festival", "month": 3, "day": 1, "description": "First signs of spring.", "traditions": "Planting." },
      { "name": "The Feast of the Silver Flame", "month": 3, "day": 15, "description": "Religious holiday of the Order of the Silver Flame celebrating purity and light.", "traditions": "Lighting bonfires, fasting." },
      { "name": "Aurean Glitch Day", "month": 4, "day": 4, "description": "Celebrated by rebel hackers.", "traditions": "Digital mischief." },
      { "name": "Victory at Cerulean Pass", "month": 5, "day": 5, "description": "Decisive ancient battle.", "traditions": "Bonfires." },
      { "name": "The Great Gear Grind", "month": 5, "day": 20, "description": "Machine Orthodoxy celebration of industry and mechanism.", "traditions": "Oiling machinery, binary chanting." },
      { "name": "Efferd's Sun Zenith", "month": 6, "day": 21, "description": "Summer Solstice.", "traditions": "Feasts, Bonfires." },
      { "name": "Wario's Remembrance", "month": 6, "day": 25, "description": "Anniversary of Wario's supposed death.", "traditions": "Hiding valuables." },
      { "name": "Admin Zero's Protocol Day", "month": 7, "day": 7, "description": "System diagnostics.", "traditions": "Data-cleaning." },
      { "name": "Celestia's Iron Hoof Day", "month": 7, "day": 15, "description": "Celebration of Celestia's rule.", "traditions": "Military Parades." },
      { "name": "Festival of the Fallen", "month": 7, "day": 20, "description": "A Rakasha tradition celebrating life by honoring the dead with bonfires and bone chimes.", "traditions": "Bonfires, bone chimes, chanting." },
      { "name": "Starfall Eve", "month": 8, "day": 12, "description": "A night when the Star Spirits are closest to the world.", "traditions": "Wishing on stars, staying awake until dawn." },
      { "name": "Peach's Starfall Lament", "month": 9, "day": 20, "description": "Mourning for Princess Peach.", "traditions": "Lanterns." },
      { "name": "Blood Moon Hunt", "month": 10, "day": 13, "description": "Folkloric monster hunting day.", "traditions": "Lock-ins." },
      { "name": "Night of the Howl", "month": 10, "day": 28, "description": "Sacred night for the Moonfang Pack celebrating the primal hunt.", "traditions": "Howling at the moon, raw meat feasts." },
      { "name": "Warding Night", "month": 10, "day": 30, "description": "Reinforcing wards against dark creatures.", "traditions": "Salt lines." },
      { "name": "Remembrance of the First Guard", "month": 11, "day": 11, "description": "Honoring fallen soldiers.", "traditions": "Memorial visits." },
      { "name": "Winter's Veil Ball", "month": 12, "day": 20, "description": "Grand ball in the Capital.", "traditions": "Dancing." },
      { "name": "The Day of Silence", "month": 12, "day": 21, "description": "A solemn day for followers of the Cosmic Void/Nihilism.", "traditions": "Total silence, fasting." },
      { "name": "Doughnut Hole Festival", "month": 12, "day": 30, "description": "Celebrating the world's topology.", "traditions": "Doughnut cakes." }
    ]
  }
};

export const MAGICAL_WEATHER_EVENTS = [
    { name: "Chrono-Mists", icon: "⏳" }, { name: "Sunpetal Showers", icon: "🌸" }, { name: "Whispering Winds", icon: "🍃" },
    { name: "Gravity Flux", icon: "🎈" }, { name: "Aetheric Fog", icon: "🔮" }, { name: "Polychrome Rain", icon: "🌈" },
    { name: "Sorrow Storm", icon: "💧" }, { name: "Static Discharge", icon: "⚡️" }
];
