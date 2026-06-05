
import { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { categories } from '../data/categories';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onFilterChange: (category: string) => void;
  initialQuery?: string;
  initialCategory?: string;
}

export default function SearchBar({ onSearch, onFilterChange, initialQuery = '', initialCategory = '' }: SearchBarProps) {
  const [query, setQuery] = useState(initialQuery);
  const [showFilters, setShowFilters] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleCategoryChange = (categoryName: string) => {
    onFilterChange(categoryName);
    setShowFilters(false);
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="搜索AI工具..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 shadow-lg shadow-gray-200/50"
            />
          </div>
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowFilters(!showFilters)}
              className="p-4 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <SlidersHorizontal className="w-5 h-5 text-gray-600" />
            </button>
            
            {showFilters && (
              <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl border border-gray-100 shadow-xl z-10 overflow-hidden">
                <div className="p-3 border-b border-gray-100">
                  <span className="text-sm font-medium text-gray-700">选择分类</span>
                </div>
                <div className="p-2">
                  <button
                    onClick={() => handleCategoryChange('')}
                    className={`w-full px-3 py-2 text-sm rounded-lg text-left transition-colors ${
                      initialCategory === '' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    全部
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.name)}
                      className={`w-full px-3 py-2 text-sm rounded-lg text-left transition-colors ${
                        initialCategory === cat.name ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <button
            type="submit"
            className="px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all"
          >
            搜索
          </button>
        </div>
      </form>
    </div>
  );
}
