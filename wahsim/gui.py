"""Browser GUI for WahSim.

Stdlib only — a small http.server that exposes the engine as JSON and serves a
single-page front end. No pip install, no tkinter (which is often missing from
slim Python builds), and it matches how LM Studio already works: a local
server you point a browser at.

    python gui.py                      # works from inside the wahsim folder
    python -m wahsim.gui               # works from the repo root
    python -m wahsim --gui --live

Then open http://localhost:8765
"""
from __future__ import annotations

import json
import threading
import webbrowser
from http.server import BaseHTTPRequestHandler, HTTPServer

# Support BOTH `python gui.py` and `python -m wahsim.gui`.
# Running a file directly gives it no parent package, so the relative imports
# below would fail. In that case we put the repo root on sys.path and re-import
# absolutely. This is the single most common way people try to start a GUI, so
# it should not require knowing about -m.
if __package__ in (None, ''):
    import os
    import sys

    sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    from wahsim.core.brain import LMStudioBrain, ScriptedBrain, make_brain
    from wahsim.core.dice import Dice
    from wahsim.core.engine import Action, Session
    from wahsim.modes.congress import CongressMode
    from wahsim.modes.glazed import GlazedCongressMode
    from wahsim.modes.scene import SceneMode, direct_scene
    from wahsim.modes.trial import TrialMode
else:
    from .core.brain import LMStudioBrain, ScriptedBrain, make_brain
    from .core.dice import Dice
    from .core.engine import Action, Session
    from .modes.congress import CongressMode
    from .modes.glazed import GlazedCongressMode
    from .modes.scene import SceneMode, direct_scene
    from .modes.trial import TrialMode

MODES = {'trial': TrialMode, 'congress': CongressMode,
         'glazed': GlazedCongressMode, 'scene': SceneMode}


