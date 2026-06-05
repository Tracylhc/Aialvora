
import { useState } from 'react';
import { Newspaper, Calendar, User, Tag, Search } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../i18n/LanguageContext';

interface News {
  id: string;
  title: string;
  excerpt: string;
  cover: string;
  category: string;
  author: string;
  publishDate: string;
  readTime: string;
}

const coverColors = [
  'bg-gradient-to-br from-blue-600 to-indigo-700',
  'bg-gradient-to-br from-purple-600 to-pink-700',
  'bg-gradient-to-br from-green-600 to-teal-700',
  'bg-gradient-to-br from-cyan-600 to-blue-700',
  'bg-gradient-to-br from-orange-600 to-red-700',
  'bg-gradient-to-br from-indigo-600 to-purple-700',
];

const news: News[] = [
  {
    id: '1',
    title: 'OpenAI发布GPT-5：更强的推理能力和多模态支持',
    excerpt: 'OpenAI正式发布GPT-5模型，带来更强的推理能力、更好的多模态支持以及更长的上下文窗口。',
    cover: coverColors[0],
    category: 'AI聊天',
    author: 'AI头条',
    publishDate: '2024-01-15',
    readTime: '5分钟'
  },
  {
    id: '2',
    title: 'Midjourney推出V7版本：画质再升级',
    excerpt: 'Midjourney发布V7版本，带来更逼真的图像生成效果，支持更高分辨率输出。',
    cover: coverColors[1],
    category: 'AI绘画',
    author: '创意设计',
    publishDate: '2024-01-14',
    readTime: '3分钟'
  },
  {
    id: '3',
    title: 'AI视频生成工具盘点：哪些值得尝试？',
    excerpt: '2024年最值得关注的AI视频生成工具，包括Pika、Runway、Gen-2等。',
    cover: coverColors[2],
    category: 'AI视频',
    author: '视频创作',
    publishDate: '2024-01-13',
    readTime: '8分钟'
  },
  {
    id: '4',
    title: 'AI编程助手对比：GitHub Copilot vs Cursor',
    excerpt: '详细对比两款主流AI编程助手的功能、性能和使用体验。',
    cover: coverColors[3],
    category: 'AI编程',
    author: '程序员日报',
    publishDate: '2024-01-12',
    readTime: '6分钟'
  },
  {
    id: '5',
    title: '企业级AI应用趋势：2024年展望',
    excerpt: '2024年企业级AI应用将迎来爆发式增长，智能客服、自动化办公成为主流。',
    cover: coverColors[4],
    category: 'AI办公',
    author: '商业洞察',
    publishDate: '2024-01-11',
    readTime: '7分钟'
  },
  {
    id: '6',
    title: 'AI Agent：下一代智能助手的未来',
    excerpt: 'AI Agent正在改变我们与AI交互的方式，自主完成任务成为可能。',
    cover: coverColors[5],
    category: 'AI Agent',
    author: 'AI研究院',
    publishDate: '2024-01-10',
    readTime: '4分钟'
  },
];

export default function NewsPage() {
  const { t, currentLang } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [currentLang === 'en' ? 'All' : '全部', 'AI聊天', 'AI绘画', 'AI视频', 'AI编程', 'AI办公', 'AI Agent'];

  const filteredNews = news.filter((item) => {
    const matchesCategory = !selectedCategory || selectedCategory === (currentLang === 'en' ? 'All' : '全部') || item.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full mb-4">
              <Newspaper className="w-5 h-5 text-orange-600" />
              <span className="text-orange-700 font-medium">{currentLang === 'en' ? 'AI News' : 'AI资讯'}</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{currentLang === 'en' ? 'Latest AI News' : '最新AI资讯'}</h1>
            <p className="text-gray-600">{currentLang === 'en' ? 'Track the latest AI developments and industry trends' : '追踪AI领域最新动态，掌握行业发展趋势'}</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-4 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={currentLang === 'en' ? 'Search news...' : '搜索资讯...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                      selectedCategory === cat
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className={`relative h-48 ${item.cover}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-6xl font-bold opacity-20">
                      {item.title.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
                    {item.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-sm text-gray-600">{item.author}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {item.publishDate}
                      </span>
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="px-6 py-3 bg-white border border-gray-200 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              {currentLang === 'en' ? 'Load More' : '加载更多'}
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
