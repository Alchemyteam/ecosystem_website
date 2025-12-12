import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-100 via-white to-white opacity-70"></div>
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-b from-blue-50/50 to-transparent blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-100 text-xs font-semibold tracking-wide uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
              Ecosystem Platform
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Strategic Sector <br className="hidden lg:block" />
              <span className="text-brand-600">Penetration & Growth</span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              A market-facing, neutral platform connecting Buyers, Sellers, and PEs.
              Optimizing rentals, ensuring compliance, and driving liquidity in the infrastructure logistics sector.
            </p>

            <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto lg:mx-0">
              <a
                href="#contact"
                className="px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-semibold text-lg transition-all shadow-xl shadow-brand-500/30 flex items-center justify-center gap-2"
              >
                Join Ecosystem <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#modules"
                className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center"
              >
                Explore Module
              </a>
              <a
                href="#how"
                className="px-8 py-4 bg-slate-700 hover:bg-slate-800 text-white rounded-xl font-semibold text-lg transition-all shadow-lg flex items-center justify-center gap-2"
              >
                See How It Works
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-brand-500 to-purple-600 hover:from-brand-600 hover:to-purple-700 text-white rounded-xl font-semibold text-lg transition-all shadow-lg flex items-center justify-center"
              >
                Try Demo
              </a>
            </div>
          </div>

          {/* Visual Abstract Illustration */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
            <div className="relative w-full aspect-square lg:aspect-[4/3] bg-gradient-to-br from-slate-100 to-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col p-6">
              {/* Mock UI Header */}
              <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div className="ml-auto px-3 py-1 bg-slate-100 rounded-md text-xs font-medium text-slate-500">X Dashboard</div>
              </div>

              {/* Mock Grid */}
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="bg-purple-50/50 rounded-xl p-4 border border-purple-100 flex flex-col justify-between">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-800">AURA</div>
                    <div className="text-xs text-slate-500">finds the correct item.</div>
                  </div>
                </div>
                <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100 flex flex-col justify-between">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-800">VECTOR</div>
                    <div className="text-xs text-slate-500">guarantees flawless execution</div>
                  </div>
                </div>
                <div className="col-span-2 bg-white rounded-xl border border-slate-100 shadow-sm p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-semibold text-slate-700">Speed of Buyer Onboard</div>
                    <div className="text-xs text-brand-600 bg-brand-50 px-2 py-1 rounded">Live Updates</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-500 w-3/4"></div>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 w-1/2"></div>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-5/6"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative floating elements */}
              <div className="absolute -right-4 top-20 bg-white p-3 rounded-lg shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce duration-[3000ms]">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-xs font-medium text-slate-600">PE Certified</span>
              </div>
            </div>
          </div>

        </div>

        {/* Full-width green checkmarks section */}
        <div className="mt-8 pt-6 border-t border-slate-200">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-x-8 gap-y-4 text-sm text-slate-500">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Zero disputes in 6 months</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Scalable Credit Rail</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>100% Demand Driven Merchandise</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>GTM pipeline live Day 1</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
