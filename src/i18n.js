import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(initReactI18next)
  .use(LanguageDetector)
  
  .init({
    
    fallbackLng: "en",
    detection: {
      order: ["path", "localStorage", "htmlTag", "cookie"],
      caches: ["localStorage", "cookie"], // cache user language on
    },
    interpolation: {
      format: (value, format, lng) => {
        if (format === "number") {
          return new Intl.NumberFormat(lng).format(value);
        }
        if (format === "date") {
          return new Intl.DateTimeFormat(lng).format(value);
        }
        if (format === "currency") {
          return new Intl.NumberFormat(lng, {
            style: "currency",
            currency: "USD",
          }).format(value);
        }
      },
      escapeValue: false, // react already safes from xss
    },
    backend: {
        loadPath: `/locales/{{lng}}/{{ns}}.json`, // Path to translation files
  }
    });

export default i18n;