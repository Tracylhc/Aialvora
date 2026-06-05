
import { useState, useEffect, useRef } from 'react';
import { TrendingUp, Clock, Flame, ArrowRight, Search, Grid3X3, Zap } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ToolCard from '../components/ToolCard';
import ToolLogo from '../components/ToolLogo';
import BackToTop from '../components/BackToTop';
import { tools, getToolsByCategory } from '../data/tools';
import { categories, getCategoryName } from '../data/categories';
import { useLanguage } from '../i18n/LanguageContext';
import { getLocalizedTool } from '../data/tools-i18n';

export default function HomePage() {
  const { t, currentLang } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolledCategory, setScrolledCategory] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const categoryRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const searchFormRef = useRef<HTMLFormElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/tools?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  const handleSearchSuggestion = (query: string) => {
    setSearchQuery(query);
    setShowSuggestions(false);
    window.location.href = `/tools?search=${encodeURIComponent(query)}`;
  };

  const filteredSuggestions = searchQuery.trim() 
    ? tools.filter(tool => 
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      ).slice(0, 6)
    : [];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchFormRef.current && !searchFormRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const sortedByPopularity = [...tools].sort((a, b) => b.popularity - a.popularity);
  const latestTools = [...tools].sort((a, b) => new Date(b.addedDate!).getTime() - new Date(a.addedDate!).getTime()).slice(0, 8);
  const topRanking = sortedByPopularity.slice(0, 10);

  useEffect(() => {
    let timeoutId: number | null = null;
    
    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      timeoutId = window.setTimeout(() => {
        const headerHeight = 120;
        
        const popularElement = categoryRefs.current['popular'];
        if (popularElement) {
          const rect = popularElement.getBoundingClientRect();
          if (rect.top <= headerHeight + 50 && rect.bottom > headerHeight) {
            setScrolledCategory('');
            return;
          }
        }
        
        for (const category of categories) {
          const element = categoryRefs.current[category.id];
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= headerHeight + 50 && rect.bottom > headerHeight) {
              setScrolledCategory(category.id);
              return;
            }
          }
        }
        
        const latestElement = categoryRefs.current['latest'];
        if (latestElement) {
          const rect = latestElement.getBoundingClientRect();
          if (rect.top <= headerHeight + 50) {
            setScrolledCategory('');
          }
        }
      }, 16);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        <section className="pt-16 pb-6 bg-gradient-to-br from-orange-500 to-red-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-white mb-2">{t('aiTools')}</h1>
              <p className="text-white/80">{t('aiToolsDesc')}</p>
            </div>
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto" ref={searchFormRef}>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={t('searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  className="w-full pl-12 pr-4 py-4 bg-white rounded-xl focus:outline-none focus:ring-4 focus:ring-white/50 text-gray-900 text-lg placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-lg hover:shadow-lg transition-all"
                >
                  {t('searchButton')}
                </button>
                
                {showSuggestions && filteredSuggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
                    <div className="px-4 py-2 text-sm text-gray-500 border-b border-gray-100">
                      {t('searchResults')} ({filteredSuggestions.length})
                    </div>
                    {filteredSuggestions.map((tool) => {
                      const localizedTool = getLocalizedTool(tool, currentLang);
                      return (
                        <button
                          key={tool.id}
                          onClick={() => handleSearchSuggestion(tool.name)}
                          className="w-full px-4 py-3 flex items-center gap-3 hover:bg-orange-50 transition-colors text-left"
                        >
                          <ToolLogo logo={tool.logo} name={tool.name} size="md" />
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-gray-900 truncate">{tool.name}</div>
                            <div className="text-xs text-gray-500 truncate">{localizedTool.description}</div>
                          </div>
                          <span className="text-xs text-gray-400">{localizedTool.category}</span>
                        </button>
                      );
                    })}
                    <a
                      href={`/tools?search=${encodeURIComponent(searchQuery)}`}
                      className="block px-4 py-2 text-sm text-orange-600 hover:bg-gray-50 text-center"
                    >
                      {t('viewMore')} &rarr;
                    </a>
                  </div>
                )}
              </div>
            </form>
          </div>
        </section>

        <div className="max-w-[95vw] sm:max-w-[90vw] lg:max-w-[85vw] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-6">
            <aside className="w-full lg:w-56 flex-shrink-0">
              <div className="bg-white rounded-xl border border-gray-200 p-4 sticky top-20">
                <div className="flex items-center gap-2 mb-4">
                  <Grid3X3 className="w-5 h-5 text-gray-700" />
                  <h3 className="font-semibold text-gray-900">{t('categories')}</h3>
                </div>
                <nav className="space-y-1">
                  <button
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`w-full px-4 py-2 rounded-lg text-left transition-colors text-sm ${
                      !scrolledCategory ? 'bg-orange-50 text-orange-600 font-medium' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {t('allTools')}
                    <span className="float-right text-gray-400">{tools.length}</span>
                  </button>

                  {categories.map((category) => {
                    const count = getToolsByCategory(category.name).length;
                    const isActive = scrolledCategory === category.id;
                    return (
                      <button
                        key={category.id}
                        onClick={() => {
                          setScrolledCategory(category.id);
                          const element = categoryRefs.current[category.id];
                          if (element) {
                            const rect = element.getBoundingClientRect();
                            const headerHeight = 120;
                            const scrollPosition = window.scrollY + rect.top - headerHeight;
                            window.scrollTo({
                              top: Math.max(0, scrollPosition),
                              behavior: 'smooth'
                            });
                          }
                        }}
                        className={`w-full px-4 py-2 rounded-lg text-left transition-colors text-sm ${
                          isActive ? 'bg-orange-50 text-orange-600 font-medium' : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {getCategoryName(category, currentLang)}
                        <span className="float-right text-gray-400">{count}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>

            <div className="flex-1 min-w-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                <a href="#" className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 rounded-xl p-5 text-white hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs opacity-70">{currentLang === 'en' ? 'Ad' : '广告'}</span>
                      <h4 className="font-bold text-lg mt-1">{currentLang === 'en' ? 'AI Tools' : 'AI工具推荐'}</h4>
                      <p className="text-sm opacity-80 mt-1">{currentLang === 'en' ? 'Curated AI tools to boost productivity' : '精选优质AI工具，提升工作效率'}</p>
                    </div>
                    <button className="px-5 py-2 bg-white text-blue-600 rounded-full text-sm font-semibold hover:shadow-md transition-all">
                      {currentLang === 'en' ? 'Try Now' : '立即体验'}
                    </button>
                  </div>
                </a>
                <a href="#" className="block bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 rounded-xl p-5 text-white hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs opacity-70">{currentLang === 'en' ? 'Ad' : '广告'}</span>
                      <h4 className="font-bold text-lg mt-1">{currentLang === 'en' ? 'AI Platform' : 'AI创作平台'}</h4>
                      <p className="text-sm opacity-80 mt-1">{currentLang === 'en' ? 'Writing, Art, Coding in one place' : 'AI写作、绘画、编程一站式服务'}</p>
                    </div>
                    <button className="px-5 py-2 bg-white text-orange-600 rounded-full text-sm font-semibold hover:shadow-md transition-all">
                      {currentLang === 'en' ? 'Free Trial' : '免费试用'}
                    </button>
                  </div>
                </a>
              </div>

              <section 
                className="mb-10"
                ref={(el) => { categoryRefs.current['popular'] = el; }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">{t('popularTools')}</h2>
                  <span className="text-sm text-gray-400">({sortedByPopularity.length})</span>
                  <a href="/ranking" className="ml-auto text-sm text-gray-500 hover:text-orange-600 transition-colors flex items-center gap-1">
                    {t('viewMore')}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {sortedByPopularity.slice(0, 8).map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                  ))}
                </div>
              </section>

              {categories.map((category) => {
                const categoryTools = getToolsByCategory(category.name);
                if (categoryTools.length === 0) return null;
                return (
                  <section 
                    key={category.id} 
                    className="mb-10"
                    ref={(el) => { categoryRefs.current[category.id] = el; }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                      <h2 className="text-xl font-bold text-gray-900">{getCategoryName(category, currentLang)}</h2>
                      <span className="text-sm text-gray-400">({categoryTools.length})</span>
                      <a href={`/category/${category.id}`} className="ml-auto text-sm text-gray-500 hover:text-orange-600 transition-colors flex items-center gap-1">
                        {t('viewMore')}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {categoryTools.map((tool) => (
                        <ToolCard key={tool.id} tool={tool} />
                      ))}
                    </div>
                  </section>
                );
              })}

            <section className="mt-10" ref={(el) => { categoryRefs.current['latest'] = el; }}>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-blue-500" />
                <h3 className="font-semibold text-gray-900">{t('latestTools')}</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
                {latestTools.map((tool) => {
                  const localizedTool = getLocalizedTool(tool, currentLang);
                  return (
                    <a
                      key={tool.id}
                      href={`/tool/${tool.id}`}
                      className="bg-white rounded-lg border border-gray-200 p-3 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <ToolLogo logo={tool.logo} name={tool.name} size="lg" />
                        <div className="min-w-0">
                          <h4 className="font-medium text-gray-900 truncate">{tool.name}</h4>
                          <span className="text-xs text-gray-400">{localizedTool.category}</span>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </section>

            <section className="mt-10">
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-200">
                  <Flame className="w-5 h-5 text-orange-500" />
                  <h3 className="font-semibold text-gray-900">{t('topRanking')}</h3>
                  <a href="/ranking" className="ml-auto text-sm text-gray-500 hover:text-orange-600">{t('viewFullRanking')}</a>
                </div>
                <div className="divide-y divide-gray-100">
                  {topRanking.map((tool, index) => {
                    const localizedTool = getLocalizedTool(tool, currentLang);
                    return (
                      <a
                        key={tool.id}
                        href={`/tool/${tool.id}`}
                        className="flex items-center gap-4 px-6 py-3 hover:bg-gray-50 transition-colors"
                      >
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                          index === 0 ? 'bg-yellow-400 text-white' :
                          index === 1 ? 'bg-gray-300 text-white' :
                          index === 2 ? 'bg-amber-600 text-white' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {index + 1}
                        </span>
                        <ToolLogo logo={tool.logo} name={tool.name} size="md" />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 truncate">{tool.name}</h4>
                          <span className="text-xs text-gray-400">{localizedTool.category}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-400">
                          <TrendingUp className="w-4 h-4" />
                          {tool.popularity.toLocaleString()}
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </section>
            </div>
          </div>
        </div>

        <Footer />
      </main>
      <BackToTop />
    </div>
  );
}
