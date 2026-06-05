
import { useParams } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ToolCard from '../components/ToolCard';
import { getToolsByCategory, tools } from '../data/tools';
import { categories, categoryNameMap, getCategoryName } from '../data/categories';
import { tutorials, getTutorialsByCategory } from '../data/tutorials';
import { useLanguage } from '../i18n/LanguageContext';
import { getLocalizedTool } from '../data/tools-i18n';

export default function CategoryPage() {
  const { name } = useParams<{ name: string }>();
  const { t, currentLang } = useLanguage();
  
  const category = categories.find(cat => cat.id === name);
  const categoryName = category ? getCategoryName(category, currentLang) : Object.keys(categoryNameMap).find(key => categoryNameMap[key] === name) || name;
  const categoryTools = getToolsByCategory(categoryName);
  const categoryTutorials = getTutorialsByCategory(categoryName);

  const otherCategories = categories.filter(cat => cat.id !== name);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <a href="/" className="p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </a>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{categoryName}</h1>
              <p className="text-gray-600">
                {category ? category.description : (currentLang === 'en' ? 'Explore AI tools in this category' : '探索此类别的AI工具')}
              </p>
            </div>
          </div>

          {categoryTools.length > 0 && (
            <div className="mb-12">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                {currentLang === 'en' ? 'Tool List' : '工具列表'} ({categoryTools.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryTools.map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            </div>
          )}

          {categoryTutorials.length > 0 && (
            <div className="mb-12">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">{currentLang === 'en' ? 'Related Tutorials' : '相关教程'}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryTutorials.map((tutorial) => (
                  <div
                    key={tutorial.id}
                    className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all cursor-pointer"
                  >
                    <div className={`h-40 ${tutorial.cover}`}>
                      <div className="h-full flex items-center justify-center">
                        <span className="text-white text-5xl font-bold opacity-20">
                          {tutorial.title.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                        {tutorial.title}
                      </h3>
                      <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                        {tutorial.summary}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">{tutorial.author}</span>
                        <span className="text-xs text-gray-400">{tutorial.publishDate}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-white rounded-xl border border-gray-100 p-6">
    <h2 className="text-xl font-semibold text-gray-900 mb-6">{currentLang === 'en' ? 'Popular Recommendations' : '热门推荐'}</h2>
    <div className="flex flex-wrap gap-3">
      {tools.slice(0, 8).map((tool) => {
        const localizedTool = getLocalizedTool(tool, currentLang);
        return (
          <a
            key={tool.id}
            href={`/tool/${tool.id}`}
            className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors"
          >
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${tool.logoColor || 'bg-gradient-to-br from-blue-500 to-purple-600'}`}>
              {tool.name.charAt(0).toUpperCase()}
            </span>
            <span className="text-sm text-gray-700">{tool.name}</span>
          </a>
        );
      })}
    </div>
  </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">{currentLang === 'en' ? 'Explore Other Categories' : '探索其他分类'}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {otherCategories.map((cat) => (
                <a
                  key={cat.id}
                  href={`/category/${cat.id}`}
                  className="flex items-center gap-2 px-4 py-3 bg-white rounded-xl border border-gray-100 hover:border-blue-500 hover:shadow-md transition-all"
                >
                  <Sparkles className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">{getCategoryName(cat, currentLang)}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
