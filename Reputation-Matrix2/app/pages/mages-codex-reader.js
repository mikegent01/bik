/* Page-at-a-time reader for mages-code.html.
   The Codex JSON already stores each body entry as one authored book page; this
   module flattens those entries without duplicating or changing their prose. */
(() => {
  'use strict';

  const state = {
    pages: [],
    parts: [],
    sectionStarts: new Map(),
    partStarts: new Map(),
    current: 0,
    ready: false,
    lastFocus: null
  };

  const byId = id => document.getElementById(id);
  const contentPages = () => Math.max(0, state.pages.length - 2);

  function cleanKey(key) {
    const value = String(key || '').trim();
    return /^[a-z]+$/i.test(value) ? `(${value.toLowerCase()}) ` : '';
  }

  function build(data, sortedParts, byPart) {
    state.pages = [{ kind: 'cover' }, { kind: 'index' }];
    state.parts = [];
    state.sectionStarts = new Map();
    state.partStarts = new Map();

    sortedParts.forEach(part => {
      const sections = byPart[part.id] || [];
      const partRow = { ...part, sections: [] };

      sections.forEach(section => {
        const bodies = section.body || [];
        const firstPhysicalPage = bodies.length ? state.pages.length - 1 : null;
        const firstReaderIndex = bodies.length ? state.pages.length : null;
        partRow.sections.push({ section, firstPhysicalPage, firstReaderIndex });

        if (!bodies.length) return;
        if (!state.partStarts.has(part.id)) state.partStarts.set(part.id, firstReaderIndex);
        state.sectionStarts.set(String(section.cite), firstReaderIndex);

        bodies.forEach((body, pageInSection) => {
          state.pages.push({
            kind: 'content',
            part,
            section,
            body,
            pageInSection,
            pagesInSection: bodies.length,
            physicalPage: state.pages.length - 1
          });
        });
      });

      state.parts.push(partRow);
    });

    state.ready = true;
    renderFullIndex();
    bindReaderEvents();
  }

  function renderCover() {
    return `
      <article class="codex-reader-leaf codex-reader-leaf--cover" aria-label="Book cover">
        <div class="codex-cover-sigil" aria-hidden="true">✦ ◇ ✦</div>
        <div class="codex-cover-volume">C.C.D. · Volume I</div>
        <h1>Codex of the<br>Mages' Guild</h1>
        <p class="codex-cover-subtitle">Consolidated Canal Decrees — the authoritative field compilation of magical conduct</p>
        <div class="codex-cover-rule" aria-hidden="true"></div>
        <div class="codex-cover-issuer">Mages' Guild<br>Autumnwood Accords Desk</div>
        <p class="codex-cover-motto">“A person who skips definitions is still bound.”</p>
        <div class="codex-cover-edition">Field Edition · Read in Order</div>
      </article>`;
  }

  function renderIndexLeaf() {
    const entries = state.parts.map(part => {
      const readerIndex = state.partStarts.get(part.id);
      const physicalPage = readerIndex == null ? 'reserved' : state.pages[readerIndex].physicalPage;
      const disabled = readerIndex == null ? ' disabled' : '';
      return `<button type="button" data-reader-part="${esc(part.id)}"${disabled}>
        <span class="codex-part-index-name">Part ${esc(part.roman)} · ${esc(part.title)}</span>
        <span class="codex-part-index-dots" aria-hidden="true"></span>
        <span class="codex-part-index-page">${esc(physicalPage)}</span>
      </button>`;
    }).join('');

    return `
      <article class="codex-reader-leaf codex-reader-leaf--index codex-reader-leaf--odd" aria-label="Index of parts">
        <div class="codex-reader-running-head">C.C.D. · Index</div>
        <h1>Index of Parts</h1>
        <p class="codex-index-intro">${state.parts.length} parts · ${contentPages().toLocaleString()} numbered pages. Select a Part below, or open the complete section index.</p>
        <div class="codex-part-index">${entries}</div>
        <button type="button" class="codex-index-open-full" data-reader-open-index>Open complete section index</button>
        <div class="codex-reader-folio">i</div>
      </article>`;
  }

  function renderAttachedForm(page) {
    if (page.pageInSection !== 0) return '';
    const form = typeof FORMS_BY_CITE === 'object' ? FORMS_BY_CITE[String(page.section.cite)] : null;
    if (!form) return '';
    return `<div class="codex-reader-form-slip">
      <span>Attached instrument: <strong>${esc(form.id)}</strong> — ${esc(form.title)}</span>
      <button type="button" data-reader-form="${esc(form.id)}">Open form</button>
    </div>`;
  }

  function renderContent(page) {
    const paragraphs = String(page.body.text || '')
      .split(/\n\s*\n/)
      .map(paragraph => paragraph.trim())
      .filter(Boolean)
      .map(paragraph => `<p>${linkCites(paragraph)}</p>`)
      .join('');
    const isEven = page.physicalPage % 2 === 0;
    const parity = isEven ? 'even' : 'odd';
    const sectionLabel = page.pageInSection === 0
      ? `<div class="codex-reader-section-mark">§ ${esc(page.section.cite)} · ${esc(page.section.title)}</div>`
      : `<div class="codex-reader-section-mark">§ ${esc(page.section.cite)} · continued</div>`;
    const heading = `${cleanKey(page.body.key)}${page.body.heading || page.section.title}`;

    return `
      <article class="codex-reader-leaf codex-reader-leaf--${parity}" aria-label="Page ${page.physicalPage}">
        <div class="codex-reader-running-head">Part ${esc(page.part.roman)} · ${esc(page.part.title)}</div>
        ${sectionLabel}
        <h2>${esc(heading)}</h2>
        ${renderAttachedForm(page)}
        <div class="codex-reader-page-copy">${paragraphs}</div>
        <div class="codex-reader-folio">${page.physicalPage}</div>
      </article>`;
  }

  function renderPage() {
    if (!state.ready || !state.pages.length) return;
    state.current = Math.max(0, Math.min(state.current, state.pages.length - 1));
    const page = state.pages[state.current];
    const mount = byId('codex-reader-page');
    const stage = byId('codex-reader-stage');
    if (!mount) return;

    if (page.kind === 'cover') mount.innerHTML = renderCover();
    else if (page.kind === 'index') mount.innerHTML = renderIndexLeaf();
    else mount.innerHTML = renderContent(page);

    const atStart = state.current === 0;
    const atEnd = state.current === state.pages.length - 1;
    ['codex-reader-prev', 'codex-reader-side-prev'].forEach(id => { if (byId(id)) byId(id).disabled = atStart; });
    ['codex-reader-next', 'codex-reader-side-next'].forEach(id => { if (byId(id)) byId(id).disabled = atEnd; });

    const status = page.kind === 'cover'
      ? 'Cover'
      : page.kind === 'index'
        ? 'Index · i'
        : `Page ${page.physicalPage.toLocaleString()} of ${contentPages().toLocaleString()} · § ${page.section.cite}`;
    if (byId('codex-reader-status')) byId('codex-reader-status').textContent = status;
    if (byId('codex-reader-subtitle')) byId('codex-reader-subtitle').textContent = status;
    if (byId('codex-reader-copy')) byId('codex-reader-copy').disabled = page.kind !== 'content';
    if (stage) stage.scrollTop = 0;
  }

  function turn(delta) {
    if (!state.ready) return;
    const next = Math.max(0, Math.min(state.current + delta, state.pages.length - 1));
    if (next === state.current) return;
    state.current = next;
    renderPage();
  }

  function open(cite) {
    if (!state.ready) return;
    state.lastFocus = document.activeElement;
    if (cite != null && state.sectionStarts.has(String(cite))) {
      state.current = state.sectionStarts.get(String(cite));
    } else {
      state.current = 0;
    }
    document.body.classList.add('book-mode');
    byId('codex-reader').setAttribute('aria-hidden', 'false');
    renderPage();
    requestAnimationFrame(() => byId('codex-reader-close')?.focus());
  }

  function close() {
    closeIndex();
    document.body.classList.remove('book-mode');
    byId('codex-reader')?.setAttribute('aria-hidden', 'true');
    if (state.lastFocus && typeof state.lastFocus.focus === 'function') state.lastFocus.focus();
  }

  function openSection(cite) {
    const target = state.sectionStarts.get(String(cite));
    if (target == null) return;
    state.current = target;
    if (!document.body.classList.contains('book-mode')) {
      state.lastFocus = document.activeElement;
      document.body.classList.add('book-mode');
      byId('codex-reader')?.setAttribute('aria-hidden', 'false');
    }
    closeIndex();
    renderPage();
    try { history.replaceState(null, '', `#s-${encodeURIComponent(cite)}`); } catch (_) { /* file:// */ }
  }

  function openPart(partId) {
    const target = state.partStarts.get(partId);
    if (target == null) return;
    state.current = target;
    closeIndex();
    renderPage();
  }

  function renderFullIndex() {
    const mount = byId('codex-index-list');
    if (!mount) return;
    mount.innerHTML = state.parts.map(part => {
      const entries = part.sections.map(({ section, firstPhysicalPage }) => {
        const disabled = firstPhysicalPage == null ? ' disabled' : '';
        const page = firstPhysicalPage == null ? 'reserved' : `p. ${firstPhysicalPage}`;
        return `<button type="button" class="codex-index-entry" data-reader-cite="${esc(section.cite)}" data-index-search="${esc(`${section.cite} ${section.title}`.toLowerCase())}"${disabled}>
          <span class="codex-index-cite">§ ${esc(section.cite)}</span>
          <span class="codex-index-name">${esc(section.title)}</span>
          <span class="codex-index-page">${page}</span>
        </button>`;
      }).join('');
      return `<section class="codex-index-part" data-index-part>
        <h3>Part ${esc(part.roman)} · ${esc(part.title)}</h3>
        ${entries}
      </section>`;
    }).join('');
  }

  function openIndex() {
    byId('codex-index-panel')?.classList.add('open');
    byId('codex-index-shade')?.classList.add('open');
    byId('codex-index-panel')?.setAttribute('aria-hidden', 'false');
    requestAnimationFrame(() => byId('codex-index-search')?.focus());
  }

  function closeIndex() {
    byId('codex-index-panel')?.classList.remove('open');
    byId('codex-index-shade')?.classList.remove('open');
    byId('codex-index-panel')?.setAttribute('aria-hidden', 'true');
  }

  function filterIndex(query) {
    const needle = String(query || '').trim().toLowerCase();
    let matches = 0;
    document.querySelectorAll('.codex-index-entry').forEach(entry => {
      const hit = !needle || (entry.dataset.indexSearch || '').includes(needle);
      entry.classList.toggle('hidden', !hit);
      if (hit) matches += 1;
    });
    document.querySelectorAll('[data-index-part]').forEach(part => {
      part.classList.toggle('hidden', !part.querySelector('.codex-index-entry:not(.hidden)'));
    });
    byId('codex-index-empty')?.classList.toggle('show', matches === 0);
  }

  function copyCurrentCitation() {
    const page = state.pages[state.current];
    if (!page || page.kind !== 'content') return;
    copyCite(String(page.section.cite));
  }

  let eventsBound = false;
  function bindReaderEvents() {
    if (eventsBound) return;
    eventsBound = true;
    byId('codex-reader-close')?.addEventListener('click', close);
    byId('codex-reader-index')?.addEventListener('click', openIndex);
    byId('codex-reader-copy')?.addEventListener('click', copyCurrentCitation);
    byId('codex-reader-prev')?.addEventListener('click', () => turn(-1));
    byId('codex-reader-next')?.addEventListener('click', () => turn(1));
    byId('codex-reader-side-prev')?.addEventListener('click', () => turn(-1));
    byId('codex-reader-side-next')?.addEventListener('click', () => turn(1));
    byId('codex-index-close')?.addEventListener('click', closeIndex);
    byId('codex-index-shade')?.addEventListener('click', closeIndex);
    byId('codex-index-search')?.addEventListener('input', event => filterIndex(event.target.value));

    byId('codex-reader')?.addEventListener('click', event => {
      const citeLink = event.target.closest('[data-cite], [data-reader-cite]');
      if (citeLink) {
        event.preventDefault();
        openSection(citeLink.dataset.cite || citeLink.dataset.readerCite);
        return;
      }
      const partLink = event.target.closest('[data-reader-part]');
      if (partLink) { openPart(partLink.dataset.readerPart); return; }
      if (event.target.closest('[data-reader-open-index]')) { openIndex(); return; }
      const formLink = event.target.closest('[data-reader-form]');
      if (formLink) openFormModal(formLink.dataset.readerForm);
    });

    document.addEventListener('keydown', event => {
      if (!document.body.classList.contains('book-mode')) return;
      if (byId('form-modal')?.classList.contains('open')) return;
      if (event.key === 'Escape') {
        if (byId('codex-index-panel')?.classList.contains('open')) closeIndex();
        else close();
        return;
      }
      if (event.target.matches('input, textarea, select')) return;
      if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
        event.preventDefault();
        turn(-1);
      } else if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') {
        event.preventDefault();
        turn(1);
      } else if (event.key.toLowerCase() === 'i') {
        event.preventDefault();
        openIndex();
      }
    }, { capture: true });
  }

  window.CodexReader = { build, open, close, openSection, turn, openIndex };
  window.setBookMode = on => {
    if (!on) return close();
    const match = String(location.hash || '').match(/^#s-(.+)$/);
    open(match ? decodeURIComponent(match[1]) : undefined);
  };
  window.openBookPage = cite => openSection(cite);
  window.bookTurn = turn;
})();
