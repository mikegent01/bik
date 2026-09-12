/**
 * settings.js
 * Registers all module settings with Foundry's Settings API.
 * Settings are grouped by category via a custom ApplicationV2 submenu.
 */

import { MODULE_ID, LEGACY_MODULE_ID } from "./constants.js";
// Re-export: most files import module identity from settings.js — keep that
// working while constants.js stays the single point of definition.
export { MODULE_ID, LEGACY_MODULE_ID };

// ─── Setting key constants ──────────────────────────────────────────────────
export const SETTINGS = {
  // General
  ENABLED_BY_DEFAULT:   "enabledByDefault",
  ACTION_DELAY:         "actionDelay",
  ATTACK_DELAY:         "attackDelay",
  AUTO_END_TURN:        "autoEndTurn",
  ENABLE_MOVEMENT:      "enableMovement",
  ENABLE_CHAT_LOG:      "enableChatLog",

  // Combat Behaviour
  PREFER_MULTIATTACK:   "preferMultiattack",
  PREFER_MELEE:         "preferMelee",
  PREFER_RANGED:        "preferRanged",
  IGNORE_UNCONSCIOUS:   "ignoreUnconscious",
  IGNORE_HIDDEN:        "ignoreHidden",
  MAX_MOVEMENT:         "maxMovement",

  // Safety
  PAUSE_ON_ERROR:       "pauseOnError",
  LETHAL_CONFIRM:       "lethalConfirm",
  MAX_ACTIONS_PER_TURN: "maxActionsPerTurn",

  // Movement — Dash
  ENABLE_DASH:          "enableDash",
  DASH_PRESERVE_ACTION: "dashPreserveAction",

  // Movement — Pursuit
  ENABLE_PURSUIT:       "enablePursuit",

  // Movement — Natural pathing
  NATURAL_MOVEMENT:     "naturalMovement",

  // Movement — Animation / rotation
  MOVEMENT_STEP_DELAY:  "movementStepDelay",
  FACE_MOVEMENT:        "faceMovement",
  FACE_TARGET:          "faceTarget",
  ROTATION_OFFSET:      "rotationOffset",

  // Behaviour — retreat / fear
  ENABLE_FRIGHTENED_RETREAT: "enableFrightenedRetreat",
  ENABLE_BLOODIED_RETREAT:   "enableBloodiedRetreat",
  RETREAT_SUBTYPE_KEYWORDS:  "retreatSubtypeKeywords",

  // Movement — Doors
  NPC_OPEN_DOORS:       "npcOpenDoors",

  // Debug
  VERBOSE_LOGGING:           "verboseLogging",         // legacy boolean — kept for back-compat
  PATHFINDING_DEBUG_LEVEL:   "pathfindingDebugLevel",  // Feature 20: off|minimal|verbose|trace
  DRAW_MOVEMENT_PATH:        "drawMovementPath",

  // Combat Behaviour — CR filter
  MAX_AUTOMATED_CR:     "maxAutomatedCR",

  // Runtime (non-config, in-memory/world storage)
  AUTOMATION_ACTIVE:    "automationActive",

  // ── Tactical AI layer (behavior.js / morale.js / archetypes.js) ──────────
  ENABLE_BEHAVIOR_AI:        "enableBehaviorAI",
  ENABLE_AI_INFERENCE:       "enableAiInference",
  ENABLE_MORALE:             "enableMorale",
  BEHAVIOR_AI_SPELLCASTER_FOCUS: "behaviorAISpellcasterFocus",
  BEHAVIOR_AI_PACK_TACTICS:  "behaviorAIPackTactics",
  BEHAVIOR_AI_OPPORTUNISM:   "behaviorAIOpportunism",

  // ── Movement Imperfection & Space Rules ───────────────────────────────────
  MOVEMENT_IMPERFECTION:     "movementImperfection",
  PASS_THROUGH_FALLEN:       "passThroughFallen",
  DIFFICULT_TERRAIN:         "difficultTerrain",
  KITE_REQUIRES_DISENGAGE:   "kiteRequiresDisengage",
  DISPOSITION_TARGETING:     "dispositionTargeting",

  // ── Elevation & 3D Movement ──────────────────────────────────────────────
  ENABLE_ELEVATION:          "enableElevation",

  // ── Behavioral Effects (Charm, Confusion, midi overrides) ────────────────
  ENABLE_EFFECT_OVERRIDES:   "enableEffectOverrides",

  // ── Condition behaviours (0.21) ───────────────────────────────────────────
  ENABLE_CONDITION_BEHAVIORS: "enableConditionBehaviors",
  COND_SUPPRESS_TURN:        "condSuppressTurn",
  COND_FRIGHTENED_RAW:       "condFrightenedRaw",
  COND_RESTRAINED:           "condRestrained",
  COND_COMMAND:              "condCommand",
  COND_DOMINATION:           "condDomination",
  COND_SLOW:                 "condSlow",
  COND_BLINDED:              "condBlinded",
  COND_BANISHMENT:           "condBanishment",
  COND_HASTE:                "condHaste",
  COND_SANCTUARY:            "condSanctuary",
  COND_SILENCE:              "condSilence",

  // ── midi-qol / Spellcaster Integration (DEPRECATED — kept for back-compat) ─
  /** @deprecated Use SPELL_ENABLED instead */
  ENABLE_MIDI_SPELLS:        "enableMidiSpells",
  /** @deprecated Replaced by archetype and cognitive profile system */
  SPELL_OVER_ATTACK_CR:      "spellOverAttackCR",

  // ── Spell AI (new in v1.0 spellcasting overhaul) ─────────────────────────
  SPELL_ENABLED:             "spellEnabled",
  SPELL_FRIENDLY_FIRE:       "spellFriendlyFire",
  SPELL_MIN_AOE_TARGETS:     "spellMinAOETargets",
  SPELL_SLOT_CONSERVATION:   "spellSlotConservation",
  ENFORCE_ONE_LEVELLED_SPELL: "enforceOneLevelledSpell",
  SPELL_DEBUG_SCORING:       "spellDebugScoring",
  // ── Reaction Support ─────────────────────────────────────────────────────
  ENABLE_REACTIONS:          "enableReactions",
  ENABLE_BONUS_ACTIONS:      "enableBonusActions",
  ENABLE_LEGENDARY_ACTIONS:  "enableLegendaryActions",
  ENABLE_LAIR_ACTIONS:       "enableLairActions",
  LEGENDARY_PAUSE:            "legendaryPause",
  LEGENDARY_BANNER:          "legendaryBanner",

  // ── Snapshot / Undo ───────────────────────────────────────────────────────
  SNAPSHOT_INCLUDE_RESOURCES: "snapshotIncludeResources",

  // ── Tactical movement (0.18) ──────────────────────────────────────────────
  ENABLE_FLANKING_MOVEMENT:  "enableFlankingMovement",
  ENABLE_SWIM_CLIMB_SPEED:   "enableSwimClimbSpeed",

  // ── Pathfinding refinement (0.19) ─────────────────────────────────────────
  PATHFIND_SINGLE_FLOOD:     "pathfindSingleFlood",
  PATHFIND_SMART_PARTIAL:    "pathfindSmartPartial",
  PATHFIND_LOS_MEMO:         "pathfindLosMemo",

  // ── Tracking refinement (0.19) ────────────────────────────────────────────
  TARGET_PERSISTENCE:        "targetPersistence",
  TARGET_GRUDGE_MEMORY:      "targetGrudgeMemory",
  SHARED_TARGET_MEMORY:      "sharedTargetMemory",

  // ── Reactivity refinement (0.19) ──────────────────────────────────────────
  ENABLE_OPPORTUNITY_ATTACKS: "enableOpportunityAttacks",
  RETARGET_ON_KILL:          "retargetOnKill",
  AOE_THREAT_MEMORY:         "aoeThreatMemory",

  // ── Morale visibility ─────────────────────────────────────────────────────
  MORALE_VISIBLE:            "moraleVisible",
  MORALE_VISIBLE_AUDIENCE:   "moraleVisibleAudience",

  // ── Dialogue / Combat Barks ──────────────────────────────────────────────
  DIALOGUE_ENABLED:          "dialogueEnabled",
  DIALOGUE_SPEECH_BUBBLES:   "dialogueSpeechBubbles",
  DIALOGUE_MIRROR_CHAT:      "dialogueMirrorChat",
  DIALOGUE_EFFORT_NOISES:    "dialogueEffortNoises",
  DIALOGUE_TRANSLATE_LANGUAGES: "dialogueTranslateLanguages",
  DIALOGUE_FREQUENCY:           "dialogueFrequency",
  DIALOGUE_COMBAT_ONLY:         "dialogueCombatOnly",
  DIALOGUE_JOURNAL_NAME:        "dialogueJournalName",
  DIALOGUE_BUBBLE_SCALE:        "dialogueBubbleScale",

  // ── Cinematic layer (Turn Spotlight + debrief) ────────────────────────────
  CINEMATIC_MODE:            "cinematicMode",
  SPOTLIGHT_CAMERA:          "spotlightCamera",
  COMBAT_DEBRIEF:            "combatDebrief",

  // ── AI Trace (observability) ──────────────────────────────────────────────
  AI_TRACE_ENABLED:          "aiTraceEnabled",
  AI_TRACE_AUTO_LOG:         "aiTraceAutoLog",
  AI_TRACE_BUFFER_SIZE:      "aiTraceBufferSize",

  // ── AI Behavior Iteration v1 (toggleable practical improvements) ──────────
  // Each can be flipped independently to A/B test feel at the table.
  AI_FINISHING_BLOW_BIAS:    "aiFinishingBlowBias",
  AI_REACHABILITY_PENALTY:   "aiReachabilityPenalty",
  AI_COVER_AWARE_PATHING:    "aiCoverAwarePathing",
  AI_SCOOT_TO_COVER:         "aiScootToCover",
};

