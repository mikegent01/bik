// calendar-data.js — Modular Calendar System v3.0
// Supports N calendars defined purely via JSON (data/calendars.json) — no code for 100 calendars.
// Year doesn't have to be 365 days. Weird days, cycles, leap rules supported.
// Keeps imperial as lore default.

let _calendarsCache = null;
let _currentDefaultId = 'imperial';

// Default hardcoded imperial for offline/sync fallback (matches data/calendarMonths.json)
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
  { name:"Soldas", abbreviation:"Sol", ordinal:1, isRestDay:false, element:"Sun" },
  { name:"Lunadas", abbreviation:"Lun", ordinal:2, isRestDay:false, element:"Moon" },
  { name:"Terras", abbreviation:"Ter", ordinal:3, isRestDay:false, element:"Earth" },
  { name:"Mercurias", abbreviation:"Mer", ordinal:4, isRestDay:false, element:"Mercury" },
  { name:"Jovias", abbreviation:"Jov", ordinal:5, isRestDay:false, element:"Jupiter" },
  { name:"Venerias", abbreviation:"Ven", ordinal:6, isRestDay:true, element:"Venus" },
  { name:"Saturias", abbreviation:"Sat", ordinal:7, isRestDay:true, element:"Saturn" }
];
const DEFAULT_SEASONS = [
  { name:"Verdant Spring", abbreviation:"Spr", monthStart:3, monthEnd:5, color:"#90EE90", icon:"🌱" },
  { name:"Golden Summer", abbreviation:"Sum", monthStart:6, monthEnd:8, color:"#FFD700", icon:"☀️" },
  { name:"Crimson Fall", abbreviation:"Fal", monthStart:9, monthEnd:11, color:"#FFA07A", icon:"🍂" },
  { name:"Hoarfrost Winter", abbreviation:"Win", monthStart:12, monthEnd:2, color:"#ADD8E6", icon:"❄️" }
];

function makeDefaultCalendar(){
  return {
    id:"imperial",
    name:"Regal Empire Standard",
    description:"Lore calendar: 12 months, 365 days, 7 weekdays. BF counts UP.",
    isDefault:true,
    isLore:true,
    localTo:["regal_empire"],
    months: DEFAULT_MONTHS,
    weekdays: DEFAULT_WEEKDAYS,
    seasons: DEFAULT_SEASONS,
    intercalaryDays: [],
    leapRule: null,
    cssTheme:{ accent:"#8a4bff", accent2:"#e0b400", bg:"#0d0a15", panel:"#1b1430", className:"cal-imperial" }
  };
}

export async function loadCalendars(){
  if(_calendarsCache) return _calendarsCache;
  try{
    const r=await fetch('../../data/calendars.json',{cache:'no-cache'});
    if(!r.ok) throw new Error('no calendars.json');
    const j=await r.json();
    _calendarsCache = j.calendars || [makeDefaultCalendar()];
    const def = _calendarsCache.find(c=>c.isDefault);
    if(def) _currentDefaultId = def.id;
    return _calendarsCache;
  }catch(e){
    // fallback if fetch fails: try DATA global or default
    try{
      if(typeof DATA!=='undefined' && DATA.calendars){ 
        _calendarsCache = DATA.calendars.calendars || DATA.calendars;
        return _calendarsCache;
      }
    }catch{}
    _calendarsCache = [makeDefaultCalendar()];
    return _calendarsCache;
  }
}

// Synchronous accessors (use cache if loaded, else default)
export function getCalendarsSync(){ return _calendarsCache || [makeDefaultCalendar()]; }
export function getCalendarSync(id){ const list=getCalendarsSync(); return list.find(c=>c.id===id) || list.find(c=>c.isDefault) || list[0]; }
export function getDefaultCalendarSync(){ return getCalendarSync(_currentDefaultId); }

export async function getCalendar(id){
  const list=await loadCalendars();
  return list.find(c=>c.id===id) || list.find(c=>c.isDefault) || list[0];
}
export async function listCalendars(){ return await loadCalendars(); }

