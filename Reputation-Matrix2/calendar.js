// calendar.js — NEW intuitive system (merged into Walupedia)
// Old heavy logic (research, quests, plagues, rumours) removed.
// Now uses only CALENDAR_DATA from ./calendar-data.js and data/*.json via fetch.
// If you land here via old calendar.html, you'll be warned that calendar moved to Waluipedia.

import { CALENDAR_DATA, CURRENT_GAME_DATE, seasonForMonth, weekdayForDate, absoluteDay, daysBeforeMonth, formatFullDate } from './calendar-data.js';
import { playSound } from './common.js';

const CalendarState = {
  viewDate: { year: CURRENT_GAME_DATE.year, monthIndex: CURRENT_GAME_DATE.monthIndex },
  selectedDate: { ...CURRENT_GAME_DATE },
  filters: { holidays:true, events:true, battles:true }
};

let EVENTS_CACHE = [];
let BATTLES_CACHE = [];
let TRIALS_CACHE = [];
let MAJOR_CACHE = [];

async function loadDataJson(p){ try{ const r=await fetch(p,{cache:'no-cache'}); if(!r.ok) throw 0; return await r.json(); }catch{ return []; } }

async function preload(){
  EVENTS_CACHE = await loadDataJson('./data/events.json');
  BATTLES_CACHE = await loadDataJson('./data/battles.json');
  TRIALS_CACHE = await loadDataJson('./data/trials.json');
  MAJOR_CACHE = await loadDataJson('./data/majorBattles.json');
}

// Simple parsers (reuse BF logic)
function parseYear(s){ if(!s) return null; const m=String(s).match(/(\d{3,4})\s*BF/i)||String(s).match(/\b(\d{3,4})\b/); return m?parseInt(m[1],10):null; }
function parseMonth(s){
  if(!s) return 99;
  const t=String(s).toLowerCase();
  const months=CALENDAR_DATA.months.values;
  for(const mo of months){
    if(t.includes(mo.name.toLowerCase()) || t.includes(mo.abbreviation.toLowerCase())) return mo.ordinal;
  }
  // aliases
  const alias={harvestside:8,bloomtide:4,faystyl:5,frostmere:11,snowfall:12};
  for(const [k,v] of Object.entries(alias)){ if(t.includes(k)) return v; }
  return 99;
}
function parseDay(s){
  if(!s) return 99;
  const raw=String(s).replace(/\b\d{3,4}\s*BF\b/ig,'');
  const dm=raw.match(/\bday\s+(\d{1,2})/i); if(dm) return parseInt(dm[1],10);
  const m=raw.match(/\b(\d{1,2})(?:st|nd|rd|th)?\b/); return m?parseInt(m[1],10):99;
}

function getEventsForDay(year, monthIndex, day){
  const targetMo=monthIndex+1;
  const out=[];
  const check=(arr,kind)=>{
    arr.forEach(it=>{
      const dateStr=it.date||it.era||'';
      const mo=parseMonth(dateStr), d=parseDay(dateStr), y=parseYear(dateStr);
      if(mo===targetMo && d===day && (y===null || y===year)){
        out.push({ type: kind, name: it.name||it.title||it.id, date: dateStr, id: it.id });
      }
    });
  };
  check(EVENTS_CACHE,'event');
  check(BATTLES_CACHE,'battle');
  check(TRIALS_CACHE,'trial');
  check(MAJOR_CACHE,'battle');
  // holidays
  const h=CALENDAR_DATA.holidays?.values?.find(x=>x.month===targetMo && x.day===day);
  if(h) out.push({ type:'holiday', name:h.name, date:`${CALENDAR_DATA.months.values[monthIndex].name} ${day}`, id:h.name });
  return out;
}

