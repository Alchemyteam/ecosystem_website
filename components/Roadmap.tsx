import React from 'react';
import { PHASES } from '../constants';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Roadmap: React.FC = () => {
  const { t } = useLanguage();

  const phases = [
    {
      phase: t('roadmap.phase1'),
      title: t('roadmap.phase1Title'),
      duration: t('roadmap.phase1Duration'),
      items: [t('roadmap.phase1Item1'), t('roadmap.phase1Item2'), t('roadmap.phase1Item3'), t('roadmap.phase1Item4')],
      status: 'current'
    },
    {
      phase: t('roadmap.phase2'),
      title: t('roadmap.phase2Title'),
      duration: t('roadmap.phase2Duration'),
      items: [t('roadmap.phase2Item1'), t('roadmap.phase2Item2'), t('roadmap.phase2Item3')],
      status: 'upcoming'
    },
    {
      phase: t('roadmap.phase3'),
      title: t('roadmap.phase3Title'),
      duration: t('roadmap.phase3Duration'),
      items: [t('roadmap.phase3Item1'), t('roadmap.phase3Item2'), t('roadmap.phase3Item3')],
      status: 'upcoming'
    },
    {
      phase: t('roadmap.phase4'),
      title: t('roadmap.phase4Title'),
      duration: t('roadmap.phase4Duration'),
      items: [t('roadmap.phase4Item1'), t('roadmap.phase4Item2'), t('roadmap.phase4Item3')],
      status: 'upcoming'
    }
  ];

  return (
    <section id="roadmap" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900">{t('roadmap.title')}</h2>
          <p className="mt-4 text-lg text-slate-600">
            {t('roadmap.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-8 left-0 w-full h-0.5 bg-slate-200 -z-10 transform translate-y-4"></div>

          {phases.map((phase, index) => (
            <div key={index} className="relative pt-4">
              {/* Dot Indicator */}
              <div className="hidden lg:block absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-brand-500 rounded-full z-10"></div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 h-full flex flex-col">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase rounded-full mb-2">
                    {phase.phase}
                  </span>
                  <div className="text-sm text-slate-500 font-medium">{phase.duration}</div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">{phase.title}</h3>

                <ul className="space-y-3 mb-6 flex-grow">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <ArrowRight className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {phase.status === 'current' && (
                  <div className="mt-auto pt-4 border-t border-slate-50 text-center">
                    <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">{t('roadmap.activeNow')}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;