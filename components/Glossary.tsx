import React, { useState } from 'react';

const Glossary: React.FC = () => {
  const items = [
    { key: 'b', label: 'B', content: 'Buyer' },
    { key: 'i', label: 'I', content: 'Investor' },
    { key: 's', label: 'S', content: 'Seller' },
  ];
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <section id="glossary" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-24">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Glossary</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">This glossary contains commonly used terms to help you better understand X.</p>
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

export default Glossary;
