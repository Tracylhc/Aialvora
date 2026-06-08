
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../i18n/LanguageContext';

export default function TermsPage() {
  const { currentLang } = useLanguage();
  const isEn = currentLang === 'en';

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-gray-200 p-8 md:p-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {isEn ? 'Terms of Service' : '服务条款'}
            </h1>
            <p className="text-gray-500 mb-8 text-sm">
              {isEn ? 'Last updated: June 7, 2026' : '最后更新时间：2026年6月7日'}
            </p>

            <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {isEn ? '1. Acceptance of Terms' : '1. 条款的接受'}
                </h2>
                <p>
                  {isEn
                    ? 'By accessing or using AIAlvora (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Service.'
                    : '访问或使用 AIAlvora（以下简称"服务"），即表示您同意受本服务条款（以下简称"条款"）的约束。如果您不同意这些条款，请不要使用我们的服务。'}
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {isEn ? '2. Description of Service' : '2. 服务描述'}
                </h2>
                <p>
                  {isEn
                    ? 'AIAlvora provides a directory and review platform for AI tools and services. We curate and organize information about various AI tools to help users discover and compare them.'
                    : 'AIAlvora 提供 AI 工具和服务的目录及评测平台。我们策划和整理各类 AI 工具的信息，帮助用户发现和比较它们。'}
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {isEn ? '3. User Responsibilities' : '3. 用户责任'}
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    {isEn
                      ? 'Use the Service only for lawful purposes and in accordance with these Terms.'
                      : '仅将服务用于合法目的，并遵守本条款。'}
                  </li>
                  <li>
                    {isEn
                      ? 'Do not attempt to interfere with or disrupt the Service or servers.'
                      : '不要尝试干扰或破坏服务或服务器。'}
                  </li>
                  <li>
                    {isEn
                      ? 'Do not use automated tools to scrape or copy content from the Service without permission.'
                      : '未经允许，不要使用自动化工具抓取或复制服务中的内容。'}
                  </li>
                  <li>
                    {isEn
                      ? 'Respect the intellectual property rights of others.'
                      : '尊重他人的知识产权。'}
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {isEn ? '4. Intellectual Property' : '4. 知识产权'}
                </h2>
                <p>
                  {isEn
                    ? 'All content on the Service, including text, graphics, logos, images, and software, is the property of AIAlvora or its content suppliers and is protected by copyright and other intellectual property laws. Product names, logos, and trademarks mentioned on the Service belong to their respective owners.'
                    : '服务上的所有内容，包括文本、图形、标志、图像和软件，均属于 AIAlvora 或其内容供应商的财产，受版权和其他知识产权法保护。服务中提到的产品名称、标志和商标均属于其各自所有者。'}
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {isEn ? '5. Third-Party Links' : '5. 第三方链接'}
                </h2>
                <p>
                  {isEn
                    ? 'The Service contains links to third-party websites and services. We are not responsible for the content, privacy policies, or practices of any third-party sites or services. We recommend reviewing the terms and policies of any third-party services you access through links from our Service.'
                    : '服务包含第三方网站和服务的链接。我们不对任何第三方网站或服务的内容、隐私政策或做法负责。我们建议您审查通过服务中的链接访问的任何第三方服务的条款和政策。'}
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {isEn ? '6. Disclaimer of Warranties' : '6. 免责声明'}
                </h2>
                <p>
                  {isEn
                    ? 'The Service is provided on an "as is" and "as available" basis without any warranties, either express or implied. We do not warrant that the Service will be uninterrupted, error-free, or free of viruses or other harmful components. Information about AI tools is provided for reference purposes only and does not constitute endorsement of any tool or service.'
                    : '服务按"原样"和"可用"的基础提供，不附带任何明示或暗示的保证。我们不保证服务不会中断、没有错误，或不包含病毒或其他有害组件。关于 AI 工具的信息仅供参考，不构成对任何工具或服务的认可。'}
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {isEn ? '7. Limitation of Liability' : '7. 责任限制'}
                </h2>
                <p>
                  {isEn
                    ? 'To the maximum extent permitted by law, AIAlvora shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation loss of profits, data, or other intangible losses, resulting from your use of or inability to use the Service.'
                    : '在法律允许的最大范围内，AIAlvora 不对因使用或无法使用服务而导致的任何间接、附带、特殊、后果性或惩罚性损害承担责任，包括但不限于利润、数据或其他无形损失。'}
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {isEn ? '8. Changes to Terms' : '8. 条款变更'}
                </h2>
                <p>
                  {isEn
                    ? 'We reserve the right to modify these Terms at any time. We will notify users of significant changes by updating the "Last updated" date on this page. Your continued use of the Service after modifications constitutes acceptance of the revised Terms.'
                    : '我们保留随时修改本条款的权利。我们将通过更新本页面的"最后更新"日期通知用户重大变更。您在修改后继续使用服务即表示接受修订后的条款。'}
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {isEn ? '9. Contact Us' : '9. 联系我们'}
                </h2>
                <p>
                  {isEn
                    ? 'If you have any questions about these Terms, please contact us through the Contact page on our website.'
                    : '如果您对本条款有任何疑问，请通过我们网站的联系页面与我们联系。'}
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
