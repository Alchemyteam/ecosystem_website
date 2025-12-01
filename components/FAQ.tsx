import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const items = [
    { key: 'investor', label: 'For investor', content: 'Hello，investor' },
    { key: 'buyer', label: 'For buyer', content: 'Hello，buyer' },
    { key: 'seller', label: 'For seller', content: 'Hello，seller' },
  ];
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <section id="faq" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="mx-auto w-full md:w-[80%] lg:w-[75%] xl:w-[70%] px-4 md:px-0">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Find the answers to your questions.</p>
        </div>
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.key}
              className={`rounded-lg transition-colors ${
                openKey === item.key
                  ? 'bg-white border border-slate-200 shadow-sm'
                  : 'bg-transparent border border-transparent hover:bg-white hover:border-slate-200 hover:shadow-sm'
              }`}
            >
              <button
                onClick={() => setOpenKey(openKey === item.key ? null : item.key)}
                className="w-full flex items-center justify-between px-5 py-4 text-slate-900 font-semibold text-2xl hover:bg-slate-50"
              >
                <span>{item.label}</span>
                <span className={`transition-transform ${openKey === item.key ? 'rotate-180' : ''}`}>▾</span>
              </button>
              {openKey === item.key && (
                <div className="px-4 pb-4 text-slate-700">{item.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
