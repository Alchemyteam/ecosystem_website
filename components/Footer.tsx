import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';

const Footer: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-4 text-white">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-brand-600 rounded flex items-center justify-center text-xs font-bold">X</div>
                <span className="font-bold text-xl">X</span>
              </div>

              {/* Language Dropdown */}
              <div className="relative ml-auto">
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="flex items-center gap-1 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-md text-sm transition-colors border border-slate-700"
                >
                  <span>{language === 'en' ? 'English' : '日本語'}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isLangDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-32 bg-slate-800 border border-slate-700 rounded-md shadow-lg overflow-hidden z-10">
                    <button
                      onClick={() => {
                        setLanguage('en');
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full px-3 py-2 text-left text-sm hover:bg-slate-700 transition-colors ${language === 'en' ? 'bg-slate-700 text-white' : 'text-slate-300'
                        }`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('ja');
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full px-3 py-2 text-left text-sm hover:bg-slate-700 transition-colors ${language === 'ja' ? 'bg-slate-700 text-white' : 'text-slate-300'
                        }`}
                    >
                      日本語
                    </button>
                  </div>
                )}
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed mb-6">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.ourJourney')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#story" className="hover:text-white transition-colors">{t('footer.story')}</a></li>
              <li><a href="#roadmap" className="hover:text-white transition-colors">{t('footer.roadmap')}</a></li>
              <li><a href="#impact" className="hover:text-white transition-colors">{t('footer.impact')}</a></li>
              <li><a href="#tech" className="hover:text-white transition-colors">{t('footer.architecture')}</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <a href="#sector" className="text-white font-semibold">{t('footer.sector')}</a>
            <a href="#investor" className="text-white font-semibold">{t('footer.investor')}</a>
            <a href="#funding" className="text-white font-semibold">{t('footer.crowdfunding')}</a>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.platform')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#howitworks" className="hover:text-white transition-colors">{t('footer.howItWorks')}</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">{t('footer.faq')}</a></li>
              <li><a href="#glossary" className="hover:text-white transition-colors">{t('footer.glossary')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2 text-sm">
              <li>{t('footer.singaporeHQ')}</li>
              <li><a href="mailto:partners@formx.com" className="hover:text-white transition-colors">{t('footer.email')}</a></li>
              <li className="pt-2">
                <span className="text-xs bg-slate-800 px-2 py-1 rounded border border-slate-700">{t('footer.regionalHub')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} {t('footer.copyright')}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">{t('footer.privacyPolicy')}</a>
            <a href="#" className="hover:text-white">{t('footer.termsOfService')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
