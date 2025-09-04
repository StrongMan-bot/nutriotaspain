import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import it from './locales/it.json';
import en from './locales/en.json';
import it_products from './locales/it_products.json';
import en_products from './locales/en_products.json';
import it_news from './locales/it_news.json';
import en_news from './locales/en_news.json';
import it_news0 from './locales/it_news0.json';
import en_news0 from './locales/en_news0.json';
import it_news1 from './locales/it_news1.json';
import en_news1 from './locales/en_news1.json';
import it_news2 from './locales/it_news2.json';
import en_news2 from './locales/en_news2.json';
import it_news3 from './locales/it_news3.json';
import en_news3 from './locales/en_news3.json';
import it_news4 from './locales/it_news4.json';
import en_news4 from './locales/en_news4.json';
import it_news5 from './locales/it_news5.json';
import en_news5 from './locales/en_news5.json';
import it_news6 from './locales/it_news6.json';
import en_news6 from './locales/en_news6.json';
import it_testimonial from './locales/it_testimonial.json';
import en_testimonial from './locales/en_testimonial.json';
import it_learnnews from './locales/it_learnnews.json';
import en_learnnews from './locales/en_learnnews.json';

// Import product translation files
import it_product1 from './locales/it_product1.json';
import en_product1 from './locales/en_product1.json';
import it_product2 from './locales/it_product2.json';
import en_product2 from './locales/en_product2.json';
import it_product3 from './locales/it_product3.json';
import en_product3 from './locales/en_product3.json';
import it_product4 from './locales/it_product4.json';
import en_product4 from './locales/en_product4.json';
import it_product5 from './locales/it_product5.json';
import en_product5 from './locales/en_product5.json';
import it_product6 from './locales/it_product6.json';
import en_product6 from './locales/en_product6.json';
import it_product7 from './locales/it_product7.json';
import en_product7 from './locales/en_product7.json';
import it_product8 from './locales/it_product8.json';
import en_product8 from './locales/en_product8.json';
import it_product9 from './locales/it_product9.json';
import en_product9 from './locales/en_product9.json';

const resources = {
  it: {
    translation: it,
    products: it_products,
    news: it_news,
    news0: it_news0,
    news1: it_news1,
    news2: it_news2,
    news3: it_news3,
    news4: it_news4,
    news5: it_news5,
    news6: it_news6,
    testimonial: it_testimonial,
    learnnews: it_learnnews,
    product1: it_product1,
    product2: it_product2,
    product3: it_product3,
    product4: it_product4,
    product5: it_product5,
    product6: it_product6,
    product7: it_product7,
    product8: it_product8,
    product9: it_product9
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
    product3: en_product3,
    product4: en_product4,
    product5: en_product5,
    product6: en_product6,
    product7: en_product7,
    product8: en_product8,
    product9: en_product9
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // English fallback
    lng: 'it', // Explicitly set Italian as default
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