class Game:
    """One live session plus the glue the browser needs."""

    def __init__(self):
        self.session: Session | None = None
        self.mode = None
        self.cfg: dict = {}
        self.lock = threading.Lock()

    # -- lifecycle ----------------------------------------------------------
    def start(self, cfg: dict) -> dict:
        key = cfg.get('mode', 'trial')
        seed = cfg.get('seed')
        dice = Dice(seed=int(seed) if seed not in (None, '') else None)
        brain = make_brain(dice, live=bool(cfg.get('live')),
                           base=cfg.get('api_base') or None,
                           model=cfg.get('model') or None)
        spec = dict(cfg.get('spec') or {})
        if key == 'scene':
            spec['plan'] = direct_scene(spec.get('premise', 'A tense negotiation'),
                                        dice, brain)
        self.mode = MODES[key](dice, brain, spec)
        self.session = Session(self.mode, dice, brain)
        self.cfg = cfg
        self._enter_phase()
        return self.state()

    def _enter_phase(self):
        s = self.session
        hook = getattr(self.mode, 'on_phase_start', None)
        if hook and s.round == 1:
            hook(s.phase)

    # -- turns --------------------------------------------------------------
    def step(self, choice: int | None = None, text: str = '',
             target: str = '') -> dict:
        """Advance exactly one turn. If it's the player's, use their input."""
        s = self.session
        if s is None or self.mode.finished():
            return self.state()

        actor = s.current
        if actor is None:
            s.next_phase()
            self._enter_phase()
            return self.state()

        opts = self.mode.options(actor)
        if not opts:
            s.advance()
            return self.state()

        if actor.is_player and choice is None:
            return self.state()          # waiting on the human

        if actor.is_player:
            o = opts[max(0, min(int(choice), len(opts) - 1))]
            said = text or s.brain.speak(actor, s.context())
        else:
            idx = s.brain.choose(actor, opts, s.context())
            o = opts[max(0, min(idx, len(opts) - 1))]
            said = s.brain.speak(actor, s.context())

        act = Action(actor=actor, verb=o['verb'], text=said, target=target,
                     skill=o.get('skill', ''), ability=o.get('ability', ''),
                     dc=o.get('dc'))
        beat = self.mode.resolve(act)
        s.record(beat)
        s.advance()

        prev = s.phase.key
        if s.phase.key != prev:
            self._enter_phase()
        return self.state()

    def autoplay(self, limit: int = 60) -> dict:
        """Run AI turns until it's the player's move again (or the end)."""
        s = self.session
        n = 0
        while s and not self.mode.finished() and n < limit:
            actor = s.current
            if actor is None:
                s.next_phase(); self._enter_phase(); n += 1; continue
            if actor.is_player:
                break
            self.step()
            n += 1
        return self.state()

    # -- serialisation ------------------------------------------------------
    def state(self) -> dict:
        s = self.session
        if s is None:
            return {'started': False}
        m = self.mode
        actor = s.current
        finished = m.finished()
        opts = []
        if actor and not finished:
            opts = [{'i': i, 'label': o.get('label', o['verb']),
                     'hint': o.get('hint', ''), 'verb': o['verb']}
                    for i, o in enumerate(m.options(actor))]

        order = []
        try:
            _o = s.turn_order()
            for i, x in enumerate(_o):
                order.append({'name': x.name, 'role': x.role,
                              'player': bool(x.is_player),
                              'now': x.key == (actor.key if actor else None),
                              'n': i + 1})
        except Exception:                                # noqa: BLE001
            order = []

        beats = [{
            'n': b.n, 'actor': b.actor_name, 'verb': b.verb, 'text': b.text,
            'phase_name': b.phase_name, 'round_no': b.round_no,
            'seat': b.seat, 'role': b.role,
            'roll': b.roll.explain() if b.roll else '',
            'outcome': b.roll.outcome.label if (b.roll and b.roll.outcome) else '',
            'glyph': b.roll.outcome.glyph if (b.roll and b.roll.outcome) else '',
            'narration': b.narration, 'effects': b.effects,
        } for b in s.beats]

        clocks = [{'name': c.name, 'filled': c.filled, 'size': c.size,
                   'pct': round(c.pct * 100)} for c in getattr(m, 'clocks', [])]

        blocs = None
        if hasattr(m, 'blocs'):
            blocs = []
            for b in sorted(m.blocs.values(), key=lambda x: -x.mean):
                if not b.seats:
                    continue
                fo, ag, un = b.count()
                blocs.append({'name': b.name, 'creed': b.creed, 'for': fo,
                              'against': ag, 'undecided': un,
                              'seats': len(b.seats), 'mean': round(b.mean)})
        swing = None
        if hasattr(m, 'swing_list'):
            swing = [{'name': x.name, 'bloc': x.bloc, 'lean': round(x.lean)}
                     for x in m.swing_list()[:10]]

        chart = None
        if hasattr(m, 'delegates'):
            chart = [{'name': d.actor.name, 'bloc': d.bloc,
                      'lean': round(d.lean), 'locked': d.locked,
                      'position': d.position} for d in
                     sorted(m.delegates, key=lambda x: -x.lean)]

        brain = s.brain
        return {
            'started': True,
            'title': m.title,
            'headline': (getattr(m, 'case_name', '') or getattr(m, 'motion', '')
                         or getattr(m, 'premise', '')),
            'sub': (getattr(m, 'charge', '') or getattr(m, 'setting', '')),
            'phase': s.phase.name,
            'phase_desc': s.phase.description,
            'round': s.round,
            'order': order,
            'status': m.status(),
            'clocks': clocks,
            'chart': chart,
            'blocs': blocs,
            'swing': swing,
            'seat_count': len(getattr(m, 'seats', []) or []),
            'finished': finished,
            'epilogue': m.epilogue() if finished else '',
            'current': None if not actor else {
                'name': actor.name, 'role': actor.role,
                'is_player': bool(actor.is_player),
                'composure': actor.composure, 'max': actor.max_composure,
            },
            'options': opts,
            'beats': beats,
            'actors': [{
                'name': a.name, 'role': a.role, 'faction': a.faction,
                'player': bool(a.is_player), 'composure': a.composure,
                'max': a.max_composure,
                'abilities': [{'name': ab.name, 'charges': ab.charges,
                               'desc': ab.description} for ab in a.abilities],
                'attrs': a.attrs,
            } for a in m.actors()],
            'seed': s.dice.seed,
            'brain': getattr(brain, 'name', 'scripted'),
            'model': getattr(brain, 'model', ''),
            'calls': getattr(brain, 'calls', 0),
            'fallbacks': getattr(brain, 'failures', 0),
        }


