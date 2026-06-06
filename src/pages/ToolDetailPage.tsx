
import { useParams } from 'react-router-dom';
import { ExternalLink, Star, Check, X, Tag, DollarSign, Calendar, Users, ThumbsUp, ThumbsDown, Heart } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ToolCard from '../components/ToolCard';
import ToolLogo from '../components/ToolLogo';
import { getToolById, getSimilarTools } from '../data/tools';
import { useLanguage } from '../i18n/LanguageContext';
import { getLocalizedTool } from '../data/tools-i18n';
import { useFavorites } from '../context/FavoritesContext';

export default function ToolDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { t, currentLang } = useLanguage();
  const tool = getToolById(id || '');

  if (!tool) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{currentLang === 'en' ? 'Tool Not Found' : '工具不存在'}</h2>
              <p className="text-gray-500">{currentLang === 'en' ? 'The tool you are looking for does not exist' : '您访问的工具页面不存在'}</p>
              <a href="/tools" className="inline-block mt-4 text-blue-600 hover:text-blue-700 font-medium">
                {currentLang === 'en' ? 'Back to Tools' : '返回工具列表'}
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const localizedTool = getLocalizedTool(tool, currentLang);
  const similarTools = getSimilarTools(tool);
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(tool.id);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-2xl p-8 mb-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <ToolLogo logo={tool.logo} name={tool.name} size="2xl" />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold text-white">{tool.name}</h1>
                  <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className="text-white font-semibold">{tool.rating}</span>
                  </div>
                </div>
                <p className="text-white/80 text-lg mb-4">{localizedTool.description}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                    {localizedTool.category}
                  </span>
                  <span className={`px-3 py-1 text-sm rounded-full ${
                    localizedTool.pricing === '免费' || localizedTool.pricing === 'Free' ? 'bg-green-500/30 text-green-200' :
                    localizedTool.pricing === '免费/付费' || localizedTool.pricing === 'Free/Paid' ? 'bg-yellow-500/30 text-yellow-200' :
                    'bg-red-500/30 text-red-200'
                  }`}>
                    <DollarSign className="w-4 h-4 inline mr-1" />
                    {localizedTool.pricing}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={tool.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  {currentLang === 'en' ? 'Visit Website' : '访问官网'}
                  <ExternalLink className="w-5 h-5" />
                </a>
                <button
                  onClick={() => toggleFavorite(tool.id)}
                  className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                    favorite
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${favorite ? 'fill-current' : ''}`} />
                  {currentLang === 'en' ? (favorite ? 'Favorited' : 'Favorite') : (favorite ? '已收藏' : '收藏工具')}
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {tool.screenshot && (
                <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                  <div className="p-4 border-b border-gray-100">
                    <h3 className="font-semibold text-gray-900">{currentLang === 'en' ? 'Screenshots' : '产品截图'}</h3>
                  </div>
                  <img
                    src={tool.screenshot}
                    alt={`${tool.name} screenshot`}
                    className="w-full h-auto"
                  />
                </div>
              )}

              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('features')}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {localizedTool.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('useCases')}</h3>
                <div className="flex flex-wrap gap-2">
                  {localizedTool.useCases.map((useCase, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl border border-gray-100 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <ThumbsUp className="w-5 h-5 text-green-600" />
                    <h3 className="font-semibold text-gray-900">{t('pros')}</h3>
                  </div>
                  <p className="text-gray-600">{localizedTool.pros}</p>
                </div>
                <div className="bg-white rounded-xl border border-gray-100 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <ThumbsDown className="w-5 h-5 text-red-600" />
                    <h3 className="font-semibold text-gray-900">{t('cons')}</h3>
                  </div>
                  <p className="text-gray-600">{localizedTool.cons}</p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <DollarSign className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">{t('priceInfo')}</h3>
                </div>
                <div className="space-y-3">
                  {(currentLang === 'en' ? localizedTool.priceInfo.split(';') : localizedTool.priceInfo.split('；')).map((line, index) => (
                    <p key={index} className="text-gray-600">{line}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">{currentLang === 'en' ? 'Tool Info' : '工具信息'}</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Tag className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{currentLang === 'en' ? 'Tags' : '标签'}</p>
                      <div className="flex flex-wrap gap-1">
                        {localizedTool.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{t('popularity')}</p>
                      <p className="font-semibold text-gray-900">{tool.popularity.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{t('addedDate')}</p>
                      <p className="font-semibold text-gray-900">{tool.addedDate}</p>
                    </div>
                  </div>
                </div>
              </div>

              {similarTools.length > 0 && (
                <div className="bg-white rounded-xl border border-gray-100 p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">{currentLang === 'en' ? 'Similar Tools' : '相似工具推荐'}</h3>
                  <div className="space-y-4">
                    {similarTools.map((similarTool) => (
                      <ToolCard key={similarTool.id} tool={similarTool} showRating={false} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