// ---- Modular helpers that work for ANY calendar definition ----
export function isLeapYear(calendar, year){
  const rule=calendar.leapRule;
  if(!rule) return false;
  if(rule.type==='divisibleBy'){ return year % (rule.divisor||4)===0; }
  if(rule.type==='extraDay'){ // simple divisible
    if(rule.divisor) return year % rule.divisor===0;
    return false;
  }
  return false;
}

export function intercalaryDaysForYear(calendar, year){
  const out=[];
  for(const idd of (calendar.intercalaryDays||[])){
    const occ = (idd.occurs||'annual').toLowerCase();
    if(occ==='annual'){ out.push(idd); }
    else if(occ.startsWith('leap')){ // leap:4
      const parts=occ.split(':'); const div=parseInt(parts[1]||'4',10);
      if(year % div===0) out.push(idd);
    } else if(occ.startsWith('divisible')){
      const m=occ.match(/(\d+)/); const div=m?parseInt(m[1],10):4;
      if(year % div===0) out.push(idd);
    } else if(occ.startsWith('cycle')){
      const m=occ.match(/(\d+)/); const div=m?parseInt(m[1],10):4;
      if(year % div===0) out.push(idd);
    } else {
      // default annual
      out.push(idd);
    }
  }
  return out;
}

export function daysInYear(calendar, year){
  if(calendar.yearLength && !calendar.intercalaryDays?.some(d=>d.occurs!=='annual')){
    // if yearLength explicit and no variable intercalary, use it, but still account for leap
    let base = calendar.months.reduce((s,m)=>s+(m.days||0),0);
    let inter = intercalaryDaysForYear(calendar, year).reduce((s,d)=>s+(d.days||0),0);
    // if calendar has explicit yearLength that includes annual intercalary, use max
    if(calendar.yearLength) return Math.max(calendar.yearLength, base+inter);
    return base+inter;
  }
  let base = calendar.months.reduce((s,m)=>s+(m.days||0),0);
  let inter = intercalaryDaysForYear(calendar, year).reduce((s,d)=>s+(d.days||0),0);
  return base+inter;
}

export function daysBeforeMonth(calendar, year, monthIndex){
  let sum=0;
  for(let i=0;i<monthIndex;i++) sum+= calendar.months[i]?.days||0;
  // add intercalary days that occur afterMonth < next month ordinal
  const targetOrdinal = monthIndex+1; // 1-indexed month ordinal about to start
  for(const idd of intercalaryDaysForYear(calendar, year)){
    const after = idd.afterMonth??0;
    if(after < targetOrdinal) sum+= idd.days||0;
  }
  return sum;
}

// Sum of days in years before given year (handles variable year lengths)
export function daysBeforeYear(calendar, year){
  let total=0;
  // For performance, if all years same length, we can multiply
  // Check if yearLength stable: if no leap and no variable intercalary, use constant
  const hasVariable = calendar.leapRule || calendar.intercalaryDays?.some(d=>d.occurs!=='annual');
  if(!hasVariable && calendar.yearLength){
    return year * calendar.yearLength;
  }
  if(!hasVariable){
    const yLen = calendar.months.reduce((s,m)=>s+(m.days||0),0) + (calendar.intercalaryDays||[]).reduce((s,d)=>s+(d.days||0),0);
    return year * yLen;
  }
  // Variable: sum loop (still cheap for BF years 0-2000)
  for(let y=0;y<year;y++) total+= daysInYear(calendar, y);
  return total;
}

export function absoluteDay(calendar, year, monthIndex, day){
  return daysBeforeYear(calendar, year) + daysBeforeMonth(calendar, year, monthIndex) + (day-1);
}

export function weekdayForDate(calendar, year, monthIndex, day){
  const abs=absoluteDay(calendar, year, monthIndex, day);
  const weekdays=calendar.weekdays||DEFAULT_WEEKDAYS;
  const idx=((abs % weekdays.length)+weekdays.length)%weekdays.length;
  return weekdays[idx];
}

export function seasonForMonth(calendar, monthOrdinal){
  for(const s of (calendar.seasons||[])){
    const st=s.monthStart, en=s.monthEnd;
    if(st<=en){ if(monthOrdinal>=st && monthOrdinal<=en) return s; }
    else { if(monthOrdinal>=st || monthOrdinal<=en) return s; }
  }
  return null;
}

