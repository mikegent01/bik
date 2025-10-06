
export const CURRENT_GAME_DATE = {
    year: 1040,
    monthIndex: 6, // 0-indexed for Highsun (ordinal 7)
    day: 15
};


export const CALENDAR_DATA = {
  "name": "Regal Empire Standard Calendar",
  "description": "The official calendar of the Regal Empire, marking years since its founding (Imperial Era - IE) in what was declared Year 0. Many cultures also use the prophetic 'Before Fabian' (BF) calendar, a countdown to a prophesied king's arrival. The current year is 1040 IE, which is also 1 BF.",
  "version": "1.1.0",
  "path": "",
  "id": "regal-empire-standard-1040bf",
  "note": "This calendar reflects the state of the Doughnut World around 1040 BF. The 'Current Year' in Foundry VTT should be set to 1040. The 'BF' designation is for lore context.",
  "years": {
    "yearZero": 0,
    "firstWeekday": 0,
    "leapYear": {
      "leapStart": 4,
      "leapInterval": 4
    }
  },
  "months": {
    "values": [
      {
        "name": "Firstlight",
        "abbreviation": "Fst",
        "ordinal": 1,
        "days": 30,
        "leapDays": 30
      },
      {
        "name": "Chillwind",
        "abbreviation": "Chl",
        "ordinal": 2,
        "days": 30,
        "leapDays": 30
      },
      {
        "name": "Veridia",
        "abbreviation": "Ver",
        "ordinal": 3,
        "days": 30,
        "leapDays": 30
      },
      {
        "name": "Bloom",
        "abbreviation": "Blo",
        "ordinal": 4,
        "days": 30,
        "leapDays": 30
      },
      {
        "name": "Floria",
        "abbreviation": "Flo",
        "ordinal": 5,
        "days": 30,
        "leapDays": 30
      },
      {
        "name": "Efferd",
        "abbreviation": "Eff",
        "ordinal": 6,
        "days": 30,
        "leapDays": 30
      },
      {
        "name": "Highsun",
        "abbreviation": "Hsn",
        "ordinal": 7,
        "days": 30,
        "leapDays": 30
      },
      {
        "name": "Harvestide",
        "abbreviation": "Hrv",
        "ordinal": 8,
        "days": 30,
        "leapDays": 30
      },
      {
        "name": "Aethel",
        "abbreviation": "Aet",
        "ordinal": 9,
        "days": 30,
        "leapDays": 30
      },
      {
        "name": "Darkmoon",
        "abbreviation": "Drk",
        "ordinal": 10,
        "days": 30,
        "leapDays": 30
      },
      {
        "name": "Frostfall",
        "abbreviation": "Frs",
        "ordinal": 11,
        "days": 30,
        "leapDays": 30
      },
      {
        "name": "Deepwinter",
        "abbreviation": "Dpw",
        "ordinal": 12,
        "days": 35,
        "leapDays": 36
      }
    ]
  },
  "days": {
    "values": [
      {
        "name": "Soldas",
        "abbreviation": "Sol",
        "ordinal": 1
      },
      {
        "name": "Lunadas",
        "abbreviation": "Lun",
        "ordinal": 2
      },
      {
        "name": "Terras",
        "abbreviation": "Ter",
        "ordinal": 3
      },
      {
        "name": "Mercurias",
        "abbreviation": "Mer",
        "ordinal": 4
      },
      {
        "name": "Jovias",
        "abbreviation": "Jov",
        "ordinal": 5
      },
      {
        "name": "Venerias",
        "abbreviation": "Ven",
        "ordinal": 6,
        "isRestDay": true
      },
      {
        "name": "Saturias",
        "abbreviation": "Sat",
        "ordinal": 7,
        "isRestDay": true
      }
    ],
    "daysPerYear": 365,
    "hoursPerDay": 24,
    "minutesPerHour": 60,
    "secondsPerMinute": 60
  },
  "seasons": {
    "values": [
      {
        "name": "Verdant Spring",
        "abbreviation": "Spr",
        "monthStart": 3,
        "monthEnd": 5,
        "dayStart": 1,
        "dayEnd": 30,
        "color": "#90EE90"
      },
      {
        "name": "Golden Summer",
        "abbreviation": "Sum",
        "monthStart": 6,
        "monthEnd": 8,
        "dayStart": 1,
        "dayEnd": 30,
        "color": "#FFD700"
      },
      {
        "name": "Crimson Fall",
        "abbreviation": "Fal",
        "monthStart": 9,
        "monthEnd": 11,
        "dayStart": 1,
        "dayEnd": 30,
        "color": "#FFA07A"
      },
      {
        "name": "Hoarfrost Winter",
        "abbreviation": "Win",
        "monthStart": 12,
        "monthEnd": 2,
        "dayStart": 1,
        "dayEnd": 30,
        "color": "#ADD8E6"
      }
    ]
  },
  "moons": {
    "values": [
      {
        "name": "Luna Imperia",
        "cycleLength": 28,
        "phaseNames": [
          "Imperial New Moon",
          "Waxing Imperial Crescent",
          "First Imperial Quarter",
          "Waxing Imperial Gibbous",
          "Full Imperial Moon",
          "Waning Imperial Gibbous",
          "Last Imperial Quarter",
          "Waning Imperial Crescent"
        ],
        "offset": 0,
        "color": "#E0E0E0"
      },
      {
        "name": "Crimson Eye",
        "cycleLength": 40,
        "phaseNames": [
          "Eye Hidden",
          "Eye Awakening",
          "Eye Gazing",
          "Eye Fading"
        ],
        "offset": 15,
        "color": "#DC143C"
      },
      {
        "name": "Scintilla",
        "cycleLength": 73.5,
        "phaseNames": [
          "Veiled Spark",
          "First Glimmer",
          "Half Brilliance",
          "Full Scintillation",
          "Fading Gleam",
          "Last Flicker"
        ],
        "offset": 30,
        "color": "#FFFACD"
      }
    ]
  },
  "holidays": {
    "values": [
      {
        "name": "Celestia's Iron Hoof Day (Equestria - State)",
        "month": 7,
        "day": 15,
        "description": "In Equestria, a state-mandated holiday celebrating Queen Celestia's absolute autocratic regime (BF 950) and pony supremacy.",
        "traditions": "A highly controlled celebration featuring parades of the Royal Guard. All citizens are required to attend and show deference. Non-ponies are encouraged to stay indoors."
      },
      {
        "name": "Empire's Founding Day",
        "month": 1,
        "day": 1,
        "description": "Regal Empire Holiday: Commemorates the establishment of the Regal Empire 1040 years ago. A day of solemn parades and declarations of Imperial strength and order.",
        "traditions": "Citizens are expected to display Imperial flags. Military parades showcase the might of the Iron Legion, and provincial governors renew their oaths of fealty to the Emperor. A day of patriotism and state-mandated celebration."
      },
      {
        "name": "First Hum Imperial Recognition",
        "month": 1,
        "day": 2,
        "description": "Regal Empire Holiday: The Empire officially acknowledges the cosmic significance of the First Hum (~8000 BF), interpreting it as a divine mandate for order.",
        "traditions": "A day of quiet contemplation. Imperial scholars give public lectures on cosmology and destiny, framing the Empire's existence as the inevitable and correct outcome of cosmic law."
      },
      {
        "name": "Zootopian Founders' Day",
        "month": 1,
        "day": 25,
        "description": "Zootopia celebrates its founding ideals of inter-species equality and justice, recalling Mayor Hopps' impactful leadership (BF 970).",
        "traditions": "Parades feature floats from every district, from Tundratown to Sahara Square. The day is marked by inter-species feasts and community service projects aimed at fostering unity."
      },
      {
        "name": "Internet Stability Jubilee (Internet Dimension)",
        "month": 2,
        "day": 1,
        "description": "Marks the stabilization of The Internet dimension (BF 900), celebrated with virtual fireworks and data-feasts.",
        "traditions": "Avatars gather in virtual plazas for digital firework displays. It's a day of 'data-feasting', where users exchange rare files and information. Network-wide games and competitions are held."
      },
      {
        "name": "Midlands' King's Coronation Day (Alaric)",
        "month": 2,
        "day": 5,
        "description": "In the Midlands, marks King Alaric's enigmatic ascent to power (BF 910). Celebrated with cautious fealty or quiet apprehension.",
        "traditions": "Nobles offer public tribute to the King, while commoners attend state-sponsored feasts. Privately, many use the day to reinforce wards on their homes and tell cautionary tales."
      },
      {
        "name": "The Engineer's Guild Accord",
        "month": 2,
        "day": 18,
        "description": "Regal Empire Holiday: Marks the historic integration of the Grand Engineer's Guild into the Imperial structure, heralding an age of technological advancement under Imperial guidance.",
        "traditions": "Showcases of new magitek inventions are held in major cities. Young inventors and artificers compete for Imperial grants and recognition from the High Artificer."
      },
      {
        "name": "First Bloom Festival",
        "month": 3,
        "day": 1,
        "description": "Celebrates the first signs of spring, with planting ceremonies and colorful decorations across many cultures.",
        "traditions": "Communities gather to plant the first seeds of the season in a ceremonial garden. Homes are decorated with colorful ribbons and flowers. Children exchange painted eggs as symbols of new life."
      },
      {
        "name": "Triple Moon Survival Day (Triple Moon World)",
        "month": 3,
        "day": 3,
        "description": "A grim remembrance in the Triple Moon World of Warlord Luna's consolidation of power (BF 930) and the harsh realities of their world.",
        "traditions": "A solemn day of fasting and sparring. The people honor those who fell during the Unification Wars, and warriors engage in ritual combat to prove their strength to survive another cycle."
      },
      {
        "name": "Day of Imperial Law",
        "month": 3,
        "day": 10,
        "description": "Regal Empire Holiday: Marks the codification of the Grand Imperial Legal Statutes. A day for reflecting on justice and order.",
        "traditions": "Imperial Judges hold open court to settle minor disputes, demonstrating the reach and fairness of Imperial law. Copies of the statutes are publicly displayed. A day of amnesty for minor infractions is often declared."
      },
      {
        "name": "Equinox of Imperial Balance (Spring)",
        "month": 3,
        "day": 20,
        "description": "Regal Empire Holiday: Marks the spring equinox, a day of Imperial rituals focused on balance, renewal, and orderly growth.",
        "traditions": "Imperial priests perform rituals at sunrise and sunset to mark the precise moment of balance. Citizens are encouraged to balance their accounts, settle debts, and make plans for the coming half-year."
      },
      {
        "name": "Aurean Glitch Day (Aurea - Rebels)",
        "month": 4,
        "day": 4,
        "description": "Celebrated by rebel hackers in Aurea, 'Glitches' or 'Static Phantoms', marking their first major disruption against the Technocratic Oligarchy (BF 980).",
        "traditions": "A day of digital mischief. Rebels launch harmless but disruptive hacks against the state, release encrypted messages of hope, and hold secret virtual gatherings to plan future operations."
      },
      {
        "name": "Naval Ascendancy Day",
        "month": 4,
        "day": 20,
        "description": "Regal Empire Holiday: Celebrates the historical dominance of the Imperial Navy, built on principles from the Naval Republic's establishment (BF 890).",
        "traditions": "Grand naval reviews are held in major ports. Model ship competitions are popular, and sailors on shore leave fill the taverns with sea shanties celebrating Imperial victories."
      },
      {
        "name": "Victory at Cerulean Pass",
        "month": 5,
        "day": 5,
        "description": "Regal Empire Holiday: Remembers a decisive ancient battle that secured the Empire's northern borders.",
        "traditions": "Veterans of the Northern Campaigns are honored. In the north, communities hold feasts and light bonfires along the mountain passes to commemorate the victory."
      },
      {
        "name": "Imperial Proclamation of Order",
        "month": 5,
        "day": 15,
        "description": "Regal Empire Holiday: A day where new Imperial edicts are often announced, reinforcing the Empire's presence.",
        "traditions": "Town criers and Imperial heralds read new proclamations in every town square. It is a day of civic duty, where citizens are reminded of their obligations to the state."
      },
      {
        "name": "Pokémon Champion's Gauntlet",
        "month": 5,
        "day": 20,
        "description": "Across Pokémon regions, celebrates the spirit of competition, inspired by Champion Carter's dominance (BF 1039).",
        "traditions": "Local Pokémon tournaments are held for all ages. It is a day of friendly rivalry, where trainers test their bonds with their partners and celebrate the spirit of the challenge."
      },
      {
        "name": "L'Eclaire Reform Celebration (L'Eclaire)",
        "month": 6,
        "day": 10,
        "description": "Ruler Doug's populist reforms (BF 940) are celebrated in L'Eclaire, masking his true ambitions.",
        "traditions": "A massive public festival with free food and entertainment, funded by the state. Speeches praise the generosity of Ruler Doug, reinforcing his image as a man of the people."
      },
      {
        "name": "Efferd's Sun Zenith Festival (Summer Solstice)",
        "month": 6,
        "day": 21,
        "description": "Regal Empire Holiday: Imperial celebration of the longest day, symbolizing enduring Imperial light. Named in honor of the month Efferd.",
        "traditions": "Huge bonfires are lit on hilltops, intended to remain burning from sunrise to sunset. A day of feasts, games, and celebration of the Empire's peak power and influence."
      },
      {
        "name": "Wario's Passing Remembrance",
        "month": 6,
        "day": 25,
        "description": "Marks the anniversary of Wario's supposed death and funeral (Efferd 25th, 1040 BF). A day of varied reactions from relief to suspicion.",
        "traditions": "A strange mix of traditions. Some hold solemn vigils, others throw parties. In Diamond City, it's customary to hide one's valuables, just in case."
      },
      {
        "name": "Grand Imperial Tournament Day",
        "month": 7,
        "day": 1,
        "description": "Regal Empire Holiday: Showcases the martial prowess of the Empire's finest. Feasts and grand competitions are held.",
        "traditions": "Knights and champions from across the Empire compete in jousting, archery, and melee competitions for the Emperor's favor. It's a grand spectacle of martial skill."
      },
      {
        "name": "Admin Zero's Protocol Day (Internet Dimension)",
        "month": 7,
        "day": 7,
        "description": "Commemorates Admin Zero's emergence as overseer of The Internet's digital federation (BF 1010), a day of system diagnostics and protocol reviews.",
        "traditions": "All systems undergo a 'protocol purity' check. Users are encouraged to defragment their personal data stores and update their security protocols. It is considered a day of digital renewal."
      },
      {
        "name": "The Great Orrery's Completion",
        "month": 7,
        "day": 28,
        "description": "Regal Empire Holiday: Celebrates the unveiling of the Grand Imperial Orrery, a marvel mapping the known cosmos.",
        "traditions": "Planetariums and observatories are opened to the public. Scholars debate the nature of the cosmos, always concluding with the Empire's central place within it."
      },
      {
        "name": "Day of the Imperial Scribes",
        "month": 8,
        "day": 1,
        "description": "Regal Empire Holiday: Honors the work of Imperial Scribes in maintaining records, history, and bureaucratic efficiency.",
        "traditions": "A quiet holiday. Libraries and archives are celebrated. It is customary to give a gift of fine ink or paper to a local scribe or bureaucrat as a sign of respect for their work."
      },
      {
        "name": "Archon Lumine's Rally (Teyvat)",
        "month": 8,
        "day": 12,
        "description": "In Teyvat, commemorates Archon Lumine's inspiring rally that united diverse factions during the Archon War (BF 1020).",
        "traditions": "A festival of unity. Representatives from Liyue, Mondstadt, and other nations gather for cultural exchanges, shared feasts, and retellings of the Archon's heroic deeds."
      },
      {
        "name": "Harvest Unity Proclamation",
        "month": 8,
        "day": 15,
        "description": "Regal Empire Holiday: Recognizes unified efforts in securing the harvest, emphasizing Imperial provision.",
        "traditions": "The first fruits of the harvest are ceremonially presented to the local Imperial governor. It's a time of thanks and reinforces the idea that the Empire provides for its people."
      },
      {
        "name": "Starlight Concordat Day",
        "month": 9,
        "day": 2,
        "description": "Regal Empire Holiday: Celebrates an ancient treaty that brought several star-faring factions under Imperial influence.",
        "traditions": "Stargazing is a common activity. Imperial astronomers give public demonstrations, pointing out the constellations of the signatory factions, now part of the Imperial whole."
      },
      {
        "name": "Peach's Starfall Lament",
        "month": 9,
        "day": 20,
        "description": "A solemn day of mourning for Princess Peach, assassinated during the Star Festival (BF 1035). Lanterns are lit in her memory.",
        "traditions": "In the Mushroom Kingdom, no business is conducted. Toads gather at dusk to release paper lanterns into the sky, each one carrying a wish for the late Princess's peace."
      },
      {
        "name": "Equinox of Imperial Balance (Autumn)",
        "month": 9,
        "day": 22,
        "description": "Regal Empire Holiday: Marks the autumn equinox, a time for Imperial reflection and preparation.",
        "traditions": "Similar to the spring equinox, this is a day for balancing accounts and preparing for the coming winter. It is a time for introspection and planning, overseen by Imperial ritual."
      },
      {
        "name": "Explorer Drake's Imperial Charter",
        "month": 10,
        "day": 5,
        "description": "Regal Empire Holiday: Commemorates the Imperial charter granted to Explorer Drake (related to voyage BF 1000).",
        "traditions": "The Explorer's Guild holds its annual induction ceremony. It's a day that celebrates discovery and the expansion of the Empire's knowledge of the world."
      },
      {
        "name": "The Blood Moon Hunt (Midlands)",
        "month": 10,
        "day": 13,
        "description": "A folkloric day in the Midlands marking a period of heightened vampire and werewolf activity, though actual hunts vary with the Crimson Eye moon.",
        "traditions": "Communities hold a 'Lock-In', where everyone gathers in a fortified tavern or town hall. Elders tell stories of past hunts and supernatural encounters until dawn breaks."
      },
      {
        "name": "Faerun's Grand Design Unveiling",
        "month": 10,
        "day": 28,
        "description": "In Faerun, marks the controversial day High Magus Elion unveiled his plan for a magical utopia (BF 1038).",
        "traditions": "The day is marked by heated debates in magical academies. Supporters celebrate with displays of powerful magic, while detractors hold quiet vigils, fearing the plan's hubris."
      },
      {
        "name": "Warding Night (Midlands)",
        "month": 10,
        "day": 30,
        "description": "A night of heightened vigilance in the Midlands, where communities reinforce wards against dark creatures on the eve of Darkmoon's peak.",
        "traditions": "Families and communities work together to renew protective runes on doors and windows. Children are often tasked with placing salt lines. It is a night of communal defense."
      },
      {
        "name": "Last Leaf of Autumn",
        "month": 11,
        "day": 1,
        "description": "A day of reflection as autumn ends, with communities gathering for bonfires and storytelling.",
        "traditions": "It is customary to find the last colorful leaf on a tree and preserve it. In the evening, communities gather around large bonfires, sharing stories and preparing for the coming winter."
      },
      {
        "name": "Helvetian Mountain Vigil (Helvetians / World Beyond)",
        "month": 11,
        "day": 5,
        "description": "The Helvetian nation holds a solemn vigil, remembering their stand against the World Beyond Empire (BF 990).",
        "traditions": "A day of silence and remembrance. The Helvetians light signal fires on the mountain peaks that once served as their line of defense, honoring the memory of their ancestors' defiance."
      },
      {
        "name": "Griffin's Spark Day (Equestrian Dissidents)",
        "month": 11,
        "day": 8,
        "description": "Secretly observed by Equestrian dissidents, marking the creation of their hidden tech network (BF 955).",
        "traditions": "Observed in secret basements and hidden workshops. Dissidents exchange coded messages and share small technological creations, reaffirming their commitment to a future free from autocracy."
      },
      {
        "name": "Remembrance of the First Guard",
        "month": 11,
        "day": 11,
        "description": "Regal Empire Holiday: A solemn day honoring the sacrifices of the Empire's first Imperial Guard legions.",
        "traditions": "Citizens visit memorials and leave offerings for the fallen. The Silent Service uses the day's somber mood to quietly identify and monitor potential dissidents."
      },
      {
        "name": "Day of the Unbroken Seal",
        "month": 11,
        "day": 25,
        "description": "Regal Empire Holiday: Celebrates the enduring strength of Imperial borders and protective magical seals.",
        "traditions": "Imperial mages publicly recharge major defensive wards around cities. It is a display of magical might, intended to reassure citizens and deter enemies."
      },
      {
        "name": "Imperial Peace Day",
        "month": 12,
        "day": 1,
        "description": "Regal Empire Holiday: Decreed to celebrate 'Pax Imperialis' in core territories, often with skepticism in outer regions.",
        "traditions": "In the capital, it's a day of feasts. In the outer territories, it's often marked by protests or quiet defiance against what they see as an imposed, not earned, peace."
      },
      {
        "name": "Winter's Veil Imperial Ball",
        "month": 12,
        "day": 20,
        "description": "Regal Empire Holiday: A grand ball in the Imperial Capital, marking the start of the high society winter season.",
        "traditions": "The height of the social calendar for the Imperial elite. A night of lavish gowns, political maneuvering, and extravagant displays of wealth."
      },
      {
        "name": "Deepwinter's Eve Gala",
        "month": 12,
        "day": 24,
        "description": "A widespread feast and celebration on the eve of Deepwinter's extended period.",
        "traditions": "Families and friends gather for a grand feast, exchanging gifts and enjoying the warmth of community before the longest, coldest part of winter sets in."
      },
      {
        "name": "The Doughnut Hole Festival",
        "month": 12,
        "day": 30,
        "description": "A quirky, world-wide festival celebrating the unique topology of their world with doughnut-shaped cakes.",
        "traditions": "Baking competitions for the most elaborate doughnut-shaped cakes are the main event. It's a day of lighthearted fun and feasting before the year's end."
      },
      {
        "name": "Day of Doughnut Contemplation",
        "month": 12,
        "day": 35,
        "description": "The last day of a standard year, a time for quiet reflection on the cyclical nature of the Doughnut World.",
        "traditions": "A day for personal reflection. Many people walk a circular path, contemplating the year that has passed and the year to come, embracing the cyclical nature of their world."
      }
    ]
  }
};

