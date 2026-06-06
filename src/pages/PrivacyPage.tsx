
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../i18n/LanguageContext';

export default function PrivacyPage() {
  const { currentLang } = useLanguage();
  const isEn = currentLang === 'en';

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-gray-200 p-8 md:p-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              {isEn ? 'Privacy Policy' : '隐私政策'}
            </h1>
            <p className="text-gray-500 mb-8 text-sm">
              {isEn ? 'Last updated: June 5, 2026' : '最后更新时间：2026年6月5日'}
            </p>

            <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {isEn ? '1. Introduction' : '1. 引言'}
                </h2>
                <p>
                  {isEn
                    ? 'At AIAlvora, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.'
                    : 'AIAlvora 致力于保护您的隐私。本隐私政策解释了我们在您访问我们的网站和使用我们的服务时如何收集、使用、披露和保护您的信息。请仔细阅读本隐私政策。如果您不同意本隐私政策的条款，请不要访问本网站。'}
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {isEn ? '2. Information We Collect' : '2. 我们收集的信息'}
                </h2>
                <p className="mb-3">
                  {isEn
                    ? 'We may collect information about you in a variety of ways. The information we may collect on the Site includes:'
                    : '我们可能会以多种方式收集关于您的信息。我们在本网站上可能收集的信息包括：'}
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>{isEn ? 'Personal Data:' : '个人数据：'}</strong>
                    {isEn
                      ? 'We do not require you to provide personally identifiable information to browse our website.'
                      : '浏览我们的网站时，我们不要求您提供个人身份信息。'}
                  </li>
                  <li>
                    <strong>{isEn ? 'Usage Data:' : '使用数据：'}</strong>
                    {isEn
                      ? 'Information automatically collected when you visit our website, including your IP address, browser type, pages visited, time spent on pages, and other anonymous analytics data.'
                      : '您访问我们网站时自动收集的信息，包括您的IP地址、浏览器类型、访问的页面、在页面上停留的时间以及其他匿名分析数据。'}
                  </li>
                  <li>
                    <strong>{isEn ? 'Cookies:' : 'Cookies：'}</strong>
                    {isEn
                      ? 'We use cookies and similar tracking technologies to enhance your experience on our website.'
                      : '我们使用 cookies 和类似的跟踪技术来增强您在我们网站上的体验。'}
                  </li>
                  <li>
                    <strong>{isEn ? 'Favorites Data:' : '收藏数据：'}</strong>
                    {isEn
                      ? 'When you save tools as favorites, this information is stored locally on your device using browser localStorage and is not transmitted to our servers.'
                      : '当您将工具收藏时，此信息使用浏览器的 localStorage 存储在您的设备本地，不会传输到我们的服务器。'}
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {isEn ? '3. How We Use Your Information' : '3. 我们如何使用您的信息'}
                </h2>
                <p className="mb-3">
                  {isEn
                    ? 'We use the information we collect in the following ways:'
                    : '我们以以下方式使用收集到的信息：'}
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{isEn ? 'To operate and maintain our website and services' : '运营和维护我们的网站和服务'}</li>
                  <li>{isEn ? 'To improve user experience and website functionality' : '改善用户体验和网站功能'}</li>
                  <li>{isEn ? 'To analyze website traffic and usage patterns' : '分析网站流量和使用模式'}</li>
                  <li>{isEn ? 'To detect and prevent technical issues' : '检测和防止技术问题'}</li>
                  <li>{isEn ? 'To personalize content based on your language preferences' : '根据您的语言偏好个性化内容'}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {isEn ? '4. Third-Party Services' : '4. 第三方服务'}
                </h2>
                <p>
                  {isEn
                    ? 'We may use third-party services such as Google Analytics to help us understand how our website is used. These third parties may use cookies and similar tracking technologies. Please refer to their respective privacy policies for more information about how they handle your data.'
                    : '我们可能会使用 Google Analytics 等第三方服务来帮助我们了解网站的使用情况。这些第三方可能会使用 cookies 和类似的跟踪技术。请参阅他们各自的隐私政策，了解更多关于他们如何处理您的数据的信息。'}
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {isEn ? '5. Cookies Policy' : '5. Cookies 政策'}
                </h2>
                <p>
                  {isEn
                    ? 'We use cookies to enhance your browsing experience. Cookies are small text files that are stored on your device. You can control cookies through your browser settings. Disabling cookies may affect the functionality of certain features on our website.'
                    : '我们使用 cookies 来增强您的浏览体验。Cookies 是存储在您设备上的小文本文件。您可以通过浏览器设置来控制 cookies。禁用 cookies 可能会影响我们网站某些功能的正常使用。'}
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {isEn ? '6. Data Security' : '6. 数据安全'}
                </h2>
                <p>
                  {isEn
                    ? 'We take reasonable measures to protect the information collected on our website. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.'
                    : '我们采取合理的措施来保护在我们网站上收集的信息。然而，通过互联网传输或电子存储的方法都不是100%安全的。虽然我们努力保护您的信息，但我们不能保证其绝对安全。'}
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {isEn ? '7. Your Privacy Rights' : '7. 您的隐私权'}
                </h2>
                <p className="mb-3">
                  {isEn
                    ? 'Depending on your location, you may have certain rights regarding your personal information, including:'
                    : '根据您所在的位置，您可能对您的个人信息享有某些权利，包括：'}
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{isEn ? 'Access to your personal information' : '访问您的个人信息'}</li>
                  <li>{isEn ? 'Correction of inaccurate data' : '更正不准确的数据'}</li>
                  <li>{isEn ? 'Deletion of your data' : '删除您的数据'}</li>
                  <li>{isEn ? 'Withdrawal of consent' : '撤回同意'}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {isEn ? '8. Children\'s Privacy' : '8. 儿童隐私'}
                </h2>
                <p>
                  {isEn
                    ? 'Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.'
                    : '我们的网站不适用于13岁以下的儿童。我们不会故意收集13岁以下儿童的个人信息。如果您是父母或监护人，并且认为您的孩子向我们提供了个人信息，请联系我们。'}
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {isEn ? '9. Changes to This Privacy Policy' : '9. 本隐私政策的变更'}
                </h2>
                <p>
                  {isEn
                    ? 'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.'
                    : '我们可能会不时更新我们的隐私政策。我们会通过在本页面发布新的隐私政策并更新"最后更新"日期来通知您任何变更。建议您定期查看本隐私政策以了解任何变更。'}
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {isEn ? '10. Contact Us' : '10. 联系我们'}
                </h2>
                <p>
                  {isEn
                    ? 'If you have any questions or concerns about this Privacy Policy, please contact us through the contact information available on our website.'
                    : '如果您对本隐私政策有任何问题或疑虑，请通过我们网站上提供的联系信息与我们联系。'}
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
