
import Header from '../components/Header';
import Footer from '../components/Footer';
import ToolCard from '../components/ToolCard';
import { useFavorites } from '../context/FavoritesContext';
import { getToolById } from '../data/tools';
import { useLanguage } from '../i18n/LanguageContext';
import { Heart } from 'lucide-react';

export default function FavoritesPage() {
  const { favorites, removeFavorite } = useFavorites();
  const { currentLang } = useLanguage();
  const isEn = currentLang === 'en';

  const favoriteTools = favorites.map(id => getToolById(id)).filter(Boolean);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {isEn ? 'My Favorites' : '我的收藏'}
                </h1>
                <p className="text-gray-500">
                  {isEn
                    ? `${favorites.length} tools saved`
                    : `已收藏 ${favorites.length} 个工具`}
                </p>
              </div>
            </div>
          </div>

          {/* Empty State */}
          {favoriteTools.length === 0 ? (
            <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-gray-300" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {isEn ? 'No Favorite Tools' : '暂无收藏工具'}
              </h2>
              <p className="text-gray-500 mb-6">
                {isEn
                  ? 'Start exploring and save your favorite AI tools!'
                  : '开始探索并收藏您喜欢的 AI 工具！'}
              </p>
              <a
                href="/tools"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                {isEn ? 'Browse Tools' : '浏览工具'}
              </a>
            </div>
          ) : (
            /* Favorite Tools Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteTools.map(tool => (
                <div key={tool!.id} className="relative">
                  <ToolCard tool={tool!} />
                  <button
                    onClick={() => removeFavorite(tool!.id)}
                    className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-red-100 text-red-500 rounded-full hover:bg-red-200 transition-all shadow-sm"
                    title={isEn ? 'Remove from favorites' : '取消收藏'}
                  >
                    <Heart className="w-4 h-4 fill-current" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Instructions */}
          <div className="mt-12 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-2">
              {isEn ? 'How to use favorites' : '如何使用收藏功能'}
            </h3>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>{isEn ? '• Click the heart icon on any tool card to add it to your favorites' : '• 点击工具卡片上的心形图标将其添加到收藏'}</li>
              <li>{isEn ? '• View all your favorites in this page' : '• 在此页面查看所有收藏的工具'}</li>
              <li>{isEn ? '• Click the red heart icon to remove a tool from favorites' : '• 点击红色心形图标取消收藏工具'}</li>
              <li>{isEn ? '• Your favorites are saved in your browser and persist across sessions' : '• 收藏保存在浏览器中，刷新页面后仍然保留'}</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
