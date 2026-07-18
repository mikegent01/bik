// ===== KIVOTOS GRAND ASSEMBLY INTERFACE =====
// kivo.js — All JavaScript, no inline handlers

'use strict';

// ===== UTILITY =====
function showToast(msg) {
  const t = document.getElementById('toast-msg');
  const txt = document.getElementById('toast-text');
  if (!t || !txt) return;
  txt.textContent = msg;
  t.style.display = 'block';
  t.style.opacity = '1';
  clearTimeout(t._hideTimer);
  t._hideTimer = setTimeout(() => {
    t.style.opacity = '0';
    setTimeout(() => { t.style.display = 'none'; }, 400);
  }, 2800);
}

// ===== TABS =====
function showTab(id) {
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  const sec = document.getElementById('tab-' + id);
  if (sec) sec.classList.add('active');
  document.querySelectorAll('.nav-tab').forEach(t => {
    if (t.dataset.tab === id) t.classList.add('active');
  });
}

// ===== CREATOR STEPS =====
function goToStep(n) {
  document.querySelectorAll('.step-content').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.step-pill').forEach(p => p.classList.remove('active'));
  const sc = document.getElementById('step-' + n);
  const sp = document.getElementById('step-pill-' + n);
  if (sc) sc.classList.add('active');
  if (sp) sp.classList.add('active');
}

// ===== PREVIEW UPDATES =====
function updatePreview(field, value) {
  if (field === 'name' || field === 'surname') {
    const fn = document.getElementById('char-name')?.value || '';
    const sn = document.getElementById('char-surname')?.value || '';
    const full = [fn, sn].filter(Boolean).join(' ') || 'Student Unknown';
    const el = document.getElementById('preview-name');
    if (el) el.textContent = full;
    const initEl = document.getElementById('preview-initials');
    if (initEl) {
      const parts = full.split(' ');
      initEl.textContent = parts.map(p => p[0] || '').join('').toUpperCase().slice(0, 2) || '??';
    }
  }
  if (field === 'role') {
    const el = document.getElementById('pf-role');
    if (el) el.textContent = value || '—';
    const t = document.getElementById('preview-title');
    if (t) t.textContent = value ? value.toUpperCase() : 'UNCLASSIFIED';
  }
  if (field === 'standing') {
    const el = document.getElementById('pf-standing');
    if (el) el.textContent = value || '—';
  }
  if (field === 'weapon') {
    const el = document.getElementById('pf-weapon');
    if (el) el.textContent = value || '—';
  }
  if (field === 'halovis') {
    const el = document.getElementById('pf-halo');
    if (el) {
      const cur = el.textContent;
      const shapePart = cur.includes('|') ? cur.split('|')[0].trim() : (cur !== '—' ? cur : '');
      el.textContent = (shapePart || 'Unknown') + (value ? ' | ' + value : '');
    }
  }
}

function updateStat(stat, value) {
  const num = parseInt(value);
  const valEl = document.getElementById('val-' + stat);
  if (valEl) valEl.textContent = num;
  const sbNum = document.getElementById('sb-' + stat);
  if (sbNum) sbNum.textContent = num;
  const fill = document.getElementById('sfill-' + stat);
  if (fill) fill.style.width = num + '%';
}

