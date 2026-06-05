
import { useState } from 'react';
import { GitBranch, Play, Clock, Users, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../i18n/LanguageContext';

interface Workflow {
  id: string;
  title: string;
  description: string;
  category: string;
  steps: string[];
  duration: string;
  difficulty: 'easy' | 'medium' | 'hard';
  uses: number;
}

const workflows: Workflow[] = [
  {
    id: '1',
    title: 'AI内容创作工作流',
    description: '从灵感构思到发布的完整内容创作流程，使用多种AI工具协同工作。',
    category: '内容创作',
    steps: [
      '使用ChatGPT进行头脑风暴和大纲撰写',
      '使用Claude进行深度内容创作',
      '使用Midjourney生成配图',
      '使用Grammarly进行语法检查',
      '发布到博客或社交媒体'
    ],
    duration: '30分钟',
    difficulty: 'medium',
    uses: 1256
  },
  {
    id: '2',
    title: 'AI视频制作工作流',
    description: '从文本到视频的完整制作流程，适合自媒体创作者。',
    category: '视频制作',
    steps: [
      '使用ChatGPT编写视频脚本',
      '使用ElevenLabs生成语音旁白',
      '使用Pika生成视频画面',
      '使用Runway进行视频剪辑',
      '导出并发布'
    ],
    duration: '45分钟',
    difficulty: 'hard',
    uses: 892
  },
  {
    id: '3',
    title: 'AI编程工作流',
    description: '使用AI辅助完成编程任务，提高开发效率。',
    category: '编程开发',
    steps: [
      '使用GitHub Copilot进行代码补全',
      '使用Cursor进行代码审查',
      '使用ChatGPT进行调试',
      '使用ChatGPT生成文档',
      '提交代码到版本控制'
    ],
    duration: '2小时',
    difficulty: 'medium',
    uses: 2134
  },
  {
    id: '4',
    title: 'AI设计工作流',
    description: '从概念到成品的AI辅助设计流程。',
    category: '设计',
    steps: [
      '使用ChatGPT进行设计概念构思',
      '使用Midjourney生成设计灵感图',
      '使用Stable Diffusion细化设计',
      '使用Canva进行排版设计',
      '导出设计文件'
    ],
    duration: '1小时',
    difficulty: 'easy',
    uses: 1567
  },
  {
    id: '5',
    title: 'AI数据分析工作流',
    description: '使用AI辅助进行数据分析和报告生成。',
    category: '数据分析',
    steps: [
      '整理原始数据',
      '使用ChatGPT进行数据清洗建议',
      '使用Python进行数据分析',
      '使用ChatGPT生成分析报告',
      '可视化展示结果'
    ],
    duration: '1.5小时',
    difficulty: 'hard',
    uses: 678
  },
  {
    id: '6',
    title: 'AI营销文案工作流',
    description: '使用AI快速生成高质量营销文案。',
    category: '营销',
    steps: [
      '使用ChatGPT分析目标受众',
      '使用Copy.ai生成初稿',
      '使用ChatGPT进行优化',
      '进行A/B测试',
      '发布营销内容'
    ],
    duration: '20分钟',
    difficulty: 'easy',
    uses: 1890
  },
];

export default function WorkflowsPage() {
  const { currentLang } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = currentLang === 'en'
    ? ['All', 'Content Creation', 'Video Production', 'Programming', 'Design', 'Data Analysis', 'Marketing']
    : ['全部', '内容创作', '视频制作', '编程开发', '设计', '数据分析', '营销'];

  const filteredWorkflows = workflows.filter((workflow) => {
    const allCat = currentLang === 'en' ? 'All' : '全部';
    return !selectedCategory || selectedCategory === allCat || workflow.category === selectedCategory;
  });

  const getDifficultyStyle = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-700';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700';
      case 'hard':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    if (currentLang === 'en') {
      switch (difficulty) {
        case 'easy':
          return 'Easy';
        case 'medium':
          return 'Medium';
        case 'hard':
          return 'Hard';
        default:
          return difficulty;
      }
    }
    switch (difficulty) {
      case 'easy':
        return '简单';
      case 'medium':
        return '中等';
      case 'hard':
        return '困难';
      default:
        return difficulty;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-teal-100 rounded-full mb-4">
              <GitBranch className="w-5 h-5 text-green-600" />
              <span className="text-green-700 font-medium">{currentLang === 'en' ? 'AI Workflows' : 'AI工作流'}</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{currentLang === 'en' ? 'AI Workflow Templates' : 'AI工作流模板'}</h1>
            <p className="text-gray-600">{currentLang === 'en' ? 'Discover efficient AI workflows to boost your productivity' : '发现高效的AI工作流程，提升您的工作效率'}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredWorkflows.map((workflow) => (
              <div
                key={workflow.id}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 text-lg">{workflow.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyStyle(workflow.difficulty)}`}>
                      {getDifficultyLabel(workflow.difficulty)}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{workflow.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {workflow.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {workflow.uses.toLocaleString()} {currentLang === 'en' ? 'uses' : '次使用'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-medium text-gray-900 mb-3">{currentLang === 'en' ? 'Workflow Steps' : '工作流程'}</h4>
                  <ol className="space-y-2">
                    {workflow.steps.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                          {index + 1}
                        </span>
                        <span className="text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="px-6 py-4 bg-gray-50 flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{workflow.category}</span>
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                    {currentLang === 'en' ? 'Get Started' : '开始使用'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-2xl p-8 text-center text-white">
            <h3 className="text-xl font-bold mb-2">{currentLang === 'en' ? 'Create Your Workflow' : '创建您的工作流'}</h3>
            <p className="text-white/80 mb-6">{currentLang === 'en' ? 'Share your AI workflows and help others improve efficiency' : '分享您的AI工作流程，帮助更多人提高效率'}</p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-lg transition-all">
              {currentLang === 'en' ? 'Create Workflow' : '创建工作流'}
              <GitBranch className="w-5 h-5" />
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
