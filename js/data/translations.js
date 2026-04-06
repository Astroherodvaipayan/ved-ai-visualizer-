// =============================================================================
// Translations Module — Aggregator
// =============================================================================

import { enUI } from "./locales/ui/en.js";
import { hiUI } from "./locales/ui/hi.js";
import { knUI } from "./locales/ui/kn.js";
import { taUI } from "./locales/ui/ta.js";
import { teUI } from "./locales/ui/te.js";

/**
 * All UI translations organized by language code.
 * Element and Ion data are loaded dynamically via langController.js.
 */
export const translations = {
  "en": enUI,
  "hi": hiUI,
  "kn": knUI,
  "ta": taUI,
  "te": teUI
};
