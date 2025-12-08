import React, { useState } from 'react';

interface GlossaryTerm {
  term: string;
  description: string;
}

interface GlossaryData {
  [key: string]: GlossaryTerm[];
}

const Glossary: React.FC = () => {
  // Define all 27 letters (A-Z and #)
  const letters = ['#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  // Glossary data organized by first letter
  const glossaryData: GlossaryData = {
    'G': [
      {
        term: 'GMP – Good Manufacturing Practice',
        description: 'How you make it (consistent, safe, traceable).',
      },
      {
        term: 'GLP – Good Laboratory Practice',
        description: 'How you test it (accurate, lab auditable, compliant).',
      },
    ],
    '#': [
      {
        term: '316L',
        description: 'corrosion-resistant stainless steel with low carbon, ideal for chemical, marine, and high-purity environments',
      },
    ],
  };

  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  const handleLetterClick = (letter: string) => {
    setSelectedLetter(selectedLetter === letter ? null : letter);
  };

  return (
    <section id="glossary" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="mx-auto w-full md:w-[80%] lg:w-[75%] xl:w-[70%] px-4 md:px-0">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Glossary</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Find the commonly used terms to help you better understand X.</p>
        </div>

        {/* Letter Buttons Grid */}
        <div className="grid grid-cols-9 sm:grid-cols-13 md:grid-cols-14 lg:grid-cols-18 gap-2 mb-8">
          {letters.map((letter) => (
            <button
              key={letter}
              onClick={() => handleLetterClick(letter)}
              className={`aspect-square w-full min-w-[40px] max-w-[50px] flex items-center justify-center rounded-md font-semibold text-sm transition-all ${selectedLetter === letter
                  ? 'bg-slate-900 text-white shadow-md'
                  : glossaryData[letter]
                    ? 'bg-white text-slate-900 border border-slate-300 hover:bg-slate-100 hover:border-slate-400'
                    : 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
                }`}
              disabled={!glossaryData[letter]}
            >
              {letter}
            </button>
          ))}
        </div>

        {/* Glossary Terms Display */}
        {selectedLetter && glossaryData[selectedLetter] && (
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{selectedLetter}</h3>
            <div className="space-y-4">
              {glossaryData[selectedLetter].map((item, index) => (
                <div key={index} className="border-b border-slate-100 last:border-b-0 pb-4 last:pb-0">
                  <p className="text-slate-700">
                    <span className="font-bold">{item.term}</span>
                    {item.description && (
                      <>
                        {item.term.includes('=') ? ' = ' : ': '}
                        <span className="font-normal">{item.description}</span>
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {!selectedLetter && (
          <div className="text-center py-12 text-slate-500">
            <p>Select a letter above to view glossary terms</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Glossary;
