import { createI18n } from "vue-i18n";
import es from "./es.json"

const i18n = createI18n({
  locale: "es",
  messages: {
    es: es
  }
})

export default i18n;