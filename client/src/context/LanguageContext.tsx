import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations } from '../locales/translations';

interface LanguageContextType {
  lang: Language;
  t: typeof translations.en;
  toggleLang: () => void;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('ar'); // Default to Arabic given the context

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const t = translations[lang];
  const isRtl = lang === 'ar';

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
