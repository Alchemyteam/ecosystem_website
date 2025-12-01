import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how" className="py-20 bg-slate-50">
      <div className="mx-auto w-full md:w-[80%] lg:w-[75%] xl:w-[70%] px-4 md:px-0">
        <div className="mb-12 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900">How it works</h2>
          <p className="mt-4 text-lg text-slate-600">X functions as a B2B2C ecosystem connecting Sellers to Buyers for transactions, with Project Engineers (PEs) utilizing its features to procure, manage, and oversee supplies.</p>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <div className="relative pb-[56.25%] rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/d7O8zOo429E"
                title="How to Operate the MIG 500 Welding Machine"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
