import React from 'react';

const Story: React.FC = () => {
    return (
        <section id="story" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Story</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        The living-room blueprint: Roy and Wendy hand-design the platform's first IP architecture.
                    </p>
                </div>

                {/* Horizontal Timeline */}
                <div className="relative mt-16">
                    {/* Timeline Nodes Row */}
                    <div className="flex items-center justify-center gap-8 mb-4">
                        {/* December 2025 Node */}
                        <div className="bg-white border-4 border-brand-500 rounded-full px-6 py-3 shadow-lg">
                            <span className="text-base font-bold text-brand-600 whitespace-nowrap">December 2025</span>
                        </div>

                        {/* Timeline Line */}
                        <div className="h-1 w-24 bg-slate-200"></div>

                        {/* 2026 Node */}
                        <div className="bg-white border-4 border-brand-500 rounded-full px-6 py-3 shadow-lg">
                            <span className="text-base font-bold text-brand-600">2026</span>
                        </div>

                        {/* Timeline Line */}
                        <div className="h-1 w-24 bg-slate-200"></div>

                        {/* To Be Continued Node */}
                        <div className="bg-slate-100 border-4 border-slate-300 rounded-full px-6 py-3">
                            <span className="text-base font-bold text-slate-400 whitespace-nowrap">To Be Continued...</span>
                        </div>
                    </div>

                    {/* Cards Row - Below Timeline */}
                    <div className="flex items-start justify-center gap-16 mt-12">
                        {/* December 2025 Card - Napkin MVP */}
                        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden max-w-xs">
                            <img
                                src="/napkin.jpeg"
                                alt="The living-room blueprint - December 2025"
                                className="w-full h-auto"
                            />
                            <div className="p-5 bg-gradient-to-br from-slate-50 to-white">
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Napkin MVP</h3>
                            </div>
                        </div>

                        {/* 2026 Card - More Milestones */}
                        <div className="bg-white rounded-2xl border-2 border-dashed border-slate-300 max-w-xs">
                            <div className="flex flex-col items-center justify-center h-full p-8 min-h-[300px]">
                                <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-7 h-7 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </div>
                                <p className="text-slate-500 font-medium text-center">More milestones coming soon...</p>
                                <p className="text-sm text-slate-400 mt-2 text-center">Stay tuned for updates on our journey</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Story;
