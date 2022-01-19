import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { TRANSLATIONS_EN } from "./en";
import { TRANSLATIONS_PL } from "./pl";

i18next.use(initReactI18next).init({
  react: {
    transWrapTextNodes: "span",
  },
  debug: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: TRANSLATIONS_EN,
    },
    pl: {
      translation: TRANSLATIONS_PL,
    },
  },
});

export default i18next;