GAME = Game()

PAGE = r"""<!doctype html><html><head><meta charset="utf-8">
<title>WahSim</title>
<style>
:root{--bg:#0d0a15;--bg2:#151022;--panel:#1b1430;--panel2:#231838;--bd:#38295a;
--tx:#ece7f5;--mu:#a99cc6;--ac:#8a4bff;--ac2:#e0b400;--gd:#2fae8a;--bd2:#e5484d}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--tx);
font:14px/1.6 ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,sans-serif}
header{background:linear-gradient(135deg,rgba(138,75,255,.22),rgba(224,180,0,.08)),var(--panel);
border-bottom:1px solid var(--bd);padding:12px 20px;display:flex;gap:14px;align-items:center;
position:sticky;top:0;z-index:20}
h1{margin:0;font-size:17px;letter-spacing:.5px}
.tag{font-size:11px;border:1px solid var(--bd);border-radius:999px;padding:2px 9px;color:var(--mu)}
.tag.on{border-color:var(--gd);color:var(--gd)}
.tag.off{border-color:var(--bd2);color:var(--bd2)}
.wrap{display:grid;grid-template-columns:300px 1fr 290px;gap:16px;padding:16px;
max-width:1500px;margin:auto;align-items:start}
.card{background:var(--panel);border:1px solid var(--bd);border-radius:12px;padding:14px;margin-bottom:14px}
.card h3{margin:0 0 10px;font-size:11px;text-transform:uppercase;letter-spacing:.14em;color:var(--ac2)}
label{display:block;font-size:11px;color:var(--mu);margin:9px 0 3px;text-transform:uppercase;letter-spacing:.08em}
input,select,textarea{width:100%;background:var(--bg2);color:var(--tx);border:1px solid var(--bd);
border-radius:8px;padding:8px 10px;font:inherit;font-size:13px}
textarea{resize:vertical;min-height:62px}
button{background:var(--ac);color:#fff;border:0;border-radius:8px;padding:9px 14px;
font:inherit;font-weight:700;cursor:pointer;font-size:13px}
button:hover{filter:brightness(1.15)}button:disabled{opacity:.4;cursor:not-allowed}
button.ghost{background:var(--panel2);border:1px solid var(--bd);color:var(--tx);font-weight:600}
.row{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}
.clock{margin:9px 0}
.clock .lab{display:flex;justify-content:space-between;font-size:11px;color:var(--mu);margin-bottom:3px}
.bar{height:9px;background:var(--bg2);border-radius:99px;overflow:hidden;border:1px solid var(--bd)}
.bar i{display:block;height:100%;background:linear-gradient(90deg,var(--ac),var(--ac2))}
#log{max-height:60vh;overflow:auto;padding-right:6px}
.beat{border-left:3px solid var(--bd);padding:9px 0 9px 12px;margin-bottom:11px}
.beat.good{border-color:var(--gd)}.beat.bad{border-color:var(--bd2)}
.beat .who{font-weight:800;font-size:13px}
.beat .verb{font-size:10.5px;color:var(--mu);text-transform:uppercase;letter-spacing:.1em;margin-left:7px}
.beat .said{font-style:italic;color:var(--tx);margin:5px 0}
.beat .roll{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11.5px;
color:var(--mu);background:var(--bg2);padding:4px 8px;border-radius:6px;margin:5px 0;
display:inline-block;border:1px solid var(--bd)}
.beat .fx{font-size:12.5px;color:var(--ac2)}
.opt{width:100%;text-align:left;background:var(--panel2);border:1px solid var(--bd);
color:var(--tx);border-radius:9px;padding:9px 11px;margin-bottom:7px;cursor:pointer;font-weight:600}
.opt:hover{border-color:var(--ac);background:rgba(138,75,255,.14)}
.opt small{display:block;font-weight:400;color:var(--mu);font-size:11.5px;margin-top:2px}
.actor{border:1px solid var(--bd);border-radius:9px;padding:8px 10px;margin-bottom:7px;background:var(--bg2)}
.actor.you{border-color:var(--ac2)}
.actor .nm{font-weight:700;font-size:12.5px}
.actor .rl{font-size:10.5px;color:var(--mu);text-transform:uppercase;letter-spacing:.07em}
.mini{height:5px;background:var(--panel);border-radius:99px;margin-top:5px;overflow:hidden}
.mini i{display:block;height:100%;background:var(--gd)}
.lean{display:flex;align-items:center;gap:7px;font-size:11.5px;margin:4px 0}
.lean .track{flex:1;height:7px;background:var(--bg2);border-radius:99px;position:relative;
border:1px solid var(--bd)}
.lean .track b{position:absolute;top:50%;width:2px;height:11px;background:var(--bd);left:50%;
transform:translate(-50%,-50%)}
.lean .track i{position:absolute;top:50%;width:9px;height:9px;border-radius:50%;
background:var(--ac2);transform:translate(-50%,-50%)}
.lean .nm{width:112px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.lean .v{width:34px;text-align:right;color:var(--mu);font-family:ui-monospace,monospace}
pre{white-space:pre-wrap;font:12px/1.6 ui-monospace,SFMono-Regular,Menlo,monospace;
background:var(--bg2);padding:12px;border-radius:9px;border:1px solid var(--bd);overflow:auto}
.end{border:2px solid var(--ac2);background:linear-gradient(135deg,rgba(224,180,0,.1),transparent)}
.hide{display:none}
.phase{font-size:11px;color:var(--ac2);text-transform:uppercase;letter-spacing:.14em;font-weight:800}
@media(max-width:1150px){.wrap{grid-template-columns:1fr}}
</style></head><body>
<header>
  <h1>⚔ WahSim</h1>
  <span class="tag" id="tBrain">scripted</span>
  <span class="tag" id="tSeed"></span>
  <span class="tag" id="tPhase"></span>
  <span style="flex:1"></span>
  <button class="ghost" onclick="reset()">New session</button>
</header>

<div class="wrap">
  <!-- LEFT -->
  <div>
    <div class="card" id="setup">
      <h3>New session</h3>
      <label>Mode</label>
      <select id="mode" onchange="modeChanged()">
        <option value="trial">⚖️ Trial</option>
        <option value="congress">🏛️ Congress (9 seats)</option>
        <option value="glazed">🍩 Glazed Congress (100 seats)</option>
        <option value="scene">🎭 Scene</option>
      </select>

      <div id="fTrial">
        <label>Case name</label><input id="case" value="Crown v. The Accused">
        <label>Charge</label><input id="charge" value="Conspiracy against the Crown">
        <label>Prosecutor</label><input id="pros" value="edgeworth">
        <label>Defendant</label><input id="deft" value="archie">
        <label>You play</label>
        <select id="side"><option value="defense">Defence</option>
        <option value="prosecution">Prosecution</option></select>
      </div>

      <div id="fGlazed" class="hide">
        <label>The motion</label>
        <textarea id="gmotion">Ratification of the Species Recognition Compact</textarea>
        <label>Chamber size</label><input id="gsize" type="number" value="100" min="20" max="120">
      </div>

      <div id="fCongress" class="hide">
        <label>The motion</label>
        <textarea id="motion">Resolution 18: recognition of the Doughnut Hole as a sovereign anomaly</textarea>
        <label>Delegations</label><input id="dcount" type="number" value="9" min="3" max="15">
      </div>

      <div id="fScene" class="hide">
        <label>Describe the scene</label>
        <textarea id="premise">Wario tries to sell gravity to a suspicious banker while Waluigi objects</textarea>
      </div>

      <label>Seed (blank = random)</label><input id="seed" placeholder="e.g. 21">
      <label style="display:flex;gap:8px;align-items:center;text-transform:none;font-size:13px;margin-top:12px">
        <input type="checkbox" id="live" style="width:auto" onchange="checkLM()">
        Use LM Studio
      </label>
      <div id="lmNote" style="font-size:11.5px;color:var(--mu);margin-top:4px"></div>
      <div class="row"><button onclick="start()" style="flex:1">Begin</button></div>
    </div>

    <div class="card hide" id="cClocks"><h3>State</h3><div id="clocks"></div></div>
    <div class="card hide" id="cChart"><h3>The floor</h3><div id="chart"></div></div>
  </div>

  <!-- CENTRE -->
  <div>
    <div class="card">
      <div class="phase" id="phaseName">no session</div>
      <h2 style="margin:5px 0;font-size:19px" id="headline">Configure a session to begin</h2>
      <div style="color:var(--mu);font-size:13px" id="sub"></div>
      <div style="color:var(--mu);font-size:12.5px;margin-top:7px" id="phaseDesc"></div>
    </div>
    <div class="card"><h3>Transcript</h3><div id="log">
      <div style="color:var(--mu)">Nothing yet.</div></div></div>
    <div class="card end hide" id="cEnd"><h3>Result</h3><pre id="epilogue"></pre></div>
  </div>

  <!-- RIGHT -->
  <div>
    <div class="card hide" id="cOrder">
      <h3>Turn order · <span id="ordPhase" style="color:var(--mu)"></span></h3>
      <div id="order"></div>
    </div>
    <div class="card hide" id="cTurn">
      <h3 id="turnHead">Your move</h3>
      <div id="turnWho" style="font-weight:700;margin-bottom:4px"></div>
      <div id="turnHint" style="font-size:12px;color:var(--mu);margin-bottom:9px"></div>

      <label>1 · What do you say <span style="text-transform:none">(blank = improvise)</span></label>
      <textarea id="say" placeholder="Your Honour, the record disagrees…"
        onkeydown="sayKey(event)"></textarea>
      <div style="font-size:11px;color:var(--mu);margin:3px 0 10px">
        Ctrl+Enter picks the first action.</div>

      <label>2 · Choose an action</label>
      <div id="opts"></div>

      <div class="row" id="aiRow">
        <button onclick="advance()" id="btnNext">Next turn ▸</button>
        <button class="ghost" onclick="runToMe()">Run to my turn ⏩</button>
        <label style="display:flex;align-items:center;gap:6px;text-transform:none;
          font-size:12px;color:var(--mu);margin:0">
          <input type="checkbox" id="autoAI" checked style="width:auto"> auto-run AI
        </label>
      </div>
    </div>
    <div class="card hide" id="cCast"><h3>Cast</h3><div id="cast"></div></div>
  </div>
</div>

<script>
let S={};
const $=id=>document.getElementById(id);
const esc=t=>String(t==null?'':t).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));

async function api(path,body){
  const r=await fetch(path,{method:'POST',headers:{'Content-Type':'application/json'},
    body:JSON.stringify(body||{})});
  return r.json();
}
function modeChanged(){
  const m=$('mode').value;
  $('fTrial').className   = m==='trial'?'':'hide';
  $('fCongress').className= m==='congress'?'':'hide';
  $('fGlazed').className  = m==='glazed'?'':'hide';
  $('fScene').className   = m==='scene'?'':'hide';
}
async function checkLM(){
  if(!$('live').checked){$('lmNote').textContent='';return;}
  $('lmNote').textContent='checking localhost:1234…';
  const r=await api('/api/check');
  $('lmNote').innerHTML = r.ok
    ? '<span style="color:var(--gd)">✓ '+esc(r.detail)+'</span>'
    : '<span style="color:var(--bd2)">✗ not reachable — start the server in '
      +'LM Studio (Developer ▸ Start Server). Falling back to offline brain.</span>';
}
async function start(){
  const m=$('mode').value; const spec={};
  if(m==='trial'){spec.case_name=$('case').value;spec.charge=$('charge').value;
    spec.prosecutor=$('pros').value;spec.defendant=$('deft').value;
    spec.player_side=$('side').value;spec.witness_count=3;}
  if(m==='congress'){spec.motion=$('motion').value;
    spec.delegate_count=parseInt($('dcount').value)||9;}
  if(m==='glazed'){spec.motion=$('gmotion').value;
    spec.size=parseInt($('gsize').value)||100;}
  if(m==='scene'){spec.premise=$('premise').value;spec.play=true;}
  S=await api('/api/start',{mode:m,seed:$('seed').value,live:$('live').checked,spec:spec});
  render(); maybeAuto();
}
async function advance(){ S=await api('/api/step',{}); render(); }
async function runToMe(){ S=await api('/api/auto',{}); render(); }
async function choose(i){
  S=await api('/api/step',{choice:i,text:$('say').value});
  $('say').value=''; render(); maybeAuto();
}
function sayKey(e){
  if(e.key==='Enter' && (e.ctrlKey||e.metaKey)){
    e.preventDefault();
    if(S.options && S.options.length) choose(0);
  }
}
// If it is not the player's turn, run the AI forward automatically so the
// human never has to hunt for a button to reach their own move.
function maybeAuto(){
  if(!S.started || S.finished) return;
  if(!$('autoAI') || !$('autoAI').checked) return;
  if(S.current && !S.current.is_player) setTimeout(runToMe, 220);
}
function reset(){ S={}; $('setup').className='card'; render(); }

function render(){
  if(!S.started){
    ['cClocks','cChart','cTurn','cWait','cCast','cEnd'].forEach(i=>$(i).className='card hide');
    return;
  }
  $('setup').className='card hide';
  $('tBrain').textContent = S.brain==='scripted' ? 'offline brain'
    : 'LM Studio · '+(S.model||'model')+(S.fallbacks?' ('+S.fallbacks+' fallbacks)':'');
  $('tBrain').className='tag '+(S.brain==='scripted'?'':'on');
  $('tSeed').textContent='seed '+S.seed;
  $('tPhase').textContent='round '+S.round;
  $('phaseName').textContent=S.phase;
  $('headline').textContent=S.headline||S.title;
  $('sub').textContent=S.sub||'';
  $('phaseDesc').textContent=S.phase_desc||'';

  // clocks
  if(S.clocks.length){
    $('cClocks').className='card';
    $('clocks').innerHTML=S.clocks.map(c=>
      `<div class="clock"><div class="lab"><span>${esc(c.name)}</span>
      <span>${c.filled}/${c.size}</span></div>
      <div class="bar"><i style="width:${c.pct}%"></i></div></div>`).join('');
  }
  // large chamber: bloc whip board (keeps 100 seats to one screen)
  if(S.blocs && S.blocs.length){
    $('cChart').className='card';
    $('chart').innerHTML =
      `<div style="font-size:11px;color:var(--mu);margin-bottom:8px">
        ${S.seat_count} delegations · ${S.blocs.length} blocs</div>` +
      S.blocs.map(b=>{
        const n=Math.max(1,b.seats), f=b['for']/n*100, u=b.undecided/n*100, a=b.against/n*100;
        return `<div style="margin-bottom:9px" title="${esc(b.creed)}">
          <div style="display:flex;justify-content:space-between;font-size:11.5px">
            <b>${esc(b.name)}</b>
            <span style="color:var(--mu)">${b['for']}/${b.undecided}/${b.against}</span></div>
          <div style="display:flex;height:9px;border-radius:99px;overflow:hidden;
            border:1px solid var(--bd);margin-top:3px">
            <i style="width:${f}%;background:var(--gd)"></i>
            <i style="width:${u}%;background:var(--panel2)"></i>
            <i style="width:${a}%;background:var(--bd2)"></i></div></div>`;}).join('') +
      (S.swing && S.swing.length ? `<div style="margin-top:10px;font-size:11px;
        color:var(--ac2);text-transform:uppercase;letter-spacing:.1em">Swing seats</div>`
        + S.swing.slice(0,6).map(x=>`<div style="font-size:11.5px;color:var(--mu)">
          ${x.lean>0?'+':''}${x.lean} · ${esc(x.name)}</div>`).join('') : '');
  }
  // small congress floor
  else if(S.chart){
    $('cChart').className='card';
    $('chart').innerHTML=S.chart.map(d=>{
      const pos=((d.lean+100)/200*100).toFixed(1);
      return `<div class="lean"><span class="nm" title="${esc(d.bloc)}">
        ${d.locked?'🔒':''}${esc(d.name)}</span>
        <span class="track"><b></b><i style="left:${pos}%"></i></span>
        <span class="v">${d.lean>0?'+':''}${d.lean}</span></div>`;}).join('');
  }
  // transcript
  $('log').innerHTML = S.beats.length ? S.beats.map(b=>{
    const cls=b.outcome?(['SUCCESS','CRITICAL','PARTIAL'].includes(b.outcome)?'good':'bad'):'';
    const ctx = b.phase_name
      ? `<span style="color:var(--mu);font-size:10.5px;margin-left:7px">
         ${esc(b.phase_name)} · r${b.round_no}${b.seat?' · turn '+esc(b.seat):''}</span>`
      : '';
    return `<div class="beat ${cls}"><div><span class="who">${esc(b.actor)}</span>
      ${b.role?`<span class="verb">${esc(b.role)}</span>`:''}
      <span class="verb">${esc(b.verb)}</span>${ctx}</div>
      ${b.text?`<div class="said">“${esc(b.text)}”</div>`:''}
      ${b.roll?`<div class="roll">🎲 ${esc(b.roll)}</div>`:''}
      ${b.narration?`<div style="font-size:12.5px;color:var(--mu)">${esc(b.narration)}</div>`:''}
      ${(b.effects||[]).map(e=>`<div class="fx">→ ${esc(e)}</div>`).join('')}</div>`;
  }).join('') : '<div style="color:var(--mu)">Nothing yet.</div>';
  $('log').scrollTop=$('log').scrollHeight;

  // turn-order strip: who acts, in what order, and who is up right now.
  if(S.order && S.order.length && !S.finished){
    $('cOrder').className='card';
    $('ordPhase').textContent = S.phase+' · round '+S.round;
    $('order').innerHTML = S.order.map(o=>{
      const now = o.now ? 'border-color:var(--ac2);background:rgba(224,180,0,.12)' : '';
      return `<div style="display:flex;gap:8px;align-items:center;padding:5px 9px;
        border:1px solid var(--bd);border-radius:8px;margin-bottom:5px;
        font-size:12px;${now}">
        <b style="color:var(--mu);width:14px">${o.n}</b>
        <span style="flex:1">${esc(o.name)}${o.player?' ◀ you':''}</span>
        <span style="color:var(--mu);font-size:10.5px;text-transform:uppercase">
          ${esc(o.role)}</span>
        ${o.now?'<span style="color:var(--ac2);font-weight:800">NOW</span>':''}
      </div>`;}).join('');
  } else { $('cOrder').className='card hide'; }

  // turn panel — always visible during play; the composer is never hidden.
  const me = S.current && S.current.is_player && !S.finished;
  $('cTurn').className = (S.finished || !S.current) ? 'card hide' : 'card';
  $('turnHead').textContent = me ? 'Your move' : 'AI turn';
  $('aiRow').style.display = me ? 'none' : 'flex';
  const say = $('say');
  say.disabled = !me;
  say.style.opacity = me ? '1' : '.45';
  if(S.current){
    $('turnWho').textContent = S.current.name
      + (me ? ' — composure '+S.current.composure+'/'+S.current.max : '');
    $('turnHint').textContent = me
      ? 'Type a line (optional), then pick an action below.'
      : S.current.name+' ('+S.current.role+') is acting.';
  }
  $('opts').innerHTML = me ? S.options.map(o=>
      `<button class="opt" onclick="choose(${o.i})">${esc(o.label)}
       ${o.hint?`<small>${esc(o.hint)}</small>`:''}</button>`).join('')
    : '<div style="font-size:12px;color:var(--mu)">Waiting for the AI…</div>';
  if(me) setTimeout(()=>{try{say.focus();}catch(e){}}, 30);

  // cast
  $('cCast').className='card';
  $('cast').innerHTML=S.actors.map(a=>{
    const p=Math.round(a.composure/Math.max(1,a.max)*100);
    return `<div class="actor ${a.player?'you':''}">
      <div class="nm">${esc(a.name)}${a.player?' ◀ you':''}</div>
      <div class="rl">${esc(a.role)}${a.faction?' · '+esc(a.faction.slice(0,22)):''}</div>
      <div class="mini"><i style="width:${p}%"></i></div>
      ${a.abilities.length?`<div style="font-size:11px;color:var(--mu);margin-top:5px">
        ${a.abilities.map(x=>esc(x.name)+' ['+x.charges+']').join(' · ')}</div>`:''}
    </div>`;}).join('');

  // end
  $('cEnd').className = S.finished?'card end':'card end hide';
  if(S.finished) $('epilogue').textContent=S.epilogue;
}
modeChanged();
</script></body></html>"""