export function formatFullDate(calendar, year, monthIndex, day){
  const m=calendar.months[monthIndex];
  if(!m) return `${year}-${monthIndex}-${day}`;
  const wd=weekdayForDate(calendar, year, monthIndex, day);
  const season=seasonForMonth(calendar, m.ordinal);
  const rest=wd.isRestDay?' (Rest)':'';
  const weird= m.days && day>m.days ? ' (Weird)' : '';
  return `${m.name} ${day}, ${year} BF — ${wd.name}${rest}${season?' — '+season.name:''}${weird}`;
}

// Convert absolute day to date in a given calendar (for cross-calendar conversion)
export function dateFromAbsolute(calendar, absDay){
  // Find year
  let y=0;
  let remaining=absDay;
  // Estimate year by average length
  const avgLen = calendar.yearLength || 365;
  y = Math.floor(remaining/avgLen);
  // Adjust
  while(daysBeforeYear(calendar, y+1) <= absDay) y++;
  while(daysBeforeYear(calendar, y) > absDay) y--;
  const dayOfYear = absDay - daysBeforeYear(calendar, y);
  // Now find month and intercalary
  let monthIndex=0;
  let dayCounter=dayOfYear;
  const interByAfter = {};
  for(const idd of intercalaryDaysForYear(calendar, y)){
    const after=idd.afterMonth||0;
    if(!interByAfter[after]) interByAfter[after]=[];
    interByAfter[after].push(idd);
  }
  // intercalary before first month
  if(interByAfter[0]){
    for(const idd of interByAfter[0]){
      if(dayCounter < idd.days) return { year:y, monthIndex:-1, day:dayCounter+1, isIntercalary:true, intercalary:idd };
      dayCounter-=idd.days;
    }
  }
  for(let mi=0; mi<calendar.months.length; mi++){
    const mdays = calendar.months[mi].days;
    if(dayCounter < mdays){
      return { year:y, monthIndex:mi, day:dayCounter+1, isIntercalary:false };
    }
    dayCounter-=mdays;
    const after = mi+1;
    if(interByAfter[after]){
      for(const idd of interByAfter[after]){
        if(dayCounter < idd.days) return { year:y, monthIndex:mi, day:dayCounter+1, isIntercalary:true, intercalary:idd, afterMonth:after };
        dayCounter-=idd.days;
      }
    }
  }
  // If still remaining, it's after last month intercalary already handled? Might be overflow
  return { year:y, monthIndex:calendar.months.length-1, day:calendar.months[calendar.months.length-1].days, isIntercalary:false };
}

// ---- Backward compat for old imperial-only code ----
export const CURRENT_GAME_DATE = { year:1040, monthIndex:7, day:18 };
export const CURRENT_GAME_TIME = { hour: new Date().getHours(), minute: new Date().getMinutes() };
// Shared magical weather definitions. Keep this export in the root calendar module because
// login.js and several page modules import it directly (the game/ calendar is a separate
// implementation used by the newer game view).
export const MAGICAL_WEATHER_EVENTS = [
  { name: 'Chrono-Mists', icon: '⏳' },
  { name: 'Sunpetal Showers', icon: '🌸' },
  { name: 'Whispering Winds', icon: '🍃' },
  { name: 'Gravity Flux', icon: '🎈' },
  { name: 'Aetheric Fog', icon: '🔮' },
  { name: 'Polychrome Rain', icon: '🌈' },
  { name: 'Sorrow Storm', icon: '💧' },
  { name: 'Static Discharge', icon: '⚡️' }
];

export const MOON_PHASES = [
  { name:"The Hole (New)", icon:"⚫" },
  { name:"Inner Rim (Waxing)", icon:"🌒" },
  { name:"The Glazed Face (Full)", icon:"🍩" },
  { name:"Outer Crust (Waning)", icon:"🌘" },
  { name:"The Bite (Darkening)", icon:"🌑" }
];

