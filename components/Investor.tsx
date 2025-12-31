import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Investor: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="investor" className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="mx-auto w-full md:w-[90%] lg:w-[90%] xl:w-[90%] px-4 md:px-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">{t('investor.title')}</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">{t('investor.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div className="p-6 rounded-xl transition-colors bg-transparent border border-transparent hover:bg-white hover:border-slate-100 hover:shadow-sm">
            <h3 className="font-bold text-slate-900 mb-3">{t('investor.equityTitle')}</h3>
            <p className="text-slate-600 leading-relaxed">
              {t('investor.equityDesc')}
            </p>
          </div>

          <div className="p-6 rounded-xl transition-colors bg-transparent border border-transparent hover:bg-white hover:border-slate-100 hover:shadow-sm">
            <h3 className="font-bold text-slate-900 mb-3">{t('investor.assetTitle')}</h3>
            <p className="text-slate-600 leading-relaxed">
              {t('investor.assetDesc')}
            </p>
          </div>

          <div className="p-6 rounded-xl transition-colors bg-transparent border border-transparent hover:bg-white hover:border-slate-100 hover:shadow-sm">
            <h3 className="font-bold text-slate-900 mb-3">{t('investor.networkTitle')}</h3>
            <p className="text-slate-600 leading-relaxed">
              {t('investor.networkDesc')}
            </p>
          </div>
        </div>

        <p className="mt-8 text-xs text-slate-500">
          {t('investor.disclaimer')}
        </p>
      </div>
    </section>
  );
};

export default Investor;