function renderCalendarGrid(){
  const grid=document.getElementById('calendar-grid');
  if(!grid) return;
  grid.innerHTML='';
  const md=CALENDAR_DATA.months.values[CalendarState.viewDate.monthIndex];
  const dateDisplay=document.getElementById('current-date-display');
  if(dateDisplay) dateDisplay.textContent=`${md.name} ${CalendarState.viewDate.year} — ${seasonForMonth(md.ordinal)?.name||''}`;

  const firstIdx = absoluteDay(CalendarState.viewDate.year, CalendarState.viewDate.monthIndex, 1) % 7;
  for(let i=0;i<firstIdx;i++){
    const filler=document.createElement('div'); filler.className='calendar-day filler'; grid.appendChild(filler);
  }
  for(let day=1;day<=md.days;day++){
    const isToday=CalendarState.viewDate.year===CURRENT_GAME_DATE.year && CalendarState.viewDate.monthIndex===CURRENT_GAME_DATE.monthIndex && day===CURRENT_GAME_DATE.day;
    const isSel=CalendarState.selectedDate.year===CalendarState.viewDate.year && CalendarState.selectedDate.monthIndex===CalendarState.viewDate.monthIndex && CalendarState.selectedDate.day===day;
    const evs=getEventsForDay(CalendarState.viewDate.year, CalendarState.viewDate.monthIndex, day);
    const wd=weekdayForDate(CalendarState.viewDate.year, CalendarState.viewDate.monthIndex, day);
    const cell=document.createElement('div');
    cell.className='calendar-day'+(isToday?' today':'')+(isSel?' selected':'');
    cell.innerHTML=`<div class="day-header"><span class="day-number">${day} <small style="color:var(--muted)">${wd.abbreviation}</small></span></div><div class="day-events-summary">${evs.length?`<span class="event-pip neutral">${evs.length}</span>`:''}</div>`;
    cell.addEventListener('click',()=>{ CalendarState.selectedDate={ year:CalendarState.viewDate.year, monthIndex:CalendarState.viewDate.monthIndex, day }; renderCalendarGrid(); renderSidebar(); });
    grid.appendChild(cell);
  }
}

function renderSidebar(){
  const header=document.getElementById('sidebar-date-header');
  if(!header) return;
  const { year, monthIndex, day }=CalendarState.selectedDate;
  const md=CALENDAR_DATA.months.values[monthIndex];
  const wd=weekdayForDate(year, monthIndex, day);
  const season=seasonForMonth(md.ordinal);
  header.textContent=formatFullDate(year, monthIndex, day) + (season?` — ${season.name}`:'');

  const content=document.getElementById('sidebar-content');
  if(content){
    const evs=getEventsForDay(year, monthIndex, day);
    if(!evs.length){ content.innerHTML=`<div class="empty-state"><span class="empty-icon">📅</span><p>No events — ${wd.name}${wd.isRestDay?' (Rest Day)':''}.<br>BF counts UP: ${year} BF = ${year>1040?'future':'past'} relative to today.</p></div>`; }
    else{
      content.innerHTML=evs.map(e=>`<div class="event-card ${e.type==='holiday'?'positive':''}"><div class="event-card-title">${e.name}</div><div class="event-card-desc">${e.date} · ${e.type}</div></div>`).join('');
    }
  }
  const upcoming=document.getElementById('upcoming-list');
  if(upcoming){
    const list=[];
    let y=CalendarState.selectedDate.year, mi=CalendarState.selectedDate.monthIndex, d=CalendarState.selectedDate.day;
    for(let i=1;i<20 && list.length<8;i++){
      d++; const md2=CALENDAR_DATA.months.values[mi]; if(d>md2.days){ d=1; mi++; if(mi>11){ mi=0; y++; } }
      const evs=getEventsForDay(y, mi, d);
      evs.forEach(e=>{ if(list.length<8) list.push({...e, y, mi, d}); });
    }
    upcoming.innerHTML=list.map(e=>`<div class="upcoming-item" onclick="CalendarState.viewDate.year=${e.y};CalendarState.viewDate.monthIndex=${e.mi};CalendarState.selectedDate={year:${e.y},monthIndex:${e.mi},day:${e.d}};renderCalendarGrid();renderSidebar();"><div class="upcoming-date"><span class="upcoming-day">${e.d}</span><span class="upcoming-month">${CALENDAR_DATA.months.values[e.mi].abbreviation}</span></div><div class="upcoming-info"><span class="upcoming-name">${e.name}</span></div></div>`).join('') || '<div class="empty-state small">No upcoming</div>';
  }
}