export const MAGICAL_WEATHER_EVENTS = [
    { name: "Chrono-Mists", icon: "⏳" }, { name: "Sunpetal Showers", icon: "🌸" }, { name: "Whispering Winds", icon: "🍃" },
    { name: "Gravity Flux", icon: "🎈" }, { name: "Aetheric Fog", icon: "🔮" }, { name: "Polychrome Rain", icon: "🌈" },
    { name: "Sorrow Storm", icon: "💧" }, { name: "Static Discharge", icon: "⚡️" }, { name: "Geode Hail", icon: "💎" },
    { name: "Sporefall", icon: "🍄" }, { name: "Starlight Drizzle", icon: "✨" }, { name: "Glimmering Heat Haze", icon: "🔥" },
    { name: "Verdant Overgrowth", icon: "🌱" }, { name: "Silent Snow", icon: "🤫" }, { name: "Echoing Thunder", icon: "🗣️" },
    { name: "Obsidian Sleet", icon: "🌑" }, { name: "Memory Dew", icon: "🧠" }, { name: "Celestial Aurora", icon: "🌌" },
    { name: "Molten Rain", icon: "🌋" }, { name: "Phantom Breeze", icon: "👻" }, { name: "Iron Dust Devil", icon: "⚙️" },
    { name: "Joyful Zephyr", icon: "😊" }, { name: "Crystalline Frost", icon: "❄️" }, { name: "Temporal Stutter", icon: "⏩" },
    { name: "Soothing Smog", icon: "💨" }, { name: "Liquid Moonlight", icon: "🌕" }, { name: "Honeyed Drizzle", icon: "🍯" },
    { name: "Prismatic Fog", icon: "💠" }, { name: "Arcane Geysers", icon: "💧" }, { name: "Shadowfall", icon: "🦇" },
    { name: "Music of the Spheres", icon: "🎶" }, { name: "Petal Storm", icon: "🌹" }, { name: "Bloodmoon Haze", icon: "🩸" },
    { name: "Gravechill", icon: "💀" }, { name: "Slime Rain", icon: "🧪" }, { name: "Featherfall", icon: "🕊️" },
    { name: "Ink Storm", icon: "✒️" }, { name: "Mirrorsheen", icon: "🔍" }, { name: "Gaseous Bloom", icon: "💨" },
    { name: "Dream Weave", icon: "🕸️" }, { name: "Harmonic Convergence", icon: "🌀" }, { name: "Soulfire Embers", icon: "🔥" },
    { name: "Chromatic Clouds", icon: "🎨" }, { name: "Time-Lapse Blossoms", icon: "🕰️" }, { name: "Ethereal Mists", icon: "🌫️" },
    { name: "Bubbling Puddles", icon: "🫧" }, { name: "Scent of the Void", icon: "🌌" }, { name: "Whisperwood Pollen", icon: "🌲" },
    { name: "Inverse Rainbows", icon: "🙃" }, { name: "Falling Stars", icon: "🌠" }
];