
import { MessageCircle, FileText, Palette, Video, Headphones, Briefcase, Code, Search, TrendingUp, Bot } from 'lucide-react';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
  count?: number;
}

const iconMap: Record<string, React.ReactNode> = {
  MessageCircle: <MessageCircle className="w-6 h-6" />,
  FileText: <FileText className="w-6 h-6" />,
  Palette: <Palette className="w-6 h-6" />,
  Video: <Video className="w-6 h-6" />,
  Headphones: <Headphones className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
  Code: <Code className="w-6 h-6" />,
  Search: <Search className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  Bot: <Bot className="w-6 h-6" />,
};

export default function CategoryCard({ category, count = 0 }: CategoryCardProps) {
  return (
    <a
      href={`/category/${category.id}`}
      className="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-lg hover:shadow-gray-200/50 transition-all group cursor-pointer"
    >
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
          {iconMap[category.icon]}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
          <p className="text-gray-500 text-sm">{category.description}</p>
          {count > 0 && (
            <span className="inline-block mt-2 text-xs text-gray-400">
              {count} 个工具
            </span>
          )}
        </div>
      </div>
    </a>
  );
}
