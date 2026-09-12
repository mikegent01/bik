/**
 * registry.js
 * Tiny shared-service registry that breaks import cycles without polluting
 * globalThis. main.js registers services at init; consumers read lazily at
 * call time (never at import time).
 *
 * Replaces the old `globalThis.__NCA_INFERENCE_MODULE__` handshake (≤0.22.0).
 */

export const registry = {
  /** @type {null | { inferAiProfile: Function, getCachedAiProfile: Function, INFERENCE_VERSION: number }} */
  inference: null,
};
