import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import sp from './locales/sp.json';
import en from './locales/en.json';
import sp_products from './locales/sp_products.json';
import en_products from './locales/en_products.json';
import sp_news from './locales/sp_news.json';
import en_news from './locales/en_news.json';
import sp_news0 from './locales/sp_news0.json';
import en_news0 from './locales/en_news0.json';
import sp_news1 from './locales/sp_news1.json';
import en_news1 from './locales/en_news1.json';
import sp_news2 from './locales/sp_news2.json';
import en_news2 from './locales/en_news2.json';
import sp_news3 from './locales/sp_news3.json';
import en_news3 from './locales/en_news3.json';
import sp_news4 from './locales/sp_news4.json';
import en_news4 from './locales/en_news4.json';
import sp_news5 from './locales/sp_news5.json';
import en_news5 from './locales/en_news5.json';
import sp_news6 from './locales/sp_news6.json';
import en_news6 from './locales/en_news6.json';
import sp_testimonial from './locales/sp_testimonial.json';
import en_testimonial from './locales/en_testimonial.json';
import sp_learnnews from './locales/sp_learnnews.json';
import en_learnnews from './locales/en_learnnews.json';

// Import product translation files
import sp_product1 from './locales/sp_product1.json';
import en_product1 from './locales/en_product1.json';
import sp_product2 from './locales/sp_product2.json';
import en_product2 from './locales/en_product2.json';
import sp_product3 from './locales/sp_product3.json';
import en_product3 from './locales/en_product3.json';

const resources = {
  sp: {
    translation: sp,
    products: sp_products,
    news: sp_news,
    news0: sp_news0,
    news1: sp_news1,
    news2: sp_news2,
    news3: sp_news3,
    news4: sp_news4,
    news5: sp_news5,
    news6: sp_news6,
    testimonial: sp_testimonial,
    learnnews: sp_learnnews,
    product1: sp_product1,
    product2: sp_product2,
    product3: sp_product3
  },
  en: {
    translation: en,
    products: en_products,
    news: en_news,
    news0: en_news0,
    news1: en_news1,
    news2: en_news2,
    news3: en_news3,
    news4: en_news4,
    news5: en_news5,
    news6: en_news6,
    testimonial: en_testimonial,
    learnnews: en_learnnews,
    product1: en_product1,
    product2: en_product2,
    product3: en_product3
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // English fallback
    lng: 'sp', // Explicitly set Spanish as default
    debug: false,
    
    // Ensure synchronous loading for react-snap
    initImmediate: false,
    react: {
      useSuspense: false // Disable Suspense for react-snap compatibility
    },
    
    interpolation: {
      escapeValue: false
    },

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage']
    }
  });

export default i18n;