
import { useState } from 'react';
import { Send, CheckCircle, ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { categories } from '../data/categories';
import { useLanguage } from '../i18n/LanguageContext';

export default function SubmitPage() {
  const { currentLang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    website: '',
    category: '',
    description: '',
    tags: '',
    pricing: '',
    features: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="pt-24 pb-12">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl border border-gray-100 p-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{currentLang === 'en' ? 'Submitted Successfully!' : '提交成功！'}</h2>
              <p className="text-gray-600 mb-8">
                {currentLang === 'en' 
                  ? 'Thank you for submitting an AI tool! We will review your submission within 1-3 business days and it will be displayed on the website once approved.' 
                  : '感谢您提交AI工具！我们会在1-3个工作日内审核您的提交，通过后会在网站上展示。'}
              </p>
              <a
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                {currentLang === 'en' ? 'Back to Home' : '返回首页'}
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24 pb-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <a href="/" className="p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </a>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{currentLang === 'en' ? 'Submit Tool' : '提交工具'}</h1>
              <p className="text-gray-600">{currentLang === 'en' ? 'Share the excellent AI tools you discovered' : '分享您发现的优秀AI工具'}</p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{currentLang === 'en' ? 'Tool Name *' : '工具名称 *'}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  placeholder={currentLang === 'en' ? 'Enter tool name' : '输入工具名称'}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{currentLang === 'en' ? 'Official Website *' : '官方网站 *'}</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  placeholder="https://example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{currentLang === 'en' ? 'Category *' : '分类 *'}</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white"
                >
                  <option value="">{currentLang === 'en' ? 'Select a category' : '请选择分类'}</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.name}>{cat.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{currentLang === 'en' ? 'Pricing Model *' : '收费模式 *'}</label>
                <select
                  name="pricing"
                  value={formData.pricing}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white"
                >
                  <option value="">{currentLang === 'en' ? 'Select pricing model' : '请选择收费模式'}</option>
                  <option value="免费">{currentLang === 'en' ? 'Free' : '免费'}</option>
                  <option value="免费/付费">{currentLang === 'en' ? 'Free/Paid' : '免费/付费'}</option>
                  <option value="付费">{currentLang === 'en' ? 'Paid' : '付费'}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{currentLang === 'en' ? 'Tool Description *' : '工具简介 *'}</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none"
                  placeholder={currentLang === 'en' ? 'Describe the main features and characteristics of this tool in one sentence' : '用一句话描述这个工具的主要功能和特点'}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{currentLang === 'en' ? 'Feature Tags' : '功能标签'}</label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  placeholder={currentLang === 'en' ? 'Separated by commas, e.g.: Q&A, Content Creation, Code Generation' : '用逗号分隔，如：智能问答,内容创作,代码生成'}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{currentLang === 'en' ? 'Core Features' : '核心功能'}</label>
                <textarea
                  name="features"
                  value={formData.features}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none"
                  placeholder={currentLang === 'en' ? 'Describe the main functional features of the tool' : '描述工具的主要功能特性'}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
              >
                <Send className="w-5 h-5" />
                {currentLang === 'en' ? 'Submit Tool' : '提交工具'}
              </button>

              <p className="text-xs text-gray-500 text-center">
                {currentLang === 'en' ? 'By submitting, you agree to our Terms of Service and Privacy Policy' : '提交即表示您同意我们的服务条款和隐私政策'}
              </p>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
