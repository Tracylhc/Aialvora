import { useState, useEffect } from 'react';
import { ArrowUp, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../i18n/LanguageContext';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <div className={`transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          title={t('backToTop')}
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
      <button
        onClick={toggleTheme}
        className="w-12 h-12 bg-gray-800 dark:bg-gray-700 text-white dark:text-gray-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        title={theme === 'light' ? t('toggleDarkMode') : t('toggleLightMode')}
      >
        {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
      </button>
    </div>
  );
}