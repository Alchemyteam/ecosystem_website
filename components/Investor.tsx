import React from 'react';

const Investor: React.FC = () => {
  return (
    <section id="investor" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="mx-auto w-full md:w-[90%] lg:w-[90%] xl:w-[90%] px-4 md:px-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Investing</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Always with Ecosystem Value Creation in Sight</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div className="p-6 rounded-xl transition-colors bg-transparent border border-transparent hover:bg-white hover:border-slate-100 hover:shadow-sm">
            <h3 className="font-bold text-slate-900 mb-3">Strategic Equity</h3>
            <p className="text-slate-600 leading-relaxed">
            To invest with vision, you need a high-conviction market perspective. We develop ours by distilling real transactional data across the entire B2B2C ecosystem of verified Sellers, Buyers, and Project Engineers (PEs). Investing in X provides access to this unique data equity, which serves as a leading indicator for strategic capital allocation across the supply chain.
            </p>
          </div>

          <div className="p-6 rounded-xl transition-colors bg-transparent border border-transparent hover:bg-white hover:border-slate-100 hover:shadow-sm">
            <h3 className="font-bold text-slate-900 mb-3">Digital Asset</h3>
            <p className="text-slate-600 leading-relaxed">
             X represents a high-growth, technology-enabled private asset, offering direct exposure to the non-cyclical digitization of the supply chain. As a market-facing, neutral platform, it functions as a mission-critical piece of digital infrastructure. This investment provides an attractive long-term complement to traditional public stock or bond allocations, capturing value from standardized process and transaction control.
            </p>
          </div>

          <div className="p-6 rounded-xl transition-colors bg-transparent border border-transparent hover:bg-white hover:border-slate-100 hover:shadow-sm">
            <h3 className="font-bold text-slate-900 mb-3">Network Leverage</h3>
            <p className="text-slate-600 leading-relaxed">
              Investing in X is fundamentally an investment in network effects and high operational leverage. By connecting and streamlining complex procurement and supply management for all participants, your capital is magnified by driving industry-wide supply chain efficiency. This unique position allows sophisticated investors to shape market standards and maximize return on capital in a manner similar to specialized alternative investment strategies.
            </p>
          </div>
        </div>

        <p className="mt-8 text-xs text-slate-500">
          *Investing in alternative digital infrastructure and network-leveraged assets involves higher risks than traditional public investments and is suitable only for sophisticated investors. Alternative investments involve greater risks and should not be deemed a complete investment program. They are generally not tax-efficient and an investor should consult with his/her tax advisor prior to investing. These investments may have higher fees than traditional investments and may engage in strategies which can magnify the potential for investment loss or gain. The value of the investment may fall as well as rise and investors may get back less than they invested.
        </p>
      </div>
    </section>
  );
};

export default Investor;
