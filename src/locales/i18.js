import { createI18n } from "vue-i18n";
/**
 * json spanish
 */
import es from "./es.json"

/**
 * Create i18n for locales
 */

const i18n = createI18n({
  locale: "es",
  messages: {
    es: es
  }
})

export default i18n;