function selectAcademy(el, name, color) {
  document.querySelectorAll('#step-2 .choice-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  const af = document.getElementById('pf-academy');
  if (af) af.textContent = name;
  ['halo-ring-1', 'halo-ring-2', 'halo-ring-3'].forEach(id => {
    const r = document.getElementById(id);
    if (r) r.style.borderColor = color;
  });
}

function selectType(el, type) {
  document.querySelectorAll('#step-3 .choice-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  const tf = document.getElementById('pf-type');
  if (tf) tf.textContent = type;
}

function selectHaloShape(el, shape) {
  const parent = el.closest('.choice-grid');
  if (parent) parent.querySelectorAll('.choice-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  const hf = document.getElementById('pf-halo');
  if (hf) {
    const cur = hf.textContent;
    const colorPart = cur.includes('|') ? ' | ' + cur.split('|')[1].trim() : '';
    hf.textContent = shape + colorPart;
  }
}

function selectHaloColor(el, color) {
  const parent = el.closest('.choice-grid');
  if (parent) parent.querySelectorAll('.choice-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  const hf = document.getElementById('pf-halo');
  if (hf) {
    const cur = hf.textContent;
    const shapePart = cur.includes('|') ? cur.split('|')[0].trim() : (cur !== '—' ? cur : 'Unknown');
    hf.textContent = shapePart + ' | ' + color;
  }
}

function selectOrigin(el, origin) {
  document.querySelectorAll('#step-6 .choice-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  const of = document.getElementById('pf-origin');
  if (of) of.textContent = origin;
}

function selectUniform(el) {
  const parent = el.closest('.choice-grid');
  if (parent) parent.querySelectorAll('.choice-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
}

// ===== LORE SECTION SWITCHING =====
function showLoreSection(id, btn) {
  document.querySelectorAll('.lore-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.lore-nav-btn').forEach(b => b.classList.remove('active'));
  const sec = document.getElementById(id);
  if (sec) sec.classList.add('active');
  if (btn) btn.classList.add('active');
}

// ===== BACKSTORY GENERATOR =====
const ACADEMY_FLAVOR = {
  'Trinity General School': 'carries the weight of Trinity\'s institutional expectations. Within Trinity\'s halls, order is not merely preferred—it is the foundation upon which every decision is built.',
  'Millennium Science': 'navigates Millennium\'s culture of relentless inquiry and internal debate. Every assumption is questioned. Every claim requires evidence.',
  'Gehenna Academy': 'operates within Gehenna\'s hierarchy where reputation is everything and loyalty is the only currency that truly matters.',
  'Red Winter Federal': 'has been shaped by Red Winter\'s collectivist doctrine. Individual achievement is always framed as collective success.',
  'Shanhaijing Senior': 'carries Shanhaijing\'s mythological classification—a role their internal taxonomy assigned and will not explain to outsiders.',
  'Abydos High School': 'holds Abydos with a fierce, quiet loyalty that larger academies struggle to explain. The school is failing. None of this matters as much as the fact that it is still here.',
  'General Student Union': 'maintains the impossible balance that the GSU requires—neutrality as a living practice, institutional authority without institutional power.',
  'Valkyrie Police Academy': 'carries the weight of Valkyrie\'s mandate: reduce the constant low-level warfare to something that doesn\'t level infrastructure.',
};

const ORIGIN_FLAVOR = {
  'Born Into It': 'Their family has attended this academy for generations. The institution is home in the deepest sense—which means they have never fully seen it from outside.',
  'Transfer Student': 'They came from somewhere else—another academy, another culture, another set of rules. Two worlds live inside them now, and they do not always agree.',
  'Fracture Displaced': 'A Planar Fracture event took them somewhere they cannot fully describe and returned them changed. The halo that came back is not quite the halo that went in.',
  'Sensei Connection': 'They have worked closely with a Sensei before. They understand the dependency from the inside—the weight of it, the strange necessity of it.',
  'The Dark Years Survivor': 'Someone close to them lived through the Dark Years and made sure they knew what Kivotos looks like when it fails. They carry that knowledge like armor.',
  'Outside Operative': 'They arrived from another world-region. Kivotos is still strange to them. They have chosen to be here. The choice still surprises them sometimes.',
};

function generateBackstory() {
  const name = [
    document.getElementById('char-name')?.value || 'Unknown',
    document.getElementById('char-surname')?.value || ''
  ].filter(Boolean).join(' ');

  const academy  = document.getElementById('pf-academy')?.textContent  || 'Unknown Academy';
  const type     = document.getElementById('pf-type')?.textContent      || 'Unknown Type';
  const role     = document.getElementById('pf-role')?.textContent      || 'Unassigned';
  const halo     = document.getElementById('pf-halo')?.textContent      || 'Unknown';
  const standing = document.getElementById('pf-standing')?.textContent  || 'Standard Student';
  const weapon   = document.getElementById('pf-weapon')?.textContent    || 'Unspecified';
  const origin   = document.getElementById('pf-origin')?.textContent    || 'Unknown';
  const personality = document.getElementById('char-personality')?.value || '';
  const notes    = document.getElementById('char-notes')?.value         || '';
  const age      = document.getElementById('char-age')?.value           || '16';

  const academyFlavor = ACADEMY_FLAVOR[academy] || 'is finding their place within an academy culture that is still becoming familiar.';
  const originFlavor  = ORIGIN_FLAVOR[origin]   || 'Their history before Kivotos shapes every decision they make within it.';

  const personalityBlock = personality
    ? `<div style="margin-bottom:16px;">
         <div style="color:var(--text-muted);font-size:10px;margin-bottom:4px;">BEHAVIORAL PROFILE</div>
         <p style="font-size:13px;color:var(--text-secondary);line-height:1.8;">${escapeHtml(personality)}</p>
       </div>`
    : '';

  const notesBlock = notes
    ? `<div style="margin-bottom:16px;">
         <div style="color:var(--text-muted);font-size:10px;margin-bottom:4px;">ADDITIONAL NOTES</div>
         <p style="font-size:13px;color:var(--text-secondary);line-height:1.8;">${escapeHtml(notes)}</p>
       </div>`
    : '';

  const outputHTML = `
    <div style="font-family:'Share Tech Mono',monospace;">
      <div style="color:var(--millennium-cyan);font-size:13px;border-bottom:1px solid rgba(0,212,255,0.2);padding-bottom:10px;margin-bottom:16px;">
        ◈ GENERATED DOSSIER — ${escapeHtml(name.toUpperCase())}
      </div>
      <div style="margin-bottom:16px;">
        <div style="color:var(--text-muted);font-size:10px;margin-bottom:4px;">IDENTITY RECORD</div>
        <p style="font-size:13px;color:var(--text-secondary);line-height:1.8;">
          <strong style="color:var(--text-primary);">${escapeHtml(name)}</strong>, age ${escapeHtml(age)},
          ${escapeHtml(type.toLowerCase())} — registered ${escapeHtml(role)} at ${escapeHtml(academy)}.
          Halo: ${escapeHtml(halo)}. Standing: ${escapeHtml(standing)}. Primary armament: ${escapeHtml(weapon)}.
        </p>
      </div>
      <div style="margin-bottom:16px;">
        <div style="color:var(--text-muted);font-size:10px;margin-bottom:4px;">ACADEMY PROFILE</div>
        <p style="font-size:13px;color:var(--text-secondary);line-height:1.8;">${escapeHtml(name)} ${academyFlavor}</p>
      </div>
      <div style="margin-bottom:16px;">
        <div style="color:var(--text-muted);font-size:10px;margin-bottom:4px;">ORIGIN RECORD</div>
        <p style="font-size:13px;color:var(--text-secondary);line-height:1.8;">${originFlavor}</p>
      </div>
      ${personalityBlock}
      ${notesBlock}
      <div style="background:rgba(0,212,255,0.04);border:1px solid rgba(0,212,255,0.15);border-radius:4px;padding:12px;margin-top:16px;">
        <div style="color:var(--text-muted);font-size:10px;margin-bottom:8px;">GRAND ASSEMBLY RELEVANCE</div>
        <p style="font-size:12px;color:var(--text-secondary);line-height:1.7;">
          ${escapeHtml(name)} arrives at the Grand Assembly at a moment when Kivotos is simultaneously dealing with an expanding
          Planar Fracture, a Coalition under strain, and the first Sensei coordination attempt in eleven years.
          Their background as ${escapeHtml(role.toLowerCase())} from ${escapeHtml(academy)} positions them with specific access
          and specific blind spots. What they do with both in the next seven days will matter more than they currently understand.
        </p>
      </div>
      <div style="margin-top:16px;font-size:10px;color:var(--text-muted);border-top:1px solid rgba(0,212,255,0.1);padding-top:10px;">
        DOSSIER GENERATED — KIVOTOS ACADEMY CITY REGISTRATION SYSTEM // FIELD OBSERVER DOCUMENTATION PROTOCOL
      </div>
    </div>
  `;

  const out = document.getElementById('backstory-output');
  if (out) {
    out.innerHTML = outputHTML;
    out.style.display = 'block';
    out.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
  showToast('Backstory generated successfully.');
}

// ===== SAFETY HELPER =====
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ===== CLOCK =====
function updateClock() {
  const now = new Date();
  const pad = n => String(n).padStart(2, '0');
  const timeStr = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  const el = document.getElementById('system-time');
  if (el) el.textContent = 'SYSTEM TIME: ' + timeStr;
}

// ===== WIRE ALL EVENT LISTENERS =====
function wireEventListeners() {

  // --- Nav tabs ---
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => showTab(tab.dataset.tab));
  });

  // --- Step pills ---
  document.querySelectorAll('.step-pill').forEach(pill => {
    const step = parseInt(pill.id.replace('step-pill-', ''));
    pill.addEventListener('click', () => goToStep(step));
  });

  // --- Step nav buttons (data-goto attribute) ---
  document.querySelectorAll('[data-goto]').forEach(btn => {
    btn.addEventListener('click', () => goToStep(parseInt(btn.dataset.goto)));
  });

  // --- Identity fields ---
  const charName = document.getElementById('char-name');
  if (charName) charName.addEventListener('input', () => updatePreview('name', charName.value));

  const charSurname = document.getElementById('char-surname');
  if (charSurname) charSurname.addEventListener('input', () => updatePreview('surname', charSurname.value));

  const charRole = document.getElementById('char-role');
  if (charRole) charRole.addEventListener('change', () => updatePreview('role', charRole.value));

  const charStanding = document.getElementById('char-standing');
  if (charStanding) charStanding.addEventListener('change', () => updatePreview('standing', charStanding.value));

  const charHaloVis = document.getElementById('char-halo-vis');
  if (charHaloVis) charHaloVis.addEventListener('change', () => updatePreview('halovis', charHaloVis.value));

  const charWeapon = document.getElementById('char-weapon');
  if (charWeapon) charWeapon.addEventListener('change', () => updatePreview('weapon', charWeapon.value));

  // --- Stat sliders ---
  ['combat', 'tactical', 'social', 'technical', 'halo', 'endurance'].forEach(stat => {
    const slider = document.querySelector(`input[data-stat="${stat}"]`);
    if (slider) slider.addEventListener('input', () => updateStat(stat, slider.value));
  });

  // --- Academy choice cards ---
  document.querySelectorAll('#step-2 .choice-card').forEach(card => {
    card.addEventListener('click', () => {
      selectAcademy(card, card.dataset.academy, card.dataset.color);
    });
  });

  // --- Type choice cards ---
  document.querySelectorAll('#step-3 .choice-card').forEach(card => {
    card.addEventListener('click', () => {
      selectType(card, card.dataset.type);
    });
  });

  // --- Halo shape cards ---
  document.querySelectorAll('[data-halo-shape]').forEach(card => {
    card.addEventListener('click', () => selectHaloShape(card, card.dataset.haloShape));
  });

  // --- Halo color cards ---
  document.querySelectorAll('[data-halo-color]').forEach(card => {
    card.addEventListener('click', () => selectHaloColor(card, card.dataset.haloColor));
  });

  // --- Origin cards ---
  document.querySelectorAll('[data-origin]').forEach(card => {
    card.addEventListener('click', () => selectOrigin(card, card.dataset.origin));
  });

  // --- Uniform cards ---
  document.querySelectorAll('[data-uniform]').forEach(card => {
    card.addEventListener('click', () => selectUniform(card));
  });

  // --- Backstory generate button ---
  const genBtn = document.getElementById('btn-generate-backstory');
  if (genBtn) genBtn.addEventListener('click', generateBackstory);

  // --- Save dossier button ---
  const saveBtn = document.getElementById('btn-save-dossier');
  if (saveBtn) saveBtn.addEventListener('click', () => showToast('Dossier saved to active roster.'));

  // --- Copy sheet button ---
  const copyBtn = document.getElementById('btn-copy-sheet');
  if (copyBtn) copyBtn.addEventListener('click', () => showToast('Character sheet copied to clipboard format.'));

  // --- Transit button ---
  const transitBtn = document.getElementById('btn-initiate-transit');
  if (transitBtn) transitBtn.addEventListener('click', () => showToast('Regional transit suspended during Grand Assembly.'));

  // --- Lore nav buttons ---
  document.querySelectorAll('.lore-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => showLoreSection(btn.dataset.loreTarget, btn));
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {

  // Show default tab
  const firstTab = document.querySelector('.nav-tab');
  if (firstTab) showTab(firstTab.dataset.tab);

  // Show default lore section
  const firstLoreBtn = document.querySelector('.lore-nav-btn');
  if (firstLoreBtn) showLoreSection(firstLoreBtn.dataset.loreTarget, firstLoreBtn);

  // Wire everything
  wireEventListeners();

  // Clock
  updateClock();
  setInterval(updateClock, 1000);

  console.log('Kivotos Grand Assembly Interface initialized. WAH.');
});