function renderQuickStats(){
  const qs=document.getElementById('quick-stats');
  if(!qs) return;
  qs.innerHTML=`<div class="stat-pill">📅 ${CalendarState.viewDate.year} BF</div><div class="stat-pill">🗓️ ${CALENDAR_DATA.months.values[CalendarState.viewDate.monthIndex].name}</div><div class="stat-pill">BF=Up</div>`;
}

function setupNav(){
  document.getElementById('prev-month')?.addEventListener('click',()=>{ CalendarState.viewDate.monthIndex--; if(CalendarState.viewDate.monthIndex<0){ CalendarState.viewDate.monthIndex=11; CalendarState.viewDate.year--; } renderCalendarGrid(); playSound?.('click.mp3'); });
  document.getElementById('next-month')?.addEventListener('click',()=>{ CalendarState.viewDate.monthIndex++; if(CalendarState.viewDate.monthIndex>11){ CalendarState.viewDate.monthIndex=0; CalendarState.viewDate.year++; } renderCalendarGrid(); playSound?.('click.mp3'); });
  document.getElementById('prev-year')?.addEventListener('click',()=>{ CalendarState.viewDate.year--; renderCalendarGrid(); });
  document.getElementById('next-year')?.addEventListener('click',()=>{ CalendarState.viewDate.year++; renderCalendarGrid(); });
  document.getElementById('today-btn')?.addEventListener('click',()=>{ CalendarState.viewDate={ year:CURRENT_GAME_DATE.year, monthIndex:CURRENT_GAME_DATE.monthIndex }; CalendarState.selectedDate={...CURRENT_GAME_DATE}; renderCalendarGrid(); renderSidebar(); });
}

function renderFilters(){ const c=document.getElementById('filter-toggles'); if(c) c.innerHTML=`<span style="color:var(--muted);font-size:12px">Merged → <a href="./battlefield.html#/calendar" style="color:var(--link)">Waluipedia Calendar</a></span>`; }
function renderLegend(){ const c=document.getElementById('calendar-legend'); if(c) c.innerHTML=`<div class="legend-row"><div class="legend-item"><span class="legend-dot" style="background:#8a4bff"></span>Event</div><div class="legend-item"><span class="legend-dot" style="background:#e5484d"></span>Battle</div><div class="legend-item"><span class="legend-dot" style="background:#e0b400"></span>Trial</div><div class="legend-item">BF=Up</div></div>`; }
function renderNewsTicker(){ const t=document.getElementById('news-ticker'); if(t) t.innerHTML=`<div class="ticker-item info">📅 Calendar merged into <a href="./battlefield.html#/calendar">Walupedia Calendar (Intuitive)</a> — BF counts UP, weekday = absolute %7 — Current: ${formatFullDate(CURRENT_GAME_DATE.year, CURRENT_GAME_DATE.monthIndex, CURRENT_GAME_DATE.day)}</div>`; }

async function init(){
  console.log('🗓️ Calendar (new intuitive system) initializing...');
  await preload();
  setupNav();
  renderFilters();
  renderLegend();
  renderNewsTicker();
  renderCalendarGrid();
  renderSidebar();
  renderQuickStats();
  console.log('✅ Calendar ready — merged logic active. Redirect? No, you are on legacy page. Prefer Walupedia.');
}

init();
export { CalendarState, renderCalendarGrid };
