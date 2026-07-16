// calendar-data.js — NEW intuitive system (merged into Walupedia)
// This module now re-exports the unified calendar data from ./data/*.json
// and provides helper functions that match the new intuitive BF system.

let _months = null;
let _weekdays = null;
let _seasons = null;
let _current = null;
let _meta = null;

async function loadJson(p){
  try{ const r=await fetch(p,{cache:'no-cache'}); if(!r.ok) throw new Error(r.status); return await r.json(); }
  catch(e){ return null; }
}

// Try sync load if data embedded via global (for non-fetch env like file://)
function trySync(){
  try{
    // If Walupedia embedded data exists, use it? Otherwise fallback to hardcoded new data
    if(typeof DATA !== 'undefined' && DATA.calendarMonths) _months = DATA.calendarMonths;
  }catch{}
}

trySync();

// Default hardcoded new system (matches data/calendarMonths.json enriched)
const DEFAULT_MONTHS = [
  { name:"Firstlight", abbreviation:"Fst", ordinal:1, days:30, season:"Hoarfrost Winter", seasonAbbr:"Win", description:"Empire's Founding — thaw begins", color:"#ADD8E6", icon:"❄️" },
  { name:"Chillwind", abbreviation:"Chl", ordinal:2, days:30, season:"Hoarfrost Winter", seasonAbbr:"Win", description:"Deep winter", color:"#9cc9e0", icon:"🥶" },
  { name:"Veridia", abbreviation:"Ver", ordinal:3, days:30, season:"Verdant Spring", seasonAbbr:"Spr", description:"First green", color:"#90EE90", icon:"🌱" },
  { name:"Bloom", abbreviation:"Blo", ordinal:4, days:30, season:"Verdant Spring", seasonAbbr:"Spr", description:"Blooms", color:"#7dd87d", icon:"🌸" },
  { name:"Floria", abbreviation:"Flo", ordinal:5, days:30, season:"Verdant Spring", seasonAbbr:"Spr", description:"Trade roads", color:"#6bc96b", icon:"🌼" },
  { name:"Efferd", abbreviation:"Eff", ordinal:6, days:30, season:"Golden Summer", seasonAbbr:"Sum", description:"Early summer", color:"#FFE55C", icon:"☀️" },
  { name:"Highsun", abbreviation:"Hsn", ordinal:7, days:30, season:"Golden Summer", seasonAbbr:"Sum", description:"Midsummer zenith", color:"#FFD700", icon:"🔆" },
  { name:"Harvestide", abbreviation:"Hrv", ordinal:8, days:30, season:"Golden Summer", seasonAbbr:"Sum", description:"Harvest roads", color:"#FFC200", icon:"🌾" },
  { name:"Aethel", abbreviation:"Aet", ordinal:9, days:30, season:"Crimson Fall", seasonAbbr:"Fal", description:"Amber lore", color:"#FF8C69", icon:"🍂" },
  { name:"Darkmoon", abbreviation:"Drk", ordinal:10, days:30, season:"Crimson Fall", seasonAbbr:"Fal", description:"Nights lengthen", color:"#E07050", icon:"🌑" },
  { name:"Frostfall", abbreviation:"Frs", ordinal:11, days:30, season:"Crimson Fall", seasonAbbr:"Fal", description:"Last trade", color:"#CC6A50", icon:"🍁" },
  { name:"Deepwinter", abbreviation:"Dpw", ordinal:12, days:35, season:"Hoarfrost Winter", seasonAbbr:"Win", description:"35 days, silence", color:"#8ab4d0", icon:"❄️" }
];
const DEFAULT_WEEKDAYS = [
  { name:"Soldas", abbreviation:"Sol", ordinal:1, isRestDay:false, element:"Sun", description:"Sun day" },
  { name:"Lunadas", abbreviation:"Lun", ordinal:2, isRestDay:false, element:"Moon" },
  { name:"Terras", abbreviation:"Ter", ordinal:3, isRestDay:false, element:"Earth" },
  { name:"Mercurias", abbreviation:"Mer", ordinal:4, isRestDay:false, element:"Mercury" },
  { name:"Jovias", abbreviation:"Jov", ordinal:5, isRestDay:false, element:"Jupiter" },
  { name:"Venerias", abbreviation:"Ven", ordinal:6, isRestDay:true, element:"Venus", description:"Rest day — feasts" },
  { name:"Saturias", abbreviation:"Sat", ordinal:7, isRestDay:true, element:"Saturn", description:"Rest day — reflection" }
];
const DEFAULT_SEASONS = [
  { name:"Verdant Spring", abbreviation:"Spr", monthStart:3, monthEnd:5, color:"#90EE90", icon:"🌱", description:"Planting" },
  { name:"Golden Summer", abbreviation:"Sum", monthStart:6, monthEnd:8, color:"#FFD700", icon:"☀️" },
  { name:"Crimson Fall", abbreviation:"Fal", monthStart:9, monthEnd:11, color:"#FFA07A", icon:"🍂" },
  { name:"Hoarfrost Winter", abbreviation:"Win", monthStart:12, monthEnd:2, color:"#ADD8E6", icon:"❄️" }
];

