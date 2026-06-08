
import { Star, ArrowRight, Heart } from 'lucide-react';
import { Tool } from '../types';
import ToolLogo from './ToolLogo';
import { useLanguage } from '../i18n/LanguageContext';
import { getLocalizedTool } from '../data/tools-i18n';
import { useFavorites } from '../context/FavoritesContext';

interface ToolCardProps {
  tool: Tool;
  showRating?: boolean;
}

export default function ToolCard({ tool, showRating = true }: ToolCardProps) {
  const { currentLang, t } = useLanguage();
  const { isFavorite, toggleFavorite } = useFavorites();
  const localizedTool = getLocalizedTool(tool, currentLang);
  const favorite = isFavorite(tool.id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    toggleFavorite(tool.id);
  };

  return (
    <a
      href={`/tool/${tool.id}`}
      className="block bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg hover:shadow-gray-200/50 hover:border-orange-300 transition-all group relative h-[205px] flex flex-col"
    >
      <button
        onClick={handleFavoriteClick}
        className={`absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full transition-all ${
          favorite
            ? 'bg-red-100 text-red-500 hover:bg-red-200'
            : 'bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-red-400'
        }`}
      >
        <Heart className={`w-4 h-4 ${favorite ? 'fill-current' : ''}`} />
      </button>
      <div className="flex items-start gap-3">
        <ToolLogo logo={tool.logo} name={tool.name} size="xl" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-gray-900 truncate group-hover:text-orange-600 transition-colors">
              {tool.name}
            </h3>
            {showRating && (
              <div className="flex items-center gap-1 text-sm">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-gray-600">{tool.rating}</span>
              </div>
            )}
          </div>
          <p className="text-gray-500 text-sm line-clamp-2 mb-2">{localizedTool.description}</p>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">
              {localizedTool.category}
            </span>
            <span className={`px-2 py-0.5 text-xs rounded-full ${
              localizedTool.pricing === '免费' || localizedTool.pricing === 'Free' ? 'bg-green-100 text-green-600' :
              localizedTool.pricing === '免费/付费' || localizedTool.pricing === 'Free/Paid' ? 'bg-yellow-100 text-yellow-600' :
              'bg-red-100 text-red-600'
            }`}>
              {localizedTool.pricing}
            </span>
          </div>
          <div className="flex flex-wrap gap-1">
            {localizedTool.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
        <span className="text-xs text-gray-400">{t('popularity')}: {tool.popularity.toLocaleString()}</span>
        <span className="flex items-center gap-1 text-sm text-gray-500 group-hover:text-orange-600 transition-colors font-medium">
          {t('viewDetails')}
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </a>
  );
}
