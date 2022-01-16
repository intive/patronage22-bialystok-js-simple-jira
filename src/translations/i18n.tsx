import i18next from "i18next";
import { initReactI18next } from "react-i18next";

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
      translation: {
        paragraph1: "If button looks nice and smooth - Material UI works",
        paragraph2: "If colors are black and white - Styled components works",
        paragraph3: "If you see this page - React Router works",
        paragraph4:
          "If it's countig here when you're\nswitching pages - Redux works",
        button1: "Click here to check if React Router works",
        button2: "click to return to the previous page",
      },
    },
    pl: {
      translation: {
        paragraph1: "Jeśli przycisk wygląda ładnie - Material UI działa",
        paragraph2: "Jeśli kolory to czarny i biały - Styled components działa",
        paragraph3: "Jeśli widzisz tę stronę - React Router działa",
        paragraph4:
          "Jeśli licznik zmienia się podczas\nzmiany stron - Redux działa",
        button1: "kliknij żeby sprawdzić czy React Router działa",
        button2: "kliknij by powrócić do poprzedniej strony",
      },
    },
  },
});

export default i18next;
