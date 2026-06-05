
import { Star, TrendingUp } from 'lucide-react';
import { Tool } from '../types';
import ToolLogo from './ToolLogo';
import { useLanguage } from '../i18n/LanguageContext';
import { getLocalizedTool } from '../data/tools-i18n';

interface RankingCardProps {
  rank: number;
  tool: Tool;
}

export default function RankingCard({ rank, tool }: RankingCardProps) {
  const { t, currentLang } = useLanguage();
  const localizedTool = getLocalizedTool(tool, currentLang);

  const getRankStyle = () => {
    if (rank === 1) return 'bg-gradient-to-br from-yellow-400 to-orange-500 text-white';
    if (rank === 2) return 'bg-gradient-to-br from-gray-300 to-gray-400 text-white';
    if (rank === 3) return 'bg-gradient-to-br from-amber-600 to-amber-700 text-white';
    return 'bg-gray-100 text-gray-600';
  };

  return (
    <a
      href={`/tool/${tool.id}`}
      className="block bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-all"
    >
      <div className="flex items-center gap-4">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${getRankStyle()}`}>
          {rank}
        </div>
        <ToolLogo logo={tool.logo} name={tool.name} size="xl" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-gray-900 truncate">{tool.name}</h3>
            <div className="flex items-center gap-1 text-sm">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-gray-600">{tool.rating}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500">{localizedTool.category}</span>
            <div className="flex items-center gap-1 text-xs text-green-600">
              <TrendingUp className="w-3 h-3" />
              <span>{tool.popularity.toLocaleString()} {t('popularity')}</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
