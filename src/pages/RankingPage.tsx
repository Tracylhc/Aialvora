
import { useState } from 'react';
import { Trophy, TrendingUp, Star, Flame } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RankingCard from '../components/RankingCard';
import { tools, getToolsByCategory } from '../data/tools';
import { categories } from '../data/categories';
import { useLanguage } from '../i18n/LanguageContext';

export default function RankingPage() {
  const { t, currentLang } = useLanguage();
  const [activeTab, setActiveTab] = useState('综合');

  const tabs = ['综合', ...categories.map(cat => cat.name)];

  const getRankingData = () => {
    if (activeTab === '综合') {
      return [...tools].sort((a, b) => b.popularity - a.popularity);
    }
    return getToolsByCategory(activeTab).sort((a, b) => b.popularity - a.popularity);
  };

  const rankingData = getRankingData();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full mb-4">
              <Trophy className="w-5 h-5 text-yellow-600" />
              <span className="text-yellow-700 font-medium">{currentLang === 'en' ? 'AI Tools Ranking' : 'AI工具排行榜'}</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{currentLang === 'en' ? 'Top 100 Popular AI Tools' : '热门AI工具100强'}</h1>
            <p className="text-gray-600">{currentLang === 'en' ? 'Ranked by comprehensive indicators such as user popularity and ratings' : '根据用户热度、评分等综合指标排名'}</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-2 mb-8">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {tab === '综合' ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <Star className="w-4 h-4" />
                  )}
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {rankingData.length > 0 ? (
            <div className="space-y-4">
              {rankingData.map((tool, index) => (
                <RankingCard key={tool.id} rank={index + 1} tool={tool} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Flame className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{currentLang === 'en' ? 'No data yet' : '暂无数据'}</h3>
              <p className="text-gray-500">{currentLang === 'en' ? 'No tool data in this category' : '该分类暂无工具数据'}</p>
            </div>
          )}

          <div className="mt-12 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-2xl p-8 text-center text-white">
            <h3 className="text-xl font-bold mb-2">{currentLang === 'en' ? 'Want your tool on the list?' : '想让您的工具上榜？'}</h3>
            <p className="text-white/80 mb-6">{currentLang === 'en' ? 'Submit your AI tool to get more exposure' : '提交您的AI工具，获取更多曝光机会'}</p>
            <a
              href="/submit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              {currentLang === 'en' ? 'Submit Tool' : '提交工具'}
              <TrendingUp className="w-5 h-5" />
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
