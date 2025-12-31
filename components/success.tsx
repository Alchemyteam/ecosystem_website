import React from 'react';
import { ShieldCheck, Clock, PackageCheck, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Success: React.FC = () => {
    const { t } = useLanguage();

    const metrics = [
        { label: t('success.metric1Label'), icon: ShieldCheck, color: 'from-emerald-500 to-teal-500' },
        { label: t('success.metric2Label'), icon: Clock, color: 'from-blue-500 to-cyan-500' },
        { label: t('success.metric3Label'), icon: PackageCheck, color: 'from-purple-500 to-pink-500' },
        { label: t('success.metric4Label'), icon: TrendingUp, color: 'from-orange-500 to-red-500' }
    ];

    const advantages = [
        t('success.advantage1'),
        t('success.advantage2'),
        t('success.advantage3'),
        t('success.advantage4'),
        t('success.advantage5')
    ];

    return (
        <section id="impact" className="relative py-16 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        {t('success.title')}
                    </h2>
                </div>

                <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 items-stretch">
                    {/* Left Side - Success Metrics */}
                    <div className="flex flex-col">
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 h-full flex flex-col">
                            <h3 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-3">
                                <div className="w-1 h-6 bg-gradient-to-b from-brand-500 to-purple-500 rounded-full"></div>
                                {t('success.metricsTitle')}
                            </h3>

                            <div className="grid gap-3 flex-1">
                                {metrics.map((metric, index) => (
                                    <div
                                        key={index}
                                        className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-white p-4 border border-slate-200 hover:border-brand-300 transition-all duration-300 hover:shadow-md"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                                <metric.icon className="w-5 h-5 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">
                                                    {metric.label}
                                                </p>
                                            </div>
                                        </div>
                                        {/* Hover effect gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-brand-500/0 via-brand-500/5 to-brand-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Platform Advantages */}
                    <div className="flex flex-col">
                        <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-6 shadow-2xl overflow-hidden h-full flex flex-col">
                            {/* Background decoration */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brand-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl"></div>

                            <div className="relative z-10 flex flex-col h-full">
                                {/* Title */}
                                <div className="mb-5">
                                    <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white via-brand-200 to-purple-200 bg-clip-text text-transparent mb-3">
                                        {t('success.platformWinsTitle')}
                                    </h3>
                                    <div className="h-0.5 w-16 bg-gradient-to-r from-brand-500 to-purple-500 rounded-full"></div>
                                </div>

                                {/* Key Message */}
                                <div className="mb-5 p-4 rounded-xl bg-gradient-to-br from-brand-500/10 to-cyan-500/10 border border-brand-500/30 backdrop-blur-sm">
                                    <p className="text-base font-bold text-white leading-relaxed">
                                        {t('success.keyMessage1')}
                                    </p>
                                    <p className="text-lg font-bold text-cyan-300 mt-1">
                                        {t('success.keyMessage2')}
                                    </p>
                                </div>

                                {/* Advantages List */}
                                <div className="mb-5 flex-1">
                                    <p className="text-slate-300 text-xs font-semibold mb-3 uppercase tracking-wide">
                                        {t('success.advantageTitle')}
                                    </p>

                                    <ul className="space-y-2">
                                        {advantages.map((item, index) => (
                                            <li key={index} className="flex items-start gap-2 group">
                                                <div className="mt-1">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-150 transition-transform"></div>
                                                </div>
                                                <span className="text-slate-300 group-hover:text-white transition-colors text-xs leading-relaxed">
                                                    {item}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Bottom Summary */}
                                <div className="pt-4 border-t border-slate-700/50 space-y-2">
                                    <div className="flex items-start gap-2">
                                        <span className="text-cyan-400 font-bold text-xs">AURA</span>
                                        <span className="text-slate-300 text-xs">{t('success.auraFooter')}</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-purple-400 font-bold text-xs">VECTOR</span>
                                        <span className="text-slate-300 text-xs">{t('success.vectorFooter')}</span>
                                    </div>
                                    <div className="mt-3 pt-3 border-t border-slate-700/30">
                                        <p className="text-white font-bold text-sm">
                                            {t('success.footerSummary')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Success;

