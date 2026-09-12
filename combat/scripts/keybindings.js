/**
 * keybindings.js
 * Registers the module's keybindings. All actions are GM-only and localized.
 * Called once from main.js init (after settings registration).
 */

import { MODULE_ID } from "./constants.js";
import { log } from "./utils.js";
import { isAutomationActive, setAutomationActive } from "./ui.js";

const L = (key) => game.i18n.localize(key);

export function registerKeybindings() {
  try {
    game.keybindings.register(MODULE_ID, "toggleAutomation", {
      name: "NCA.Keybind.ToggleAutomation",
      hint: "NCA.Keybind.ToggleAutomationHint",
      editable: [],
      restricted: true,
      onDown: () => {
        if (!game.user.isGM) return false;
        const next = !isAutomationActive();
        setAutomationActive(next);
        ui.notifications.info(
          next ? L("NCA.UI.AutomationOnShort") : L("NCA.UI.AutomationOffShort")
        );
        return true;
      },
    });

    game.keybindings.register(MODULE_ID, "forceAutomateCurrent", {
      name: "NCA.Keybind.ForceCurrent",
      hint: "NCA.Keybind.ForceCurrentHint",
      editable: [],
      restricted: true,
      onDown: () => {
        if (!game.user.isGM) return false;
        const combat = game.combat;
        const combatant = combat?.combatant ?? null;
        if (!combatant) {
          ui.notifications.warn(L("NCA.Keybind.NoCombatant"));
          return true;
        }
        // Lazy import keeps automation.js out of the init-time graph.
        import("./automation.js")
          .then(({ forceAutomateTurn }) => forceAutomateTurn(combatant, combat))
          .catch((err) => log(`[Keybind] force-automate failed: ${err.message}`, "warn"));
        return true;
      },
    });

    game.keybindings.register(MODULE_ID, "openSettings", {
      name: "NCA.Keybind.OpenSettings",
      hint: "NCA.Keybind.OpenSettingsHint",
      editable: [],
      restricted: true,
      onDown: () => {
        if (!game.user.isGM) return false;
        import("./settings-ui.js")
          .then(({ NCASettingsApp }) => new NCASettingsApp().render(true))
          .catch((err) => log(`[Keybind] open-settings failed: ${err.message}`, "warn"));
        return true;
      },
    });

    log("[Keybindings] Registered 3 GM keybindings (unbound by default).");
  } catch (err) {
    log(`[Keybindings] registration failed: ${err.message}`, "warn");
  }
}
