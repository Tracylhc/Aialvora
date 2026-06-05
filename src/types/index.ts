export interface Tool {
  id: string;
  name: string;
  logo: string;
  logoColor?: string;
  description: string;
  category: string;
  tags: string[];
  pricing: string;
  website: string;
  screenshot?: string;
  features: string[];
  useCases: string[];
  pros: string;
  cons: string;
  priceInfo: string;
  rating: number;
  popularity: number;
  addedDate: string;
}

export interface Category {
  id: string;
  name: string;
  nameEn: string;
  icon: string;
  description: string;
  descriptionEn: string;
}

export interface Tutorial {
  id: string;
  title: string;
  category: string;
  cover: string;
  summary: string;
  author: string;
  publishDate: string;
}

export interface RankingItem {
  rank: number;
  tool: Tool;
}