// ─── getSetting / setSetting helpers ───────────────────────────────────────
export function getSetting(key) {
  return game.settings.get(MODULE_ID, key);
}

export function setSetting(key, value) {
  return game.settings.set(MODULE_ID, key, value);
}

// ─── Registration ───────────────────────────────────────────────────────────
export function registerSettings() {
  const loc = (key) => `NCA.Settings.${key}`;

  // ── General ──────────────────────────────────────────────────────────────

  game.settings.register(MODULE_ID, SETTINGS.ENABLED_BY_DEFAULT, {
    name: loc("EnableByDefault"),
    hint: loc("EnableByDefaultHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: false,
  });

  game.settings.register(MODULE_ID, SETTINGS.ACTION_DELAY, {
    name: loc("ActionDelay"),
    hint: loc("ActionDelayHint"),
    scope: "world",
    config: true,
    type: Number,
    default: 800,
    range: { min: 0, max: 5000, step: 100 },
  });

  game.settings.register(MODULE_ID, SETTINGS.ATTACK_DELAY, {
    name: loc("AttackDelay"),
    hint: loc("AttackDelayHint"),
    scope: "world",
    config: true,
    type: Number,
    default: 1200,
    range: { min: 0, max: 5000, step: 100 },
  });

  game.settings.register(MODULE_ID, SETTINGS.AUTO_END_TURN, {
    name: loc("AutoEndTurn"),
    hint: loc("AutoEndTurnHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.ENABLE_MOVEMENT, {
    name: loc("EnableMovement"),
    hint: loc("EnableMovementHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.ENABLE_CHAT_LOG, {
    name: loc("EnableChatLog"),
    hint: loc("EnableChatLogHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  // ── Combat Behaviour ──────────────────────────────────────────────────────

  game.settings.register(MODULE_ID, SETTINGS.PREFER_MULTIATTACK, {
    name: loc("PreferMultiattack"),
    hint: loc("PreferMultiattackHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.PREFER_MELEE, {
    name: loc("PreferMelee"),
    hint: loc("PreferMeleeHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.PREFER_RANGED, {
    name: loc("PreferRanged"),
    hint: loc("PreferRangedHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.IGNORE_UNCONSCIOUS, {
    name: loc("IgnoreUnconscious"),
    hint: loc("IgnoreUnconsciousHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.IGNORE_HIDDEN, {
    name: loc("IgnoreHidden"),
    hint: loc("IgnoreHiddenHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: false,
  });

  game.settings.register(MODULE_ID, SETTINGS.MAX_MOVEMENT, {
    name: loc("MaxMovement"),
    hint: loc("MaxMovementHint"),
    scope: "world",
    config: true,
    type: Number,
    default: 60,
    range: { min: 5, max: 300, step: 5 },
  });

  game.settings.register(MODULE_ID, SETTINGS.ENABLE_DASH, {
    name: loc("EnableDash"),
    hint: loc("EnableDashHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.DASH_PRESERVE_ACTION, {
    name: loc("DashPreserveAction"),
    hint: loc("DashPreserveActionHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.NPC_OPEN_DOORS, {
    name: loc("NpcOpenDoors"),
    hint: loc("NpcOpenDoorsHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.ENABLE_PURSUIT, {
    name: loc("EnablePursuit"),
    hint: loc("EnablePursuitHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.NATURAL_MOVEMENT, {
    name: loc("NaturalMovement"),
    hint: loc("NaturalMovementHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.MOVEMENT_STEP_DELAY, {
    name: loc("MovementStepDelay"),
    hint: loc("MovementStepDelayHint"),
    scope: "world",
    config: true,
    type: Number,
    default: 225,
    range: { min: 0, max: 1000, step: 25 },
  });

  game.settings.register(MODULE_ID, SETTINGS.FACE_MOVEMENT, {
    name: loc("FaceMovement"),
    hint: loc("FaceMovementHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.FACE_TARGET, {
    name: loc("FaceTarget"),
    hint: loc("FaceTargetHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.ROTATION_OFFSET, {
    name: loc("RotationOffset"),
    hint: loc("RotationOffsetHint"),
    scope: "world",
    config: true,
    type: Number,
    default: 180,
    range: { min: 0, max: 360, step: 15 },
  });

  game.settings.register(MODULE_ID, SETTINGS.ENABLE_FRIGHTENED_RETREAT, {
    name: loc("EnableFrightenedRetreat"),
    hint: loc("EnableFrightenedRetreatHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.ENABLE_BLOODIED_RETREAT, {
    name: loc("EnableBloodiedRetreat"),
    hint: loc("EnableBloodiedRetreatHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.RETREAT_SUBTYPE_KEYWORDS, {
    name: loc("RetreatSubtypeKeywords"),
    hint: loc("RetreatSubtypeKeywordsHint"),
    scope: "world",
    config: true,
    type: String,
    default: "coward, skittish, fearful, prey, survivalist",
  });

  game.settings.register(MODULE_ID, SETTINGS.MAX_AUTOMATED_CR, {
    name: loc("MaxAutomatedCR"),
    hint: loc("MaxAutomatedCRHint"),
    scope: "world",
    config: true,
    type: Number,
    default: 5,
    range: { min: 0, max: 30, step: 1 },
  });

  // ── Safety ────────────────────────────────────────────────────────────────

  game.settings.register(MODULE_ID, SETTINGS.PAUSE_ON_ERROR, {
    name: loc("PauseOnError"),
    hint: loc("PauseOnErrorHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.LETHAL_CONFIRM, {
    name: loc("LethalConfirm"),
    hint: loc("LethalConfirmHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: false,
  });

  game.settings.register(MODULE_ID, SETTINGS.MAX_ACTIONS_PER_TURN, {
    name: loc("MaxActionsPerTurn"),
    hint: loc("MaxActionsPerTurnHint"),
    scope: "world",
    config: true,
    type: Number,
    default: 6,
    range: { min: 1, max: 20, step: 1 },
  });

  // ── Debug ─────────────────────────────────────────────────────────────────

  // Feature 20 — replaces the old boolean verboseLogging toggle.
  game.settings.register(MODULE_ID, SETTINGS.PATHFINDING_DEBUG_LEVEL, {
    name: loc("PathfindingDebugLevel"),
    hint: loc("PathfindingDebugLevelHint"),
    scope: "world",
    config: true,
    type: String,
    // Foundry localizes choices values at render time when they are i18n keys.
    // Calling game.i18n.localize() here during `init` is fragile — the
    // language pack may not be loaded yet, and the cached strings won't
    // update if the user changes language mid-session.
    choices: {
      off:     "NCA.Settings.DebugLevel.Off",
      minimal: "NCA.Settings.DebugLevel.Minimal",
      verbose: "NCA.Settings.DebugLevel.Verbose",
      trace:   "NCA.Settings.DebugLevel.Trace",
    },
    default: "minimal",
  });

  // Legacy boolean kept for back-compat — hidden from menu.
  game.settings.register(MODULE_ID, SETTINGS.VERBOSE_LOGGING, {
    name: loc("VerboseLogging"),
    hint: loc("VerboseLoggingHint"),
    scope: "world",
    config: false,
    type: Boolean,
    default: false,
  });

  game.settings.register(MODULE_ID, SETTINGS.DRAW_MOVEMENT_PATH, {
    name: loc("DrawMovementPath"),
    hint: loc("DrawMovementPathHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: false,
  });

  // ── Runtime state (world-scoped so all clients share it) ──────────────────
  game.settings.register(MODULE_ID, SETTINGS.AUTOMATION_ACTIVE, {
    name: loc("AutomationActive"),
    scope: "world",
    config: false,    // hidden from normal settings menu
    type: Boolean,
    default: false,
  });

  // ── Tactical AI Layer ─────────────────────────────────────────────────────

  game.settings.register(MODULE_ID, SETTINGS.ENABLE_BEHAVIOR_AI, {
    name: loc("EnableBehaviorAI"),
    hint: loc("EnableBehaviorAIHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.ENABLE_AI_INFERENCE, {
    name: loc("EnableAiInference"),
    hint: loc("EnableAiInferenceHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.ENABLE_MORALE, {
    name: loc("EnableMorale"),
    hint: loc("EnableMoraleHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.BEHAVIOR_AI_SPELLCASTER_FOCUS, {
    name: loc("BehaviorAISpellcasterFocus"),
    hint: loc("BehaviorAISpellcasterFocusHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.BEHAVIOR_AI_PACK_TACTICS, {
    name: loc("BehaviorAIPackTactics"),
    hint: loc("BehaviorAIPackTacticsHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.BEHAVIOR_AI_OPPORTUNISM, {
    name: loc("BehaviorAIOpportunism"),
    hint: loc("BehaviorAIOpportunismHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });
}

// ── Movement Imperfection / Space Rules / Disposition Targeting ───────────────
// These registrations are appended after the closing brace of registerSettings()
// and called via a second pass in main.js (or by reopening the function export).
// In practice, splice these three blocks inside registerSettings() above the
// final closing brace when integrating into the shipped file.

export function registerExtendedSettings() {
  const loc = (key) => `NCA.Settings.${key}`;

  game.settings.register(MODULE_ID, "movementImperfection", {
    name: loc("MovementImperfection"),
    hint: loc("MovementImperfectionHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, "passThroughFallen", {
    name: loc("PassThroughFallen"),
    hint: loc("PassThroughFallenHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.DIFFICULT_TERRAIN, {
    name: loc("DifficultTerrain"),
    hint: loc("DifficultTerrainHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.KITE_REQUIRES_DISENGAGE, {
    name: loc("KiteRequiresDisengage"),
    hint: loc("KiteRequiresDisengageHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, "dispositionTargeting", {
    name: loc("DispositionTargeting"),
    hint: loc("DispositionTargetingHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  // ── Elevation / 3D Movement ───────────────────────────────────────────────

  game.settings.register(MODULE_ID, "enableElevation", {
    name: loc("EnableElevation"),
    hint: loc("EnableElevationHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  // ── Behavioral Effects ────────────────────────────────────────────────────

  game.settings.register(MODULE_ID, "enableEffectOverrides", {
    name: loc("EnableEffectOverrides"),
    hint: loc("EnableEffectOverridesHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  // ── Spell AI (NCA v1.0 Spellcasting Overhaul) ────────────────────────────

  game.settings.register(MODULE_ID, SETTINGS.SPELL_ENABLED, {
    name: loc("SpellEnabled"),
    hint: loc("SpellEnabledHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.SPELL_FRIENDLY_FIRE, {
    name: loc("SpellFriendlyFire"),
    hint: loc("SpellFriendlyFireHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: false,
  });

  game.settings.register(MODULE_ID, SETTINGS.SPELL_MIN_AOE_TARGETS, {
    name: loc("SpellMinAOETargets"),
    hint: loc("SpellMinAOETargetsHint"),
    scope: "world",
    config: true,
    type: Number,
    default: 2,
    range: { min: 1, max: 6, step: 1 },
  });

  game.settings.register(MODULE_ID, SETTINGS.SPELL_SLOT_CONSERVATION, {
    name: loc("SpellSlotConservation"),
    hint: loc("SpellSlotConservationHint"),
    scope: "world",
    config: true,
    type: String,
    // Use localization KEYS here — Foundry localizes them at render time.
    // Calling game.i18n.localize() during `init` is unreliable (language pack
    // load order) and caches stale strings if the user changes language.
    choices: {
      archetype: "NCA.Settings.SpellConservation.Archetype",
      none:      "NCA.Settings.SpellConservation.None",
      moderate:  "NCA.Settings.SpellConservation.Moderate",
      strong:    "NCA.Settings.SpellConservation.Strong",
    },
    default: "archetype",
  });

  game.settings.register(MODULE_ID, SETTINGS.ENFORCE_ONE_LEVELLED_SPELL, {
    name: loc("EnforceOneLevelledSpell"),
    hint: loc("EnforceOneLevelledSpellHint"),
    scope: "world", config: true, type: Boolean, default: true,
  });

  // ─── Condition behaviours (0.21) ──────────────────────────────────────────
  game.settings.register(MODULE_ID, SETTINGS.ENABLE_CONDITION_BEHAVIORS, {
    name: loc("EnableConditionBehaviors"),
    hint: loc("EnableConditionBehaviorsHint"),
    scope: "world", config: true, type: Boolean, default: true,
  });
  game.settings.register(MODULE_ID, SETTINGS.COND_SUPPRESS_TURN, {
    name: loc("CondSuppressTurn"),
    hint: loc("CondSuppressTurnHint"),
    scope: "world", config: true, type: Boolean, default: true,
  });
  game.settings.register(MODULE_ID, SETTINGS.COND_FRIGHTENED_RAW, {
    name: loc("CondFrightenedRaw"),
    hint: loc("CondFrightenedRawHint"),
    scope: "world", config: true, type: Boolean, default: true,
  });
  game.settings.register(MODULE_ID, SETTINGS.COND_RESTRAINED, {
    name: loc("CondRestrained"),
    hint: loc("CondRestrainedHint"),
    scope: "world", config: true, type: Boolean, default: true,
  });
  game.settings.register(MODULE_ID, SETTINGS.COND_COMMAND, {
    name: loc("CondCommand"),
    hint: loc("CondCommandHint"),
    scope: "world", config: true, type: Boolean, default: true,
  });
  game.settings.register(MODULE_ID, SETTINGS.COND_DOMINATION, {
    name: loc("CondDomination"),
    hint: loc("CondDominationHint"),
    scope: "world", config: true, type: Boolean, default: true,
  });
  game.settings.register(MODULE_ID, SETTINGS.COND_SLOW, {
    name: loc("CondSlow"),
    hint: loc("CondSlowHint"),
    scope: "world", config: true, type: Boolean, default: true,
  });
  game.settings.register(MODULE_ID, SETTINGS.COND_BLINDED, {
    name: loc("CondBlinded"),
    hint: loc("CondBlindedHint"),
    scope: "world", config: true, type: Boolean, default: true,
  });
  game.settings.register(MODULE_ID, SETTINGS.COND_BANISHMENT, {
    name: loc("CondBanishment"),
    hint: loc("CondBanishmentHint"),
    scope: "world", config: true, type: Boolean, default: true,
  });
  game.settings.register(MODULE_ID, SETTINGS.COND_HASTE, {
    name: loc("CondHaste"),
    hint: loc("CondHasteHint"),
    scope: "world", config: true, type: Boolean, default: true,
  });
  game.settings.register(MODULE_ID, SETTINGS.COND_SANCTUARY, {
    name: loc("CondSanctuary"),
    hint: loc("CondSanctuaryHint"),
    scope: "world", config: true, type: Boolean, default: true,
  });
  game.settings.register(MODULE_ID, SETTINGS.COND_SILENCE, {
    name: loc("CondSilence"),
    hint: loc("CondSilenceHint"),
    scope: "world", config: true, type: Boolean, default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.SPELL_DEBUG_SCORING, {
    name: loc("SpellDebugScoring"),
    hint: loc("SpellDebugScoringHint"),
    scope: "client",
    config: true,
    type: Boolean,
    default: false,
  });

  // ── midi-qol legacy settings — kept so existing worlds don't error on load ─

  game.settings.register(MODULE_ID, SETTINGS.ENABLE_MIDI_SPELLS, {
    name: loc("EnableMidiSpellsExt"),
    hint: loc("EnableMidiSpellsHintExt"),
    scope: "world",
    config: false,   // hidden; migrated users won't see it
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.SPELL_OVER_ATTACK_CR, {
    name: loc("SpellOverAttackCr"),
    hint: loc("SpellOverAttackCrHint"),
    scope: "world",
    config: false,
    type: Number,
    default: 3,
    range: { min: 0, max: 30, step: 1 },
  });

  // ── Reaction Support ──────────────────────────────────────────────────────

  game.settings.register(MODULE_ID, SETTINGS.ENABLE_REACTIONS, {
    name: loc("EnableReactions"),
    hint: loc("EnableReactionsHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.ENABLE_BONUS_ACTIONS, {
    name: loc("EnableBonusActions"),
    hint: loc("EnableBonusActionsHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.ENABLE_LEGENDARY_ACTIONS, {
    name: loc("EnableLegendaryActions"),
    hint: loc("EnableLegendaryActionsHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.ENABLE_LAIR_ACTIONS, {
    name: loc("EnableLairActions"),
    hint: loc("EnableLairActionsHint"),
    scope: "world", config: true, type: Boolean, default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.LEGENDARY_BANNER, {
    name: loc("LegendaryBanner"),
    hint: loc("LegendaryBannerHint"),
    scope: "client", config: true, type: Boolean, default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.LEGENDARY_PAUSE, {
    name: loc("LegendaryPause"),
    hint: loc("LegendaryPauseHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: false,
  });

  game.settings.register(MODULE_ID, SETTINGS.SNAPSHOT_INCLUDE_RESOURCES, {
    name: loc("SnapshotIncludeResources"),
    hint: loc("SnapshotIncludeResourcesHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.ENABLE_FLANKING_MOVEMENT, {
    name: loc("EnableFlankingMovement"),
    hint: loc("EnableFlankingMovementHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: false,
  });

  game.settings.register(MODULE_ID, SETTINGS.ENABLE_SWIM_CLIMB_SPEED, {
    name: loc("EnableSwimClimbSpeed"),
    hint: loc("EnableSwimClimbSpeedHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  // ─── 0.19 AI refinement pass ────────────────────────────────────────────

  game.settings.register(MODULE_ID, SETTINGS.PATHFIND_SINGLE_FLOOD, {
    name: loc("PathfindSingleFlood"),
    hint: loc("PathfindSingleFloodHint"),
    scope: "world", config: true, type: Boolean, default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.PATHFIND_SMART_PARTIAL, {
    name: loc("PathfindSmartPartial"),
    hint: loc("PathfindSmartPartialHint"),
    scope: "world", config: true, type: Boolean, default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.PATHFIND_LOS_MEMO, {
    name: loc("PathfindLosMemo"),
    hint: loc("PathfindLosMemoHint"),
    scope: "world", config: true, type: Boolean, default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.TARGET_PERSISTENCE, {
    name: loc("TargetPersistence"),
    hint: loc("TargetPersistenceHint"),
    scope: "world", config: true, type: Boolean, default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.TARGET_GRUDGE_MEMORY, {
    name: loc("TargetGrudgeMemory"),
    hint: loc("TargetGrudgeMemoryHint"),
    scope: "world", config: true, type: Boolean, default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.SHARED_TARGET_MEMORY, {
    name: loc("SharedTargetMemory"),
    hint: loc("SharedTargetMemoryHint"),
    scope: "world", config: true, type: Boolean, default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.ENABLE_OPPORTUNITY_ATTACKS, {
    name: loc("EnableOpportunityAttacks"),
    hint: loc("EnableOpportunityAttacksHint"),
    scope: "world", config: true, type: Boolean, default: false,
  });

  game.settings.register(MODULE_ID, SETTINGS.RETARGET_ON_KILL, {
    name: loc("RetargetOnKill"),
    hint: loc("RetargetOnKillHint"),
    scope: "world", config: true, type: Boolean, default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.AOE_THREAT_MEMORY, {
    name: loc("AoeThreatMemory"),
    hint: loc("AoeThreatMemoryHint"),
    scope: "world", config: true, type: Boolean, default: false,
  });


  game.settings.register(MODULE_ID, SETTINGS.MORALE_VISIBLE, {
    name: loc("MoraleVisible"),
    hint: loc("MoraleVisibleHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: false,
  });

  game.settings.register(MODULE_ID, SETTINGS.MORALE_VISIBLE_AUDIENCE, {
    name: loc("MoraleVisibleAudience"),
    hint: loc("MoraleVisibleAudienceHint"),
    scope: "world",
    config: true,
    type: String,
    choices: {
      gm:        "GM only",
      assistant: "GM & Assistant GM",
      trusted:   "GM, Assistant & Trusted Players",
      player:    "Everyone (all players)",
    },
    default: "gm",
  });

  // ── Dialogue / Combat Barks ───────────────────────────────────────────────

  game.settings.register(MODULE_ID, "dialogueEnabled", {
    name: loc("DialogueEnabled"),
    hint: loc("DialogueEnabledHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, "dialogueSpeechBubbles", {
    name: loc("DialogueSpeechBubbles"),
    hint: loc("DialogueSpeechBubblesHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, "dialogueMirrorChat", {
    name: loc("DialogueMirrorChat"),
    hint: loc("DialogueMirrorChatHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: false,
  });

  game.settings.register(MODULE_ID, "dialogueCombatOnly", {
    name: loc("DialogueCombatOnly"),
    hint: loc("DialogueCombatOnlyHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, "dialogueEffortNoises", {
    name: loc("DialogueEffortNoises"),
    hint: loc("DialogueEffortNoisesHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, "dialogueTranslateLanguages", {
    name: loc("DialogueTranslateLanguages"),
    hint: loc("DialogueTranslateLanguagesHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, "dialogueFrequency", {
    name: loc("DialogueFrequency"),
    hint: loc("DialogueFrequencyHint"),
    scope: "world",
    config: true,
    type: Number,
    default: 5,
    range: { min: 1, max: 10, step: 1 },
  });

  game.settings.register(MODULE_ID, "dialogueJournalName", {
    name: loc("DialogueJournalName"),
    hint: loc("DialogueJournalNameHint"),
    scope: "world",
    config: true,
    type: String,
    default: "NCA Dialogue",
  });

  game.settings.register(MODULE_ID, "dialogueBubbleScale", {
    name: loc("DialogueBubbleScale"),
    hint: loc("DialogueBubbleScaleHint"),
    scope: "client",
    config: true,
    type: Number,
    default: 1.0,
    range: { min: 0.5, max: 3.0, step: 0.1 },
    onChange: value => {
      document.documentElement.style.setProperty("--nca-bubble-scale", String(value));
    },
  });

  // "Open Dialogue Journal" button — creates it if needed, then opens it.
  //
  // Migrated from the deprecated FormApplication pattern to ApplicationV2
  // (V13-native). The class is a pure action trigger: render() performs the
  // journal open/create and never actually mounts a window. _renderHTML /
  // _replaceHTML are stubbed because ApplicationV2 is abstract without them,
  // even though they are never reached.
  game.settings.registerMenu(MODULE_ID, "openDialogueJournal", {
    name: loc("OpenDialogueJournal"),
    label: loc("OpenDialogueJournalLabel"),
    hint: loc("OpenDialogueJournalHint"),
    icon: "fas fa-book-open",
    type: class extends foundry.applications.api.ApplicationV2 {
      async _renderHTML() { return ""; }
      _replaceHTML() {}
      async render() {
        // Lazy import avoids circular deps at registration time
        try {
          const { openOrCreateDialogueJournal } = await import("./dialogue-journal.js");
          await openOrCreateDialogueJournal();
        } catch (err) {
          console.error("[NCA] Failed to open dialogue journal:", err);
          ui.notifications?.error("Failed to open NCA Dialogue Journal — see console.");
        }
        return this;
      }
    },
    restricted: true,
  });

  // ── AI Trace ──────────────────────────────────────────────────────────────
  // Client-scoped: individual GMs flip this on per session without
  // committing the choice to world data.
  // ── Cinematic layer ───────────────────────────────────────────────────────
  game.settings.register(MODULE_ID, SETTINGS.CINEMATIC_MODE, {
    name: loc("CinematicMode"),
    hint: loc("CinematicModeHint"),
    scope: "client",
    config: true,
    type: String,
    choices: {
      off:    loc("CinematicModeOff"),
      subtle: loc("CinematicModeSubtle"),
      full:   loc("CinematicModeFull"),
    },
    default: "subtle",
  });

  game.settings.register(MODULE_ID, SETTINGS.SPOTLIGHT_CAMERA, {
    name: loc("SpotlightCamera"),
    hint: loc("SpotlightCameraHint"),
    scope: "client",
    config: true,
    type: Boolean,
    default: false,
  });

  game.settings.register(MODULE_ID, SETTINGS.COMBAT_DEBRIEF, {
    name: loc("CombatDebrief"),
    hint: loc("CombatDebriefHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.AI_TRACE_ENABLED, {
    name: loc("AiTraceEnabled"),
    hint: loc("AiTraceEnabledHint"),
    scope: "client",
    config: true,
    type: Boolean,
    default: false,
  });

  game.settings.register(MODULE_ID, SETTINGS.AI_TRACE_AUTO_LOG, {
    name: loc("AiTraceAutoLog"),
    hint: loc("AiTraceAutoLogHint"),
    scope: "client",
    config: true,
    type: Boolean,
    default: false,
  });

  game.settings.register(MODULE_ID, SETTINGS.AI_TRACE_BUFFER_SIZE, {
    name: loc("AiTraceBufferSize"),
    hint: loc("AiTraceBufferSizeHint"),
    scope: "client",
    config: true,
    type: Number,
    default: 500,
    range: { min: 50, max: 5000, step: 50 },
  });

  // ── AI Behavior Iteration v1 ──────────────────────────────────────────────
  // Three practical, individually-toggleable changes. Default ON so they take
  // effect immediately on install, but each can be disabled to compare feel.
  game.settings.register(MODULE_ID, SETTINGS.AI_FINISHING_BLOW_BIAS, {
    name: loc("AiFinishingBlowBias"),
    hint: loc("AiFinishingBlowBiasHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.AI_REACHABILITY_PENALTY, {
    name: loc("AiReachabilityPenalty"),
    hint: loc("AiReachabilityPenaltyHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.AI_COVER_AWARE_PATHING, {
    name: loc("AiCoverAwarePathing"),
    hint: loc("AiCoverAwarePathingHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS.AI_SCOOT_TO_COVER, {
    name: loc("AiScootToCover"),
    hint: loc("AiScootToCoverHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });
}