export const CURRENT_GAME_DATE = { year:1040, monthIndex:7, day:18 };
export const CURRENT_GAME_TIME = { hour: new Date().getHours(), minute: new Date().getMinutes() };

export const MOON_PHASES = [
  { name:"The Hole (New)", lore:"Empty center", effect:"Stealth max", icon:"⚫" },
  { name:"Inner Rim (Waxing)", lore:"Inner curve", effect:"Senses sharpen", icon:"🌒" },
  { name:"The Glazed Face (Full)", lore:"Full torus", effect:"Feral power", icon:"🍩" },
  { name:"Outer Crust (Waning)", lore:"Light recedes", effect:"Calculated aggression", icon:"🌘" },
  { name:"The Bite (Darkening)", lore:"Shadow falls", effect:"Spirit communication", icon:"🌑" }
];

export const CALENDAR_DATA = {
  name:"Regal Empire Standard Calendar",
  description:"12 months, 365 days, 7 weekdays. BF counts UP toward present — 722 BF oldest, 1040 BF current. Larger year = more recent. Weekday = absoluteDay %7. Deepwinter 35 days.",
  version:"2.0.0",
  id:"regal-empire-standard-1040bf-intuitive",
  months:{ values: _months || DEFAULT_MONTHS },
  days:{ values: _weekdays || DEFAULT_WEEKDAYS },
  seasons:{ values: _seasons || DEFAULT_SEASONS },
  moons:{ values:[{ name:"Torrus (The Doughnut Moon)", cycleLength:28, phaseNames:MOON_PHASES.map(p=>p.name), offset:0, color:"#E0E0E0" }] },
  birthdays:[
    { name:"Archie Miser", month:1, day:1 },
    { name:"Markop Judi", month:7, day:15 },
    { name:"hjumpik", month:2, day:3 },
    { name:"Bowser", month:12, day:30 },
    { name:"Remi (FNG)", month:8, day:12 }
  ],
  holidays:{
    values:[
      { name:"Empire's Founding Day", month:1, day:1, description:"Establishment of Regal Empire." },
      { name:"First Bloom Festival", month:3, day:1, description:"First signs of spring." },
      { name:"Efferd's Sun Zenith", month:6, day:21, description:"Summer Solstice." },
      { name:"Celestia's Iron Hoof Day", month:7, day:15, description:"Military Parades." },
      { name:"Starfall Eve", month:8, day:12, description:"Star Spirits are closest." },
      { name:"Blood Moon Hunt", month:10, day:13, description:"Lock-ins." },
      { name:"Warding Night", month:10, day:30, description:"Reinforcing wards." },
      { name:"Winter's Veil Ball", month:12, day:20, description:"Grand ball." },
      { name:"Doughnut Hole Festival", month:12, day:30, description:"Topology celebration." }
    ]
  }
};

