/**
 * welcome.js
 * First-run welcome + per-version "What's New" dialog.
 *
 * - Stores the last-seen version in a hidden world setting.
 * - On ready (GM only): unset → welcome; older than current → release notes.
 * - Release-notes text ships as i18n keys (NCA.Welcome.Notes.<version>) — the
 *   CHANGELOG.md is never parsed at runtime.
 * - Respects a client "show release notes" toggle (default on).
 * - ApplicationV2 with manual delegated _onRender listeners (house pattern —
 *   the actions dispatch is unreliable in this V13 environment).
 */

import { MODULE_ID } from "./constants.js";
import { log } from "./utils.js";

const LAST_SEEN = "lastSeenVersion";
const SHOW_NOTES = "showReleaseNotes";

const L = (key) => game.i18n.localize(key);

/** The version whose notes we render. Bump alongside module.json. */
const CURRENT_NOTES_VERSION = "1.0.0";

export function registerWelcomeSettings() {
  game.settings.register(MODULE_ID, LAST_SEEN, {
    scope: "world", config: false, type: String, default: "",
  });
  game.settings.register(MODULE_ID, SHOW_NOTES, {
    name: "NCA.Settings.ShowReleaseNotes",
    hint: "NCA.Settings.ShowReleaseNotesHint",
    scope: "client", config: false, type: Boolean, default: true,
  });
}

export async function maybeShowWelcome() {
  try {
    if (!game.user?.isGM) return;
    const moduleVersion = game.modules.get(MODULE_ID)?.version ?? CURRENT_NOTES_VERSION;
    const lastSeen = game.settings.get(MODULE_ID, LAST_SEEN);

    if (!lastSeen) {
      await game.settings.set(MODULE_ID, LAST_SEEN, moduleVersion);
      new WelcomeApp("welcome").render(true);
      return;
    }
    if (lastSeen !== moduleVersion) {
      await game.settings.set(MODULE_ID, LAST_SEEN, moduleVersion);
      if (game.settings.get(MODULE_ID, SHOW_NOTES)) {
        new WelcomeApp("notes").render(true);
      }
    }
  } catch (err) {
    log(`[Welcome] suppressed: ${err.message}`, "warn");
  }
}

class WelcomeApp extends foundry.applications.api.ApplicationV2 {
  constructor(mode = "welcome") {
    super();
    this._mode = mode; // "welcome" | "notes"
  }

  static DEFAULT_OPTIONS = {
    id: "nca-welcome",
    classes: ["nca-welcome-app"],
    tag: "div",
    window: { title: "NCA.Welcome.Title", resizable: false },
    position: { width: 520, height: "auto" },
  };

  get title() {
    return this._mode === "notes" ? L("NCA.Welcome.NotesTitle") : L("NCA.Welcome.Title");
  }

  async _renderHTML() {
    const body = this._mode === "notes" ? this._notesBody() : this._welcomeBody();
    const openLabel = L("NCA.Welcome.OpenConfig");
    const closeLabel = L("NCA.Welcome.Close");
    return `
      <div class="nca-welcome-wrap">
        <div class="nca-welcome-head">
          <i class="fas fa-robot"></i>
          <h2>${this._mode === "notes" ? L("NCA.Welcome.NotesHeading") : L("NCA.Welcome.Heading")}</h2>
        </div>
        <div class="nca-welcome-body">${body}</div>
        <footer class="nca-welcome-footer">
          <button type="button" data-nca-open>
            <i class="fas fa-sliders-h"></i> ${openLabel}
          </button>
          <button type="button" data-nca-close>${closeLabel}</button>
        </footer>
      </div>`;
  }

  _welcomeBody() {
    return [
      `<p>${L("NCA.Welcome.P1")}</p>`,
      `<p>${L("NCA.Welcome.P2")}</p>`,
      `<p class="nca-welcome-tip">${L("NCA.Welcome.P3")}</p>`,
    ].join("");
  }

  _notesBody() {
    // Notes ship as a localized HTML blob per version. Missing key → generic line.
    const key = `NCA.Welcome.Notes.${CURRENT_NOTES_VERSION.replace(/\./g, "_")}`;
    const html = L(key);
    if (html === key) return `<p>${L("NCA.Welcome.NotesFallback")}</p>`;
    return html;
  }

  _replaceHTML(result, content) {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = result ?? "";
    content.replaceChildren(...Array.from(wrapper.childNodes));
  }

  _onRender() {
    // Manual delegation — data-action dispatch is unreliable in this V13 env.
    this.element.querySelector("[data-nca-open]")?.addEventListener("mousedown", (ev) => {
      ev.stopPropagation();
      import("./settings-ui.js")
        .then(({ NCASettingsApp }) => new NCASettingsApp().render(true))
        .catch((err) => log(`[Welcome] open settings failed: ${err.message}`, "warn"));
      this.close();
    });
    this.element.querySelector("[data-nca-close]")?.addEventListener("mousedown", (ev) => {
      ev.stopPropagation();
      this.close();
    });
  }
}
