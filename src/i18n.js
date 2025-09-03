import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locals/en/navbar.json";
import ar from "./locals/ar/navbar.json";
import enhome from "./locals/en/home.json";
import arhome from "./locals/ar/home.json";
import enAbout from "./locals/en/about.json";
import arAbout from "./locals/ar/about.json";
import enservices from "./locals/en/services.json";
import arservices from "./locals/ar/services.json";
import endepartments from "./locals/en/departments.json";
import ardepartments from "./locals/ar/departments.json";  
import arwhyus from "./locals/ar/whyus.json";
import enwhyus from "./locals/en/whyus.json";
import artestomonial from "./locals/ar/testomnial.json";
import entestomonial from "./locals/en/testomnial.json";
import arcontact from "./locals/ar/contact.json";
import encontact from "./locals/en/contact.json";
import arfooter from "./locals/ar/footer.json";
import enfooter from "./locals/en/footer.json";
import LanguageDetector from "i18next-browser-languagedetector";

// i18n.use(initReactI18next).init({
  
//   resources: {
//     en: {
//       navbar : en,
//       home : enhome,
//       about: enAbout,
//       services : enservices,
//       departments: endepartments,
//       whyus: enwhyus,
//       testomonial: entestomonial,
//       contact : encontact,
//       footer: enfooter,

//     },
//     ar: {
//       navbar: ar,
//       home : arhome,
//       about: arAbout,
//       services : arservices,
//       departments: ardepartments,
//       whyus: arwhyus,
//       testomonial: artestomonial,
//       contact : arcontact,
//       footer: arfooter,
      
//     },
//   },
  
//   lng: "en", // اللغة الافتراضية
//   fallbackLng: "en",
//   interpolation: {
//     escapeValue: false,
//   },
// });

// export default i18n;



i18n
  .use(LanguageDetector) // هنا بنستخدم detector
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        navbar: en,
        home: enhome,
        about: enAbout,
        services: enservices,
        departments: endepartments,
        whyus: enwhyus,
        testomonial: entestomonial,
        contact: encontact,
        footer: enfooter,
      },
      ar: {
        navbar: ar,
        home: arhome,
        about: arAbout,
        services: arservices,
        departments: ardepartments,
        whyus: arwhyus,
        testomonial: artestomonial,
        contact: arcontact,
        footer: arfooter,
      },
    },
    fallbackLng: "en", // لو مش لاقي لغة
    interpolation: {
      escapeValue: false,
    },
    detection: {
      // ضبط اللغة حسب الاختيار السابق للمستخدم
      order: ["localStorage", "navigator"],
      caches: ["localStorage"], // هنا بنخزن اللغة في localStorage
    },
  });

export default i18n;