export const CALENDAR_DATA = {
  name:"Regal Empire Standard Calendar",
  description:"12 months, 365 days, 7 weekdays. BF counts UP.",
  version:"3.0.0-modular",
  id:"regal-empire-standard",
  months:{ values: DEFAULT_MONTHS },
  days:{ values: DEFAULT_WEEKDAYS },
  seasons:{ values: DEFAULT_SEASONS },
  moons:{ values:[{ name:"Torrus", cycleLength:28, phaseNames:MOON_PHASES.map(p=>p.name) }] },
  holidays:{ values:[] }
};

export function daysBeforeMonthDefault(monthIndex){ return daysBeforeMonth(getDefaultCalendarSync(), 0, monthIndex); }
export function absoluteDayDefault(year, monthIndex, day){ return absoluteDay(getDefaultCalendarSync(), year, monthIndex, day); }
export function weekdayForDateDefault(year, monthIndex, day){ return weekdayForDate(getDefaultCalendarSync(), year, monthIndex, day); }
export function seasonForMonthDefault(monthOrdinal){ return seasonForMonth(getDefaultCalendarSync(), monthOrdinal); }
export function formatFullDateDefault(year, monthIndex, day){ return formatFullDate(getDefaultCalendarSync(), year, monthIndex, day); }

// Old helpers (keep)
export function daysBeforeMonthOld(monthIndex){ const months=CALENDAR_DATA.months.values; let sum=0; for(let i=0;i<monthIndex;i++) sum+=months[i]?.days||30; return sum; }
export function absoluteDayOld(year, monthIndex, day){ return year*365 + daysBeforeMonthOld(monthIndex) + (day-1); }
export function weekdayForDateOld(year, monthIndex, day){ const abs=absoluteDayOld(year, monthIndex, day); const idx=((abs%7)+7)%7; return CALENDAR_DATA.days.values[idx]; }
export function seasonForMonthOld(monthOrdinal){ for(const s of CALENDAR_DATA.seasons.values){ const st=s.monthStart, en=s.monthEnd; if(st<=en){ if(monthOrdinal>=st && monthOrdinal<=en) return s; } else { if(monthOrdinal>=st || monthOrdinal<=en) return s; } } return null; }
export function formatFullDateOld(year, monthIndex, day){ const m=CALENDAR_DATA.months.values[monthIndex]; const wd=weekdayForDateOld(year, monthIndex, day); const season=seasonForMonthOld(m.ordinal); return `${m.name} ${day}, ${year} BF — ${wd.name}${wd.isRestDay?' (Rest)':''}${season?' — '+season.name:''}`; }

// Wrapper functions that use default calendar for backward compat
export function daysBeforeMonthCompat(monthIndex){ return daysBeforeMonth(getDefaultCalendarSync(), 0, monthIndex); }
export { daysBeforeMonthCompat as daysBeforeMonthDefaultAlias };

// For compatibility, export old names as modular default
export const daysBeforeMonthModular = daysBeforeMonth;
export const absoluteDayModular = absoluteDay;

export function getDynamicTimestamp(postDate){
  const mpy=365*24*60, mpm=30*24*60, mpd=24*60;
  const ct=(CURRENT_GAME_DATE.year*mpy)+(CURRENT_GAME_DATE.monthIndex*mpm)+(CURRENT_GAME_DATE.day*mpd);
  const pY=postDate.year??CURRENT_GAME_DATE.year, pM=postDate.monthIndex??CURRENT_GAME_DATE.monthIndex, pD=postDate.day??CURRENT_GAME_DATE.day;
  const pt=(pY*mpy)+(pM*mpm)+(pD*mpd);
  const diffMin = Math.floor((ct-pt)/1);
  if(diffMin<2) return "Just Now";
  if(diffMin<60) return `${diffMin} minutes ago`;
  const dh=Math.floor(diffMin/60); if(dh<24) return `${dh} hour${dh>1?'s':''} ago`;
  const dd=Math.floor(diffMin/1440); if(dd<30) return `${dd} days ago`;
  return `${DEFAULT_MONTHS[pM]?.name||'Month'} ${pD}, ${pY}`;
}
export const GUILD_HOLIDAYS = [];
export function getRumorsByArc(){ return []; }
export function getArcProgress(){ return 0; }
export function getArcStats(){ return null; }
export function generateWeatherForDay(date){ return { name: 'Clear', temp: 70, description: 'Mild and clear.' }; }
