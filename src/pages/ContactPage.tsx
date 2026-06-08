
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function ContactPage() {
  const { currentLang } = useLanguage();
  const isEn = currentLang === 'en';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里可以添加实际的邮件发送逻辑
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {isEn ? 'Contact Us' : '联系我们'}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {isEn
                ? 'Have a question or feedback? We would love to hear from you.'
                : '有问题或建议？我们非常乐意听取您的意见。'}
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {isEn ? 'Email' : '邮箱'}
              </h3>
              <p className="text-gray-600">
                <a href="mailto:850110067@qq.com" className="hover:text-orange-600 transition-colors">
                  850110067@qq.com
                </a>
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {isEn ? 'Response Time' : '响应时间'}
              </h3>
              <p className="text-gray-600">
                {isEn
                  ? 'We respond to most inquiries within 1-2 business days.'
                  : '我们会在 1-2 个工作日内回复大多数查询。'}
              </p>
            </div>
          </div>

          {/* Success Message */}
          {submitted ? (
            <div className="bg-white rounded-xl border border-gray-200 p-8 md:p-12 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {isEn ? 'Thank You!' : '感谢您！'}
              </h2>
              <p className="text-gray-600 mb-6">
                {isEn
                  ? 'Your message has been successfully sent. We will get back to you as soon as possible.'
                  : '您的消息已成功发送。我们会尽快回复您。'}
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
                className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                {isEn ? 'Send Another Message' : '发送另一条消息'}
              </button>
            </div>
          ) : (
            /* Contact Form */
            <div className="bg-white rounded-xl border border-gray-200 p-8 md:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {isEn ? 'Send us a Message' : '给我们发消息'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {isEn ? 'Name' : '姓名'}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder={isEn ? 'Your name' : '您的姓名'}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {isEn ? 'Email' : '邮箱'}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder={isEn ? 'your@email.com' : 'your@email.com'}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {isEn ? 'Subject' : '主题'}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder={isEn ? 'What is this about?' : '关于什么内容？'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {isEn ? 'Message' : '消息'}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                    placeholder={isEn ? 'Your message...' : '您的消息...'}
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-200 transition-all"
                >
                  <Send className="w-5 h-5" />
                  {isEn ? 'Send Message' : '发送消息'}
                </button>
              </form>
            </div>
          )}

          {/* FAQ Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {isEn ? 'Frequently Asked Questions' : '常见问题'}
            </h2>
            <div className="space-y-4">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {isEn
                    ? 'Q: How do I submit an AI tool for review?'
                    : '问：如何提交 AI 工具进行审核？'}
                </h3>
                <p className="text-gray-600">
                  {isEn
                    ? 'A: Use the Submit tool button in our navigation or email us with details about the tool you would like to suggest, including its name, website, and key features.'
                    : '答：使用导航栏中的"提交工具"按钮，或发送邮件告知您想推荐的工具详情，包括工具名称、网址和主要功能。'}
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {isEn
                    ? 'Q: Are all tools free to use?'
                    : '问：所有工具都可以免费使用吗？'}
                </h3>
                <p className="text-gray-600">
                  {isEn
                    ? 'A: We list both free and paid tools. Each tool listing includes pricing information to help you understand the cost. Some tools offer free tiers with limited features.'
                    : '答：我们收录免费和付费工具。每个工具列表都包含价格信息，帮助您了解费用情况。部分工具提供免费版本，但功能可能受限。'}
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {isEn
                    ? 'Q: How often do you update tool listings?'
                    : '问：你们多久更新一次工具信息？'}
                </h3>
                <p className="text-gray-600">
                  {isEn
                    ? 'A: We update our listings regularly as new tools and features become available. Our team continuously monitors the AI tool landscape and updates information accordingly.'
                    : '答：我们会随着新工具和新功能的发布定期更新。我们的团队持续关注 AI 工具领域的发展，并相应更新信息。'}
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {isEn
                    ? 'Q: How do you select which tools to feature?'
                    : '问：你们如何选择收录哪些工具？'}
                </h3>
                <p className="text-gray-600">
                  {isEn
                    ? 'A: We evaluate tools based on quality, user reviews, features, reliability, and overall value. We aim to showcase the best AI tools available in each category.'
                    : '答：我们根据质量、用户评价、功能特点、可靠性和综合价值来评估工具。我们旨在展示每个类别中最优秀的 AI 工具。'}
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {isEn
                    ? 'Q: Can I request a specific tool to be added?'
                    : '问：我可以请求添加某个特定工具吗？'}
                </h3>
                <p className="text-gray-600">
                  {isEn
                    ? "A: Absolutely! Please use our submission form or email us directly. We review all suggestions and add tools that meet our quality standards."
                    : '答：当然可以！请使用我们的提交表单或直接发送邮件。我们会审核所有建议，并添加符合我们质量标准的工具。'}
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {isEn
                    ? 'Q: Do you have a mobile app?'
                    : '问：你们有移动应用吗？'}
                </h3>
                <p className="text-gray-600">
                  {isEn
                    ? "A: Currently, we focus on providing the best web experience. Our site is fully responsive and works great on mobile devices. A dedicated app may be considered in the future."
                    : '答：目前我们专注于提供最佳的网页体验。我们的网站完全响应式设计，在移动设备上也能流畅使用。未来可能会考虑开发专门的应用程序。'}
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {isEn
                    ? 'Q: How can I report an error or outdated information?'
                    : '问：如何报告错误或过时的信息？'}
                </h3>
                <p className="text-gray-600">
                  {isEn
                    ? "A: Please email us with the tool name, the issue you noticed, and any corrections. We appreciate community feedback to keep our listings accurate and up-to-date."
                    : '答：请将工具名称、您发现的问题以及任何更正信息发送邮件给我们。我们非常感谢社区反馈，以确保我们的信息准确且最新。'}
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {isEn
                    ? 'Q: Is my personal information safe when I use the site?'
                    : '问：使用网站时我的个人信息安全吗？'}
                </h3>
                <p className="text-gray-600">
                  {isEn
                    ? "A: Yes. We take user privacy seriously. We do not require account creation for browsing, and any information collected is handled according to our Privacy Policy."
                    : '答：安全。我们非常重视用户隐私。浏览网站不需要创建账户，我们收集的任何信息都按照隐私政策进行处理。'}
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {isEn
                    ? 'Q: Do you offer API access to your tool directory?'
                    : '问：你们提供工具目录的 API 访问吗？'}
                </h3>
                <p className="text-gray-600">
                  {isEn
                    ? "A: Currently, we do not offer public API access. However, if you have a specific need, please contact us and we'd be happy to discuss potential options."
                    : '答：目前我们不提供公开的 API 访问。但如果您有特定需求，请联系我们，我们很乐意讨论可能的合作方案。'}
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {isEn
                    ? 'Q: How can I stay updated with new tools and features?'
                    : '问：如何了解新工具和功能的最新消息？'}
                </h3>
                <p className="text-gray-600">
                  {isEn
                    ? "A: Visit our Latest Added section regularly and check out our News page. New tools are added frequently as the AI landscape evolves."
                    : '答：定期访问我们的"最新收录"栏目和"新闻"页面。随着 AI 领域的发展，新工具会被频繁添加。'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
