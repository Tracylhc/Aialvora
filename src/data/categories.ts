
import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'ai-chat',
    name: 'AI聊天',
    nameEn: 'AI Chat',
    icon: 'MessageCircle',
    description: '智能对话助手，支持多轮对话和内容创作',
    descriptionEn: 'AI chat assistants with multi-turn conversation support'
  },
  {
    id: 'ai-writing',
    name: 'AI写作',
    nameEn: 'AI Writing',
    icon: 'FileText',
    description: 'AI辅助写作，快速生成文章和文案',
    descriptionEn: 'AI-powered writing assistance'
  },
  {
    id: 'ai-art',
    name: 'AI绘画',
    nameEn: 'AI Art',
    icon: 'Palette',
    description: 'AI图像生成，创作精美艺术作品',
    descriptionEn: 'AI image generation tools'
  },
  {
    id: 'ai-video',
    name: 'AI视频',
    nameEn: 'AI Video',
    icon: 'Video',
    description: 'AI视频编辑和生成工具',
    descriptionEn: 'AI video editing and generation'
  },
  {
    id: 'ai-audio',
    name: 'AI语音',
    nameEn: 'AI Audio',
    icon: 'Headphones',
    description: '语音合成和语音识别工具',
    descriptionEn: 'Speech synthesis and recognition tools'
  },
  {
    id: 'ai-office',
    name: 'AI办公',
    nameEn: 'AI Office',
    icon: 'Briefcase',
    description: '提升办公效率的AI工具',
    descriptionEn: 'AI productivity tools for office'
  },
  {
    id: 'ai-coding',
    name: 'AI编程',
    nameEn: 'AI Coding',
    icon: 'Code',
    description: 'AI辅助编程和代码生成',
    descriptionEn: 'AI-assisted coding and code generation'
  },
  {
    id: 'ai-search',
    name: 'AI搜索',
    nameEn: 'AI Search',
    icon: 'Search',
    description: 'AI增强的搜索工具',
    descriptionEn: 'AI-enhanced search tools'
  },
  {
    id: 'ai-marketing',
    name: 'AI营销',
    nameEn: 'AI Marketing',
    icon: 'TrendingUp',
    description: 'AI驱动的营销和广告工具',
    descriptionEn: 'AI-powered marketing tools'
  },
  {
    id: 'ai-agent',
    name: 'AI Agent',
    nameEn: 'AI Agent',
    icon: 'Bot',
    description: '自主AI代理和自动化工作流',
    descriptionEn: 'Autonomous AI agents and workflows'
  }
];

export const categoryNameMap: Record<string, string> = {
  'AI聊天': 'ai-chat',
  'AI写作': 'ai-writing',
  'AI绘画': 'ai-art',
  'AI视频': 'ai-video',
  'AI语音': 'ai-audio',
  'AI办公': 'ai-office',
  'AI编程': 'ai-coding',
  'AI搜索': 'ai-search',
  'AI营销': 'ai-marketing',
  'AI Agent': 'ai-agent'
};

export const getCategoryName = (category: Category, lang: string): string => {
  return lang === 'en' ? category.nameEn : category.name;
};
