
import { Sparkles, Github, Twitter, Mail } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  
  const footerLinks = [
    {
      title: t('product'),
      links: [
        { name: t('aiTools'), href: '/tools' },
        { name: t('ranking'), href: '/ranking' },
        { name: t('tutorials'), href: '/tutorials' },
        { name: t('prompts'), href: '/prompts' },
      ]
    },
    {
      title: t('resources'),
      links: [
        { name: t('apiDocs'), href: '#' },
        { name: t('developerGuide'), href: '#' },
        { name: t('community'), href: '#' },
        { name: t('faq'), href: '#' },
      ]
    },
    {
      title: t('about'),
      links: [
        { name: t('aboutUs'), href: '#' },
        { name: t('contactUs'), href: '#' },
        { name: t('partners'), href: '#' },
        { name: t('privacyPolicy'), href: '/privacy' },
      ]
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">{t('siteName')}</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              {t('footerDescription')}
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