export const MAGICAL_WEATHER_EVENTS = [
  { name:"Chrono-Mists", icon:"⏳" }, { name:"Sunpetal Showers", icon:"🌸" },
  { name:"Gravity Flux", icon:"🎈" }, { name:"Aetheric Fog", icon:"🔮" }
];

// --- Intuitive helpers (new) ---
export function daysBeforeMonth(monthIndex){
  const months = CALENDAR_DATA.months.values;
  let sum=0; for(let i=0;i<monthIndex;i++) sum+= months[i]?.days||30; return sum;
}
export function absoluteDay(year, monthIndex, day){
  return year*365 + daysBeforeMonth(monthIndex) + (day-1);
}
export function weekdayForDate(year, monthIndex, day){
  const abs=absoluteDay(year, monthIndex, day);
  const idx=((abs%7)+7)%7;
  return CALENDAR_DATA.days.values[idx];
}
export function seasonForMonth(monthOrdinal){
  for(const s of CALENDAR_DATA.seasons.values){
    const st=s.monthStart, en=s.monthEnd;
    if(st<=en){ if(monthOrdinal>=st && monthOrdinal<=en) return s; }
    else { if(monthOrdinal>=st || monthOrdinal<=en) return s; }
  }
  return null;
}
export function formatFullDate(year, monthIndex, day){
  const m=CALENDAR_DATA.months.values[monthIndex];
  const wd=weekdayForDate(year, monthIndex, day);
  const season=seasonForMonth(m.ordinal);
  return `${m.name} ${day}, ${year} BF — ${wd.name}${wd.isRestDay?' (Rest)':''}${season?' — '+season.name:''}`;
}
export function getDynamicTimestamp(postDate){
  const minutesPerHour=60, minutesPerDay=24*60, minutesPerMonth=30*minutesPerDay, minutesPerYear=365*minutesPerDay;
  const ct=(CURRENT_GAME_DATE.year*minutesPerYear)+(CURRENT_GAME_DATE.monthIndex*minutesPerMonth)+(CURRENT_GAME_DATE.day*minutesPerDay)+(CURRENT_GAME_TIME.hour*minutesPerHour)+CURRENT_GAME_TIME.minute;
  const pY=postDate.year??CURRENT_GAME_DATE.year, pM=postDate.monthIndex??CURRENT_GAME_DATE.monthIndex, pD=postDate.day??CURRENT_GAME_DATE.day, pH=postDate.hour??12, pMin=postDate.minute??0;
  const pt=(pY*minutesPerYear)+(pM*minutesPerMonth)+(pD*minutesPerDay)+(pH*minutesPerHour)+pMin;
  const diff=ct-pt;
  if(diff<2) return "Just Now";
  if(diff<60) return `${diff} minutes ago`;
  const dh=Math.floor(diff/60); if(dh<24) return `${dh} hour${dh>1?'s':''} ago`;
  const dd=Math.floor(diff/1440); if(dd===1) return "Yesterday"; if(dd<30) return `${dd} days ago`;
  return `${CALENDAR_DATA.months.values[pM].name} ${pD}, ${pY}`;
}
export function generateWeatherForDay(year, monthIndex, day){
  const season=seasonForMonth(CALENDAR_DATA.months.values[monthIndex].ordinal);
  return { temp:"??°C", icon: season?.icon||"🌤️", desc: season?.name||"Mild", isMagical:false };
}
export const GUILD_HOLIDAYS = [
  { name:"Foundation of Stone", month:2, day:10, guild:"stonecarvers_brethren", description:"Dwarves celebrate laying first stone." }
];

// Minimal arc helpers to keep old imports working
export function getRumorsByArc(){ return []; }
export function getArcProgress(){ return 0; }
export function getArcStats(){ return null; }
