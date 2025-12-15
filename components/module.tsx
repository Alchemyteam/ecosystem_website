import React from 'react';

const Module: React.FC = () => {
    return (
        <section id="modules" className="relative py-16 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-white via-brand-200 to-purple-200 bg-clip-text text-transparent leading-tight">
                        BUILT FOR ENTERPRISE. DESIGNED FOR SCALE.
                    </h2>

                    <div className="max-w-2xl mx-auto text-slate-300 text-sm">
                        <p className="font-light">Every search trains <span className="text-cyan-300 font-semibold">AURA</span>. Every transaction runs through <span className="text-purple-400 font-semibold">VECTOR</span>.</p>
                    </div>
                </div>

                {/* Dual Engine Cards */}
                <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-6">
                    {/* AURA Card */}
                    <div className="group relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500 to-cyan-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

                        <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl p-5 border border-brand-500/20 hover:border-brand-500/40 transition-all duration-500 h-full">
                            {/* Header */}
                            <div className="mb-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500 to-cyan-500 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">AURA</h3>
                                        <p className="text-cyan-300 text-xs font-medium">Industrial Intelligence Engine</p>
                                    </div>
                                </div>
                                <div className="h-0.5 w-16 bg-gradient-to-r from-brand-500 to-cyan-500 rounded-full"></div>
                            </div>

                            {/* Main Content */}
                            <div className="space-y-3">
                                <div className="bg-gradient-to-br from-brand-500/10 to-cyan-500/10 rounded-xl p-3 border border-brand-500/20">
                                    <h4 className="text-sm font-bold text-white leading-tight">
                                        AURA Thinks Like an Engineer.<br />
                                        <span className="text-cyan-300 text-xs">So your Buyer Employees don't have to.</span>
                                    </h4>
                                </div>

                                <div>
                                    <p className="text-slate-300 font-semibold mb-2 text-xs">AURA understands:</p>
                                    <ul className="space-y-1.5">
                                        {[
                                            'Function, Model, Micron',
                                            'Material & Media',
                                            'Country of Origin',
                                            'Sector context (O&G, IG, Marine, Pharma)',
                                            'Buyer Employee behaviour'
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-start gap-2 group/item">
                                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover/item:scale-150 transition-transform flex-shrink-0"></div>
                                                <span className="text-slate-300 group-hover/item:text-white transition-colors text-xs">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-3 border-t border-slate-700/50">
                                    <p className="text-slate-400 mb-2 text-xs">Returns correct items in seconds — not after 20 failed searches.</p>
                                    <div className="inline-block px-3 py-1.5 rounded-lg bg-gradient-to-r from-brand-500/20 to-cyan-500/20 border border-brand-500/30">
                                        <p className="text-cyan-300 font-bold text-xs">AURA = Precision Industrial Search</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* VECTOR Card */}
                    <div className="group relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

                        <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl p-5 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 h-full">
                            {/* Header */}
                            <div className="mb-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">VECTOR</h3>
                                        <p className="text-purple-300 text-xs font-medium">Flow & Compliance Engine</p>
                                    </div>
                                </div>
                                <div className="h-0.5 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                            </div>

                            {/* Main Content */}
                            <div className="space-y-3">
                                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-3 border border-purple-500/20">
                                    <h4 className="text-sm font-bold text-white leading-tight">
                                        VECTOR Executes Like a Corporate System.<br />
                                        <span className="text-purple-300 text-xs">Because procurement cannot fail.</span>
                                    </h4>
                                </div>

                                <div>
                                    <p className="text-slate-300 font-semibold mb-2 text-xs">VECTOR enforces:</p>
                                    <ul className="space-y-1.5">
                                        {[
                                            'Order# integrity',
                                            'Contract pricing accuracy',
                                            'Delivery tracking',
                                            'Identity authentication (SSO, LDAP, ADFS/IdP)',
                                            'Compliance and audit trail',
                                            'VMI governance & fulfilment'
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-start gap-2 group/item">
                                                <div className="mt-1 w-1 h-1 rounded-full bg-purple-400 group-hover/item:scale-150 transition-transform flex-shrink-0"></div>
                                                <span className="text-slate-300 group-hover/item:text-white transition-colors text-xs">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-3 border-t border-slate-700/50">
                                    <p className="text-slate-400 mb-2 text-xs">Every transaction becomes correct, safe, and traceable.</p>
                                    <div className="inline-block px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                                        <p className="text-purple-300 font-bold text-xs">VECTOR = Enterprise Procurement Infrastructure</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Accent */}
                <div className="mt-6 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
                        <div className="flex gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                        </div>
                        <span className="text-slate-400 text-xs">Dual-Engine Architecture, Compound Value.</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Module;
