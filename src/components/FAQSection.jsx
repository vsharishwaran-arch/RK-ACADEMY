import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    q: "Why is RK Academy Karur recommended for Engineering Maths (M1, M2, M3, M4)?",
    a: "We specialize in clearing engineering mathematics backlogs and regular semester exams with concept-focused teaching, solved previous year university paper sets, and shortcut problem-solving methods. Plus, we currently offer an exclusive 25% discount for Engineering Maths students."
  },
  {
    q: "What are the timings for Class 10 & 12 evening tuition batches?",
    a: "Our standard evening batch operates from 6:00 PM to 8:30 PM. We also offer special morning and weekend doubt-clearing sessions to ensure students can balance school and tuition conveniently."
  },
  {
    q: "How does the 35-Day NEET Crash Course work?",
    a: "The NEET Crash Course runs from March 26 to April 30. It covers high-weightage topics in Physics, Chemistry, and Biology through daily intensive chapter revisions, mock test series, and personalized score improvement analysis."
  },
  {
    q: "Are Online Live Classes available for students living outside Karur?",
    a: "Yes! All our courses (Engineering Maths, NEET prep, Grade 10 & 12 tuition) are available via interactive online live streaming sessions with digital board notes and recorded lecture access."
  },
  {
    q: "How can I register or claim the 25% Engineering Maths discount?",
    a: "You can click on the 'Enroll Now' button on our website, call us directly at 9790570707, or send an instant inquiry via WhatsApp. Our admin team will reserve your batch slot immediately."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-14 sm:py-20 bg-[#FAF0E2]/60 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-300 text-slate-800 text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-3 shadow-sm">
            <HelpCircle className="w-4 h-4 text-slate-700" />
            <span>Got Questions? We Have Answers</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 font-normal">
            Everything you need to know about admissions, batch timings, and course structures at RK Academy Karur.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition shadow-sm hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 sm:p-6 text-left flex justify-between items-center gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-sm sm:text-base text-slate-900">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-full border transition flex-shrink-0 ${
                    isOpen ? 'bg-[#D85628] text-white border-[#D85628] rotate-180' : 'bg-slate-100 text-slate-500 border-slate-200'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3 animate-fadeIn font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
