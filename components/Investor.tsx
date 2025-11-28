import React from 'react';

const Investor: React.FC = () => {
  return (
    <section id="investor" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Investing</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Always with your total portfolio in mind</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div className="p-6 rounded-xl transition-colors bg-transparent border border-transparent hover:bg-white hover:border-slate-100 hover:shadow-sm">
            <h3 className="font-bold text-slate-900 mb-3">Equities</h3>
            <p className="text-slate-600 leading-relaxed">
              To invest with vision, you need a high-conviction market perspective. We develop ours by distilling information from our teams of strategists, economists, trading and derivatives professionals worldwide. And once we do, we work with you to decide which ideas are right for you.
            </p>
          </div>

          <div className="p-6 rounded-xl transition-colors bg-transparent border border-transparent hover:bg-white hover:border-slate-100 hover:shadow-sm">
            <h3 className="font-bold text-slate-900 mb-3">Fixed Income</h3>
            <p className="text-slate-600 leading-relaxed">
              Our bond market strategists, traders and credit analysts work across markets to find the right mix for you. The goal may be to identify the best choices for your long-term portfolio, seeking income or stability.
            </p>
          </div>

          <div className="p-6 rounded-xl transition-colors bg-transparent border border-transparent hover:bg-white hover:border-slate-100 hover:shadow-sm">
            <h3 className="font-bold text-slate-900 mb-3">Alternative Investments</h3>
            <p className="text-slate-600 leading-relaxed">
              Investing in hedge funds, private equity, private credit and real estate funds can be an attractive long-term complement to a traditional public stock/bond allocation.*
            </p>
          </div>
        </div>

        <p className="mt-8 text-xs text-slate-500">
          *Investing in alternative assets involves higher risks than traditional investments and is suitable only for sophisticated investors. Alternative investments involve greater risks than traditional investments and should not be deemed a complete investment program. They are generally not tax efficient and an investor should consult with his/her tax advisor prior to investing. Alternative investments have higher fees than traditional investments and they may also be highly leveraged and engage in speculative investment techniques, which can magnify the potential for investment loss or gain. The value of the investment may fall as well as rise and investors may get back less than they invested.
        </p>
      </div>
    </section>
  );
};

export default Investor;
