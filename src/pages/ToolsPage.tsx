
import { useState, useEffect } from 'react';
import { Search, Filter, ArrowUpDown, Star, TrendingUp, Calendar } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ToolCard from '../components/ToolCard';
import { tools, searchTools, getToolsByCategory } from '../data/tools';
import { categories, getCategoryName } from '../data/categories';
import { useLanguage } from '../i18n/LanguageContext';

type SortType = 'popularity' | 'latest' | 'rating';

export default function ToolsPage() {
  const { t, currentLang } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortType, setSortType] = useState<SortType>('popularity');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const search = params.get('search');
    const sort = params.get('sort');
    const category = params.get('category');
    if (search) setSearchQuery(search);
    if (sort === 'latest') setSortType('latest');
    if (sort === 'rating') setSortType('rating');
    if (category) setSelectedCategory(category);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery) params.set('search', searchQuery);
    if (selectedCategory) params.set('category', selectedCategory);
    if (sortType !== 'popularity') params.set('sort', sortType);
    window.history.pushState({}, '', `/tools?${params.toString()}`);
    window.location.reload();
  };

  const filteredTools = () => {
    let result = tools;
    
    if (searchQuery) {
      result = searchTools(searchQuery);
    }
    if (selectedCategory) {
      result = result.filter(tool => tool.category === selectedCategory);
    }
    
    switch (sortType) {
      case 'latest':
        return [...result].sort((a, b) => new Date(b.addedDate!).getTime() - new Date(a.addedDate!).getTime());
      case 'rating':
        return [...result].sort((a, b) => b.rating - a.rating);
      default:
        return [...result].sort((a, b) => b.popularity - a.popularity);
    }
  };

  const displayTools = filteredTools();

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="pt-20 pb-8">
        <div className="max-w-[95vw] sm:max-w-[90vw] lg:max-w-[85vw] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 mb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">{t('tools')}</h1>
              <span className="text-sm text-gray-600">
                {currentLang === 'en' ? 'Found' : '共找到'} <span className="font-semibold text-blue-600">{displayTools.length}</span> {currentLang === 'en' ? 'tools' : '个工具'}
              </span>
            </div>
            
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-col lg:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={t('searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white text-sm"
                />
              </div>
              
              <div className="flex flex-wrap items-center gap-2">
                <div className="relative flex-1 sm:flex-none min-w-[140px]">
                  <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="appearance-none pl-9 pr-6 py-2.5 sm:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white cursor-pointer text-sm"
                  >
                    <option value="">{currentLang === 'en' ? 'All Categories' : '全部分类'}</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.name}>{getCategoryName(cat, currentLang)}</option>
                    ))}
                  </select>
                </div>
                
                <div className="relative flex-1 sm:flex-none min-w-[140px]">
                  <ArrowUpDown className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <select
                    value={sortType}
                    onChange={(e) => setSortType(e.target.value as SortType)}
                    className="appearance-none pl-9 pr-6 py-2.5 sm:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white cursor-pointer text-sm"
                  >
                    <option value="popularity">{t('popularity')}</option>
                    <option value="latest">{t('latestTools')}</option>
                    <option value="rating">{t('rating')}</option>
                  </select>
                </div>
              </div>
            </form>
          </div>

          {displayTools.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4">
              {displayTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{t('noResults')}</h3>
              <p className="text-sm text-gray-500">{t('tryOtherKeywords')}</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
