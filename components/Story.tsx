import React, { useRef } from 'react';
import { Sparkles, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Story: React.FC = () => {
    const { t } = useLanguage();
    const timelineRef = useRef<HTMLDivElement>(null);

    const scrollToNode = (index: number) => {
        if (timelineRef.current) {
            const cards = timelineRef.current.querySelectorAll('.timeline-card');
            if (cards[index]) {
                cards[index].scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
        }
    };

    React.useEffect(() => {
        // Instantly set scroll position to the latest node (Dec 10, 2025) on mount
        // using scrollLeft ensures we don't trigger global window scrolling
        if (timelineRef.current) {
            const cards = timelineRef.current.querySelectorAll('.timeline-card');
            if (cards[1]) { // Target Index 1 (Dec 10)
                const card = cards[1] as HTMLElement;
                const container = timelineRef.current;

                // Calculate center position
                const scrollPos = card.offsetLeft - (container.clientWidth / 2) + (card.clientWidth / 2);
                container.scrollLeft = scrollPos;
            }
        }
    }, []);



    return (
        <section id="story" className="relative py-16 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
            {/* Background Decorations - Commercial Professional Feel */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-blue-50/50 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-purple-50/50 rounded-full blur-[100px]"></div>
            </div>

            <div className="relative w-full max-w-[1920px] mx-auto">
                <div className="mb-12 text-center max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">{t('story.title')}</h2>
                    {/* <p className="text-lg text-slate-600 leading-relaxed font-light whitespace-nowrap overflow-hidden text-ellipsis">
                        The living-room blueprint: Roy and Wendy hand-design the platform's first IP architecture.
                    </p> */}
                </div>

                {/* Horizontal Scrollable Timeline Area */}
                <div className="relative w-full">
                    {/* Central Timeline Line */}
                    <div className="absolute top-[80px] left-0 w-full h-0.5 bg-slate-200"></div>

                    <div
                        ref={timelineRef}
                        className="overflow-x-auto pb-8 scrollbar-hide flex items-start px-4 md:px-0 snap-x snap-mandatory"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {/* Spacer for centering start */}
                        <div className="w-[calc(50vw-160px)] flex-shrink-0"></div>

                        {/* First Timeline Item - Dec 4, 2025 */}
                        <div className="group flex flex-col items-center timeline-card flex-shrink-0 snap-center cursor-pointer mr-16 md:mr-24" onClick={() => scrollToNode(0)}>
                            {/* Date Node */}
                            <div className="relative z-10 mb-12 transform group-hover:-translate-y-1 transition-transform duration-300">
                                <div className="bg-white border text-brand-600 border-brand-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-full px-6 py-3 flex items-center gap-2 relative z-20">
                                    <Calendar className="w-4 h-4 text-brand-500" />
                                    <span className="text-base font-bold">{t('story.december4')}</span>
                                </div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-48px] w-0.5 h-12 bg-gradient-to-b from-brand-200 to-transparent"></div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-52px] w-2.5 h-2.5 bg-brand-500 rounded-full border-2 border-white shadow-sm z-10"></div>
                            </div>

                            {/* Card - Napkin MVP */}
                            <div className="relative group-hover:scale-[1.02] transition-transform duration-500 ease-out">
                                <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden w-[320px] h-[420px] flex flex-col">
                                    <div className="h-[250px] w-full bg-slate-100 overflow-hidden relative">
                                        <img
                                            src="/napkin.jpeg"
                                            alt="Napkin MVP - December 4, 2025"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col justify-center bg-white">
                                        <div className="w-10 h-1 bg-brand-500 rounded-full mb-4"></div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{t('story.napkinTitle')}</h3>
                                        <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">{t('story.napkinDesc')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second Timeline Item - Dec 10, 2025 */}
                        <div className="group flex flex-col items-center timeline-card flex-shrink-0 snap-center cursor-pointer mr-16 md:mr-24" onClick={() => scrollToNode(1)}>
                            {/* Date Node */}
                            <div className="relative z-10 mb-12 transform group-hover:-translate-y-1 transition-transform duration-300">
                                <div className="bg-white border text-brand-600 border-brand-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-full px-6 py-3 flex items-center gap-2 relative z-20">
                                    <Calendar className="w-4 h-4 text-brand-500" />
                                    <span className="text-base font-bold">{t('story.december10')}</span>
                                </div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-48px] w-0.5 h-12 bg-gradient-to-b from-brand-200 to-transparent"></div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-52px] w-2.5 h-2.5 bg-brand-500 rounded-full border-2 border-white shadow-sm z-10"></div>
                            </div>

                            {/* Card - AURA - MATCHING SIZE */}
                            <div className="relative group-hover:scale-[1.02] transition-transform duration-500 ease-out">
                                <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden w-[320px] h-[420px] flex flex-col">
                                    <div className="h-[250px] w-full bg-gradient-to-br from-brand-50 to-blue-50 flex items-center justify-center p-6 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/40 to-transparent opacity-50"></div>
                                        <div className="w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center relative z-10 transform -rotate-6">
                                            <svg className="w-10 h-10 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col justify-center bg-white relative z-10">
                                        <div className="w-10 h-1 bg-brand-500 rounded-full mb-4"></div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{t('story.auraTitle')}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {t('story.auraDesc')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* End Node */}
                        <div className="flex flex-col items-center justify-center h-full pt-32 mx-8 snap-center">
                            <div className="bg-slate-50 border-2 border-slate-200 rounded-full px-6 py-3 shadow-inner">
                                <span className="text-base font-bold text-slate-400 tracking-wider">{t('story.toBeContinued')}</span>
                            </div>
                        </div>

                        {/* Spacer for centering end */}
                        <div className="w-[calc(50vw-160px)] flex-shrink-0"></div>
                    </div>
                </div>

                <style jsx>{`
                    .scrollbar-hide::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>
            </div>
        </section>
    );
};

export default Story;
