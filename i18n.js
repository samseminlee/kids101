
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: { "welcome": "Welcome!", "parent": "Parent Request", "sitter": "Sitter Register", "reviews": "Reviews" } },
    ko: { translation: { "welcome": "환영합니다!", "parent": "부모 신청", "sitter": "시터 등록", "reviews": "리뷰" } },
    zh: { translation: { "welcome": "欢迎!", "parent": "父母申请", "sitter": "保姆注册", "reviews": "评论" } },
    yue: { translation: { "welcome": "歡迎!", "parent": "父母申請", "sitter": "保姆登記", "reviews": "評論" } },
    hi: { translation: { "welcome": "स्वागत है!", "parent": "अभिभावक अनुरोध", "sitter": "सिटर पंजीकरण", "reviews": "समीक्षा" } }
  },
  lng: "ko",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
