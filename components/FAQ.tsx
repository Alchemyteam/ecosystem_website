import React, { useState } from 'react';

interface Question {
  id: string;
  question: string;
  answer: string;
}

interface Category {
  key: string;
  label: string;
  questions: Question[];
}

const FAQ: React.FC = () => {
  const categories: Category[] = [
    {
      key: 'investor',
      label: 'For Investor',
      questions: [
        {
          id: 'investor-q1',
          question: 'WHY PLATFORM EXISTS',
          answer: `Industrial Procurement Today Is Slow, Inaccurate & Expensive

Buyer Employees lose thousands of hours due to:
• Confusing SKU naming
• Inconsistent specifications
• Wrong micron / wrong model / wrong material
• Manual checks
• Delays
• Compliance exposure

The platform solves all of these pain points end-to-end.`
        },
        { id: 'investor-q2', question: 'Q2', answer: 'A：……' },
        { id: 'investor-q3', question: 'Q3', answer: 'A：……' },
      ],
    },
    {
      key: 'buyer',
      label: 'For Buyer',
      questions: [
        { id: 'buyer-q1', question: 'Q1', answer: 'A：……' },
        { id: 'buyer-q2', question: 'Q2', answer: 'A：……' },
        { id: 'buyer-q3', question: 'Q3', answer: 'A：……' },
      ],
    },
    {
      key: 'seller',
      label: 'For Seller',
      questions: [
        { id: 'seller-q1', question: 'Q1', answer: 'A：……' },
        { id: 'seller-q2', question: 'Q2', answer: 'A：……' },
        { id: 'seller-q3', question: 'Q3', answer: 'A：……' },
      ],
    },
    {
      key: 'pe',
      label: 'For PE',
      questions: [
        { id: 'pe-q1', question: 'Q1', answer: 'A：……' },
        { id: 'pe-q2', question: 'Q2', answer: 'A：……' },
        { id: 'pe-q3', question: 'Q3', answer: 'A：……' },
      ],
    },
  ];

  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const handleCategoryClick = (categoryKey: string) => {
    if (openCategory === categoryKey) {
      setOpenCategory(null);
      setOpenQuestion(null);
    } else {
      setOpenCategory(categoryKey);
      setOpenQuestion(null);
    }
  };

  const handleQuestionClick = (questionId: string) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="mx-auto w-full md:w-[80%] lg:w-[75%] xl:w-[70%] px-4 md:px-0">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Find the answers to your questions.</p>
        </div>
        <div className="space-y-4">
          {categories.map((category) => (
            <div
              key={category.key}
              className={`rounded-lg transition-colors ${openCategory === category.key
                ? 'bg-white border border-slate-200 shadow-sm'
                : 'bg-transparent border border-transparent hover:bg-white hover:border-slate-200 hover:shadow-sm'
                }`}
            >
              {/* Category Header */}
              <button
                onClick={() => handleCategoryClick(category.key)}
                className="w-full flex items-center justify-between px-5 py-4 text-slate-900 font-semibold text-2xl hover:bg-slate-50 rounded-lg"
              >
                <span>{category.label}</span>
                <span className={`transition-transform ${openCategory === category.key ? 'rotate-180' : ''}`}>▾</span>
              </button>

              {/* Questions List */}
              {openCategory === category.key && (
                <div className="px-4 pb-4 space-y-2">
                  {category.questions.map((question) => (
                    <div
                      key={question.id}
                      className={`rounded-md transition-colors ${openQuestion === question.id
                        ? 'bg-slate-50 border border-slate-200'
                        : 'bg-transparent border border-transparent hover:bg-slate-50 hover:border-slate-200'
                        }`}
                    >
                      {/* Question Header */}
                      <button
                        onClick={() => handleQuestionClick(question.id)}
                        className="w-full flex items-center justify-between px-4 py-3 text-slate-800 font-medium text-lg hover:bg-slate-100 rounded-md"
                      >
                        <span>{question.question}</span>
                        <span className={`transition-transform text-sm ${openQuestion === question.id ? 'rotate-180' : ''}`}>▾</span>
                      </button>

                      {/* Answer */}
                      {openQuestion === question.id && (
                        <div className="px-4 pb-3 text-slate-600">
                          {question.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
