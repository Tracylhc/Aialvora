
import { useState } from 'react';
import { Menu, X, Sparkles, Globe } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { t, currentLang, setLanguage, languageNames } = useLanguage();

  const navItems = [
    { name: t('home'), path: '/' },
    { name: t('tools'), path: '/tools' },
    { name: t('ranking'), path: '/ranking' },
    { name: t('tutorials'), path: '/tutorials' },
    { name: t('prompts'), path: '/prompts' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 dark:bg-gray-800/95 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-base font-bold text-gray-900 dark:text-white hidden sm:inline">{t('siteName')}</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="text-gray-600 hover:text-orange-600 transition-colors font-medium text-sm dark:text-gray-300 dark:hover:text-orange-500"
              >
                {item.name}
              </a>
            ))}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 px-3 py-1.5 text-gray-600 hover:text-orange-600 transition-colors font-medium text-sm dark:text-gray-300 dark:hover:text-orange-500"
              >
                <Globe className="w-4 h-4" />
                {languageNames.find(l => l.key === currentLang)?.flag}
              </button>
              {isLangMenuOpen && (
                <div className="absolute top-full right-0 mt-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 py-1 z-50">
                  {languageNames.map((lang) => (
                    <button
                      key={lang.key}
                      onClick={() => {
                        setLanguage(lang.key);
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                        currentLang === lang.key
                          ? 'bg-orange-50 text-orange-600 dark:bg-gray-700'
                          : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <a
              href="/submit"
              className="px-4 py-1.5 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg text-sm font-medium hover:shadow-md transition-all"
            >
              {t('submit')}
            </a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 dark:text-gray-300"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-3 border-t border-gray-100 dark:border-gray-700">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors dark:text-gray-300 dark:hover:bg-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-2 mt-2">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="w-full flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  <Globe className="w-4 h-4" />
                  {t('language')}: {languageNames.find(l => l.key === currentLang)?.name}
                </button>
                {isLangMenuOpen && (
                  <div className="mt-1 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 py-1">
                    {languageNames.map((lang) => (
                      <button
                        key={lang.key}
                        onClick={() => {
                          setLanguage(lang.key);
                          setIsLangMenuOpen(false);
                        }}
                        className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                          currentLang === lang.key
                            ? 'bg-orange-50 text-orange-600 dark:bg-gray-700'
                            : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <a
                href="/submit"
                className="mx-2 mt-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('submit')}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
