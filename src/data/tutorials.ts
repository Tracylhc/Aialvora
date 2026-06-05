
import { Tutorial } from '../types';

const coverColors = [
  'bg-gradient-to-br from-blue-500 to-purple-600',
  'bg-gradient-to-br from-purple-500 to-pink-600',
  'bg-gradient-to-br from-green-500 to-teal-600',
  'bg-gradient-to-br from-orange-500 to-red-600',
  'bg-gradient-to-br from-cyan-500 to-blue-600',
  'bg-gradient-to-br from-indigo-500 to-purple-600',
];

export const tutorials: Tutorial[] = [
  {
    id: 'chatgpt-guide',
    title: 'ChatGPT使用指南：从入门到精通',
    category: 'AI聊天',
    cover: coverColors[0],
    summary: '全面了解ChatGPT的各项功能，学习如何高效使用这个强大的AI助手。',
    author: 'AI学习社',
    publishDate: '2024-01-15'
  },
  {
    id: 'midjourney-basics',
    title: 'Midjourney入门教程：零基础学AI绘画',
    category: 'AI绘画',
    cover: coverColors[1],
    summary: '从安装到创作，手把手教你使用Midjourney生成精美图像。',
    author: '创意设计学院',
    publishDate: '2024-02-20'
  },
  {
    id: 'ai-video-editing',
    title: 'AI短视频制作教程：快速上手Runway',
    category: 'AI视频',
    cover: coverColors[2],
    summary: '学习使用Runway进行AI视频编辑，提升你的视频创作效率。',
    author: '视频创作实验室',
    publishDate: '2024-03-10'
  },
  {
    id: 'ai-office-productivity',
    title: 'AI办公自动化：提升工作效率的5个技巧',
    category: 'AI办公',
    cover: coverColors[3],
    summary: '掌握AI办公工具，让你的工作效率提升10倍。',
    author: '职场效率专家',
    publishDate: '2024-03-25'
  },
  {
    id: 'ai-coding-assistant',
    title: 'GitHub Copilot使用技巧：程序员必备',
    category: 'AI编程',
    cover: coverColors[4],
    summary: '学会使用AI编程助手，大幅提升代码编写效率。',
    author: '编程学习网',
    publishDate: '2024-04-05'
  },
  {
    id: 'prompt-engineering',
    title: '提示词工程：让AI更好地理解你的需求',
    category: 'AI聊天',
    cover: coverColors[5],
    summary: '学习编写高质量提示词的技巧和方法。',
    author: 'AI研究院',
    publishDate: '2024-04-15'
  }
];

export const getTutorialsByCategory = (category: string): Tutorial[] => {
  return tutorials.filter(t => t.category === category);
};
