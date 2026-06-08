
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Sparkles, Target, Users, Zap } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function AboutPage() {
  const { currentLang } = useLanguage();
  const isEn = currentLang === 'en';

  const features = [
    {
      icon: Sparkles,
      title: isEn ? 'Curated Selection' : '精选推荐',
      description: isEn
        ? 'Hand-picked AI tools and services that meet our quality standards.'
        : '精心筛选符合质量标准的 AI 工具和服务。'
    },
    {
      icon: Target,
      title: isEn ? 'Honest Reviews' : '真实评测',
      description: isEn
        ? 'Unbiased reviews and comparisons to help you make informed decisions.'
        : '客观公正的评测和比较，帮助您做出明智的选择。'
    },
    {
      icon: Users,
      title: isEn ? 'Community Driven' : '社区驱动',
      description: isEn
        ? 'Leveraging community feedback to continuously improve our recommendations.'
        : '基于社区反馈，持续优化我们的推荐内容。'
    },
    {
      icon: Zap,
      title: isEn ? 'Always Up to Date' : '持续更新',
      description: isEn
        ? 'Regularly updated with the latest AI tools and features.'
        : '及时更新最新的 AI 工具和功能。'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {isEn ? 'About AIAlvora' : '关于 AIAlvora'}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {isEn
                ? 'Discover the best AI tools to boost your productivity.'
                : '发现最优秀的 AI 工具，助力提升工作与生活效率。'}
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 md:p-12 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {isEn ? 'Our Mission' : '我们的使命'}
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {isEn
                ? 'At AIAlvora, our mission is to help individuals and businesses discover the most powerful AI tools available today. We believe that artificial intelligence has the potential to transform how we work, create, and live — and we want to make these powerful tools accessible to everyone.'
                : '在 AIAlvora，我们的使命是帮助个人和企业发现当今最强大的 AI 工具。我们相信人工智能有潜力改变我们的工作、创造和生活方式，我们希望让这些强大的工具惠及每个人。'}
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mt-4">
              {isEn
                ? 'Whether you are a developer looking for the best coding assistant, a designer searching for AI-powered creative tools, or a business professional wanting to automate workflows — we have you covered.'
                : '无论您是寻找最佳编码助手的开发者、寻找 AI 创意工具的设计师，还是想要自动化工作流的业务专业人士，我们都为您提供帮助。'}
            </p>
          </div>

          {/* What We Do */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 md:p-12 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {isEn ? 'What We Offer' : '我们提供什么'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-8 md:p-12 mb-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-8">
              {isEn ? 'Our Platform in Numbers' : '平台数据'}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">18+</div>
                <div className="text-sm opacity-90">
                  {isEn ? 'AI Tools' : 'AI 工具'}
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">10</div>
                <div className="text-sm opacity-90">
                  {isEn ? 'Categories' : '分类'}
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">2</div>
                <div className="text-sm opacity-90">
                  {isEn ? 'Languages' : '语言版本'}
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-90">
                  {isEn ? 'Free to Use' : '免费使用'}
                </div>
              </div>
            </div>
          </div>

          {/* Get In Touch */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {isEn ? 'Get in Touch' : '联系我们'}
            </h2>
            <p className="text-gray-600 mb-6">
              {isEn
                ? 'Have questions or feedback? We would love to hear from you.'
                : '有问题或建议？我们非常乐意听取您的意见。'}
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-200 transition-all"
            >
              {isEn ? 'Contact Us' : '联系我们'}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
