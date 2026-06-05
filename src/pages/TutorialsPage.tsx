
import { useState } from 'react';
import { BookOpen, Calendar, User, Search } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { tutorials } from '../data/tutorials';
import { categories } from '../data/categories';
import { useLanguage } from '../i18n/LanguageContext';

export default function TutorialsPage() {
  const { t, currentLang } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTutorials = tutorials.filter((tutorial) => {
    const matchesCategory = !selectedCategory || tutorial.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutorial.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4">
              <BookOpen className="w-5 h-5 text-blue-600" />
              <span className="text-blue-700 font-medium">{currentLang === 'en' ? 'AI Tutorials' : 'AI教程中心'}</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{currentLang === 'en' ? 'Learn AI Skills' : '学习AI技能'}</h1>
            <p className="text-gray-600">{currentLang === 'en' ? 'From beginner to expert, master AI tools' : '从入门到精通，掌握各类AI工具的使用技巧'}</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-4 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={currentLang === 'en' ? 'Search tutorials...' : '搜索教程...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white cursor-pointer w-full md:w-auto"
                >
                  <option value="">{currentLang === 'en' ? 'All Categories' : '全部分类'}</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.name}>{cat.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {filteredTutorials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTutorials.map((tutorial) => (
                <div
                  key={tutorial.id}
                  className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
                >
                  <div className={`relative h-48 ${tutorial.cover}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-6xl font-bold opacity-20">
                        {tutorial.title.charAt(0)}
                      </span>
                    </div>
                    <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
                      {tutorial.category}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {tutorial.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                      {tutorial.summary}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="text-sm text-gray-600">{tutorial.author}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {tutorial.publishDate}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{currentLang === 'en' ? 'No Tutorials' : '暂无教程'}</h3>
              <p className="text-gray-500">{currentLang === 'en' ? 'No tutorials in this category' : '该分类暂无教程内容'}</p>
            </div>
          )}

          <div className="mt-12 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-2xl p-8 text-center text-white">
            <h3 className="text-xl font-bold mb-2">{currentLang === 'en' ? 'Share Your AI Learning Experience' : '分享您的AI学习经验'}</h3>
            <p className="text-white/80 mb-6">{currentLang === 'en' ? 'Become an author and share your AI learning tips' : '成为作者，分享您的AI学习心得和技巧'}</p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-lg transition-all">
              {currentLang === 'en' ? 'Publish Tutorial' : '发布教程'}
              <BookOpen className="w-5 h-5" />
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
