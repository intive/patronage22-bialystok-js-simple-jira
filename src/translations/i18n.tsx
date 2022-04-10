import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import pl from "./pl.json";

const checkBrowserLanguage = () => {
  const currentBrowserLanguage = navigator.language;
  if (currentBrowserLanguage === "en" || currentBrowserLanguage === "en-US") {
    return "en";
  } else {
    return "pl";
  }
};

i18next.use(initReactI18next).init({
  react: {
    transWrapTextNodes: "span",
  },
  debug: true,
  fallbackLng: checkBrowserLanguage(),
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: en,
    },
    pl: {
      translation: pl,
    },
  },
});

export default i18next;
