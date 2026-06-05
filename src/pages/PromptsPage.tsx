
import { useState } from 'react';
import { Sparkles, Copy, Check, Search, Bookmark } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { categories } from '../data/categories';
import { useLanguage } from '../i18n/LanguageContext';

interface Prompt {
  id: string;
  title: string;
  category: string;
  content: string;
  likes: number;
}

const prompts: Prompt[] = [
  {
    id: '1',
    title: '创意写作助手',
    category: 'AI聊天',
    content: '你是一位专业的创意写作助手，请帮我写一篇关于未来城市的短篇小说。要求：1. 设定在2077年；2. 包含人工智能元素；3. 要有情感冲突；4. 结尾要有悬念。',
    likes: 328
  },
  {
    id: '2',
    title: 'Midjourney艺术风格',
    category: 'AI绘画',
    content: 'A beautiful cyberpunk city at night, neon lights reflecting on wet streets, flying cars, Blade Runner aesthetic, hyper-detailed, cinematic lighting, 8k, photorealistic',
    likes: 542
  },
  {
    id: '3',
    title: '代码审查助手',
    category: 'AI编程',
    content: '请帮我审查以下Python代码，指出潜在的bug、性能问题和代码风格问题，并提供改进建议。代码：[粘贴代码]',
    likes: 189
  },
  {
    id: '4',
    title: 'SEO文章生成',
    category: 'AI写作',
    content: '请帮我写一篇关于"AI工具如何提升工作效率"的SEO文章。要求：1. 包含至少5个实用技巧；2. 使用H2-H3标题结构；3. 关键词密度合理；4. 字数800-1000字。',
    likes: 267
  },
  {
    id: '5',
    title: '视频脚本创作',
    category: 'AI视频',
    content: '请帮我创作一个短视频脚本，主题是"AI如何改变日常生活"。要求：1. 时长60秒；2. 包含3个场景；3. 要有开头、发展和结尾；4. 语言简洁有力。',
    likes: 156
  },
  {
    id: '6',
    title: '数据分析助手',
    category: 'AI聊天',
    content: '我有一组销售数据需要分析。请帮我：1. 识别关键趋势；2. 找出异常值；3. 提供业务洞察；4. 给出改进建议。数据：[粘贴数据]',
    likes: 234
  },
];

export default function PromptsPage() {
  const { t, currentLang } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredPrompts = prompts.filter((prompt) => {
    const matchesCategory = !selectedCategory || prompt.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prompt.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopy = (id: string, content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-4">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <span className="text-purple-700 font-medium">{currentLang === 'en' ? 'AI Prompts Library' : 'AI提示词库'}</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{currentLang === 'en' ? 'Featured Prompts' : '精选提示词'}</h1>
            <p className="text-gray-600">{currentLang === 'en' ? 'Discover high-quality prompts to unlock the full potential of AI tools' : '发现优质提示词，解锁AI工具的全部潜力'}</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-4 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={currentLang === 'en' ? 'Search prompts...' : '搜索提示词...'}
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredPrompts.map((prompt) => (
              <div
                key={prompt.id}
                className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{prompt.title}</h3>
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full">
                      {prompt.category}
                    </span>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Bookmark className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
                <div className="relative">
                  <p className="text-gray-700 leading-relaxed mb-4 bg-gray-50 rounded-lg p-4">
                    {prompt.content}
                  </p>
                  <button
                    onClick={() => handleCopy(prompt.id, prompt.content)}
                    className="absolute top-3 right-3 p-2 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
                  >
                    {copiedId === prompt.id ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-500" />
                    )}
                  </button>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">{prompt.likes} {currentLang === 'en' ? 'favorites' : '人收藏'}</span>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all">
                    {currentLang === 'en' ? 'Copy Prompt' : '复制提示词'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-2xl p-8 text-center text-white">
            <h3 className="text-xl font-bold mb-2">{currentLang === 'en' ? 'Share Your Great Prompts' : '分享您的优秀提示词'}</h3>
            <p className="text-white/80 mb-6">{currentLang === 'en' ? 'Submit high-quality prompts to help others improve their AI usage efficiency' : '提交高质量提示词，帮助更多人提升AI使用效率'}</p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-lg transition-all">
              {currentLang === 'en' ? 'Submit Prompt' : '提交提示词'}
              <Sparkles className="w-5 h-5" />
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