class Handler(BaseHTTPRequestHandler):
    def _send(self, code, body, ctype='application/json'):
        raw = body.encode() if isinstance(body, str) else body
        self.send_response(code)
        self.send_header('Content-Type', ctype)
        self.send_header('Content-Length', str(len(raw)))
        self.end_headers()
        self.wfile.write(raw)

    def do_GET(self):                                  # noqa: N802
        if self.path in ('/', '/index.html'):
            self._send(200, PAGE, 'text/html; charset=utf-8')
        else:
            self._send(404, '{}')

    def do_POST(self):                                 # noqa: N802
        n = int(self.headers.get('Content-Length') or 0)
        try:
            body = json.loads(self.rfile.read(n) or b'{}')
        except json.JSONDecodeError:
            body = {}
        try:
            with GAME.lock:
                if self.path == '/api/start':
                    out = GAME.start(body)
                elif self.path == '/api/step':
                    out = GAME.step(body.get('choice'), body.get('text', ''),
                                    body.get('target', ''))
                elif self.path == '/api/auto':
                    out = GAME.autoplay()
                elif self.path == '/api/state':
                    out = GAME.state()
                elif self.path == '/api/check':
                    b = LMStudioBrain(ScriptedBrain(Dice(0)))
                    ok, detail = b.ping()
                    out = {'ok': ok, 'detail': detail, 'base': b.base}
                else:
                    return self._send(404, '{}')
            self._send(200, json.dumps(out))
        except Exception as e:                          # noqa: BLE001
            self._send(500, json.dumps({'error': f'{type(e).__name__}: {e}'}))

    def log_message(self, *a):
        pass                                            # keep the console clean


def serve(port: int = 8765, live: bool = False, model: str = '',
          api_base: str = '', open_browser: bool = True):
    srv = HTTPServer(('127.0.0.1', port), Handler)
    url = f'http://localhost:{port}'
    print(f'\n  WahSim GUI → {url}')
    if live:
        b = LMStudioBrain(ScriptedBrain(Dice(0)), base=api_base or None,
                          model=model or None)
        ok, detail = b.ping()
        print(f'  LM Studio  → {b.base}  [{"connected: " + detail if ok else "NOT reachable"}]')
        if not ok:
            print('               tick "Use LM Studio" in the GUI once the server is up.')
    print('  Ctrl+C to stop.\n')
    if open_browser:
        threading.Timer(0.6, lambda: webbrowser.open(url)).start()
    try:
        srv.serve_forever()
    except KeyboardInterrupt:
        print('  — GUI stopped —')


if __name__ == '__main__':
    serve()
