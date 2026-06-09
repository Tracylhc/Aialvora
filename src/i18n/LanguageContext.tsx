import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { languages, LanguageKey, Translation } from './languages';

interface LanguageContextType {
  currentLang: LanguageKey;
  setLanguage: (lang: LanguageKey) => void;
  t: (key: keyof Translation) => string;
  languageNames: { key: LanguageKey; name: string; flag: string }[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getDefaultLanguage(): LanguageKey {
  const saved = localStorage.getItem('language');
  if (saved) {
    return saved as LanguageKey;
  }

  const languages = navigator.languages || [navigator.language];
  for (const lang of languages) {
    if (lang.startsWith('zh')) {
      return 'zh';
    }
  }

  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLang, setCurrentLang] = useState<LanguageKey>(getDefaultLanguage);

  useEffect(() => {
    localStorage.setItem('language', currentLang);
  }, [currentLang]);

  const setLanguage = (lang: LanguageKey) => {
    setCurrentLang(lang);
  };

  const t = (key: keyof Translation) => {
    return languages[currentLang].translations[key] || key;
  };

  const languageNames = Object.entries(languages).map(([key, value]) => ({
    key: key as LanguageKey,
    name: value.name,
    flag: value.flag,
  }));

  return (
    <LanguageContext.Provider value={{ currentLang, setLanguage, t, languageNames }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}