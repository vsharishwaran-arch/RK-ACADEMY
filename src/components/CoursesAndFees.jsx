import React, { useState } from 'react';
import { BookOpenCheck, Calculator, Stethoscope, Sparkles, MessageCircle, Percent } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

export default function CoursesAndFees({ onOpenEnroll }) {
  const [selectedEnggPapers, setSelectedEnggPapers] = useState(2);
  const [learningMode, setLearningMode] = useState('offline');

  // Fee calculation logic
  const enggPaperRate = 1500;
  const enggSubtotal = enggPaperRate * selectedEnggPapers;
  const enggDiscount = Math.round(enggSubtotal * 0.25);
  const enggFinal = enggSubtotal - enggDiscount;

  return (
    <section id="courses-fees" className="py-12 sm:py-16 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-navy-800 text-white text-[10px] sm:text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full mb-2.5 shadow-sm">
            <BookOpenCheck className="w-3.5 h-3.5 text-amber-300" />
            <span>Academic Offerings</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-navy-900">
            Courses & Fee Details
          </h2>
          <p className="text-slate-600 text-xs sm:text-base mt-2 font-medium">
            Transparent pricing with special discounts for engineering & school students.
          </p>
          <div className="w-12 sm:w-16 h-1 bg-navy-800 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* 1. COURSES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          
          {/* Engineering Maths Card */}
          <div className="bg-white border-2 border-academy-maroon rounded-3xl p-5 sm:p-6 shadow-md flex flex-col justify-between relative">
            <div>
              <span className="bg-academy-maroon text-white font-extrabold text-[10px] uppercase px-2.5 py-1 rounded-full w-fit block mb-3">
                🔥 25% OFF SPECIAL
              </span>
              <div className="p-2.5 bg-red-50 rounded-2xl w-fit mb-3">
                <Calculator className="w-5 h-5 text-academy-maroon" />
              </div>
              <h3 className="font-display font-extrabold text-lg sm:text-xl text-navy-900 mb-2">
                Engineering Maths (M1–M4)
              </h3>
              <p className="text-xs text-slate-600 font-medium mb-3 leading-relaxed">
                Semester preparation & arrear recovery for M1, M2, M3, M4 papers.
              </p>
              <div className="space-y-1 text-xs text-slate-700 font-semibold mb-4">
                <div>✓ Anna Univ & Deemed Varsities</div>
                <div>✓ Solved previous year papers</div>
                <div>✓ Online & Offline batches</div>
              </div>
            </div>
            <div className="border-t border-slate-100 pt-3">
              <div className="text-[11px] text-slate-500 font-medium">Fee Starting From:</div>
              <div className="flex items-baseline gap-2">
                <span className="font-display font-black text-xl sm:text-2xl text-navy-900">₹1,125 / paper</span>
                <span className="text-xs text-slate-400 line-through">₹1,500</span>
              </div>
            </div>
          </div>

          {/* NEET Crash Course Card */}
          <div className="bg-white border-2 border-amber-400 rounded-3xl p-5 sm:p-6 shadow-md flex flex-col justify-between">
            <div>
              <span className="bg-amber-500 text-navy-900 font-extrabold text-[10px] uppercase px-2.5 py-1 rounded-full w-fit block mb-3">
                ⚡ MARCH 26 – APRIL 30
              </span>
              <div className="p-2.5 bg-amber-50 rounded-2xl w-fit mb-3">
                <Stethoscope className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="font-display font-extrabold text-lg sm:text-xl text-navy-900 mb-2">
                NEET Crash Course
              </h3>
              <p className="text-xs text-slate-600 font-medium mb-3 leading-relaxed">
                35-day rapid revision & high-yield topic discussion for medical entrance aspirants.
              </p>
              <div className="space-y-1 text-xs text-slate-700 font-semibold mb-4">
                <div>✓ Focused Discussion</div>
                <div>✓ Rapid Revision</div>
                <div>✓ High Yielding Topics</div>
                <div>✓ Individual Attention</div>
              </div>
            </div>
            <div className="border-t border-slate-100 pt-3">
              <div className="text-[11px] text-slate-500 font-medium">Course Fee:</div>
              <div className="font-display font-black text-xl sm:text-2xl text-navy-900">₹8,999</div>
            </div>
          </div>

          {/* Class 12 Card */}
          <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-sm flex flex-col justify-between">
            <div>
              <span className="bg-navy-800 text-white font-extrabold text-[10px] uppercase px-2.5 py-1 rounded-full w-fit block mb-3">
                💯 BOARD TOPPERS
              </span>
              <div className="p-2.5 bg-blue-50 rounded-2xl w-fit mb-3">
                <BookOpenCheck className="w-5 h-5 text-navy-800" />
              </div>
              <h3 className="font-display font-extrabold text-lg sm:text-xl text-navy-900 mb-2">
                Class 12 (PCM)
              </h3>
              <p className="text-xs text-slate-600 font-medium mb-3 leading-relaxed">
                Physics, Chemistry, and Maths for CBSE, ICSE, and Tamil Nadu Matriculation boards.
              </p>
              <div className="space-y-1 text-xs text-slate-700 font-semibold mb-4">
                <div>✓ Complete board syllabus</div>
                <div>✓ Physics derivation practice</div>
                <div>✓ Weekly unit tests</div>
              </div>
            </div>
            <div className="border-t border-slate-100 pt-3">
              <div className="text-[11px] text-slate-500 font-medium">Annual Fee:</div>
              <div className="font-display font-black text-xl sm:text-2xl text-navy-900">₹11,999</div>
            </div>
          </div>

          {/* Class 10 Card */}
          <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-sm flex flex-col justify-between">
            <div>
              <span className="bg-emerald-600 text-white font-extrabold text-[10px] uppercase px-2.5 py-1 rounded-full w-fit block mb-3">
                🎯 FOUNDATION
              </span>
              <div className="p-2.5 bg-emerald-50 rounded-2xl w-fit mb-3">
                <Sparkles className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="font-display font-extrabold text-lg sm:text-xl text-navy-900 mb-2">
                Class 10 (Maths & Sci)
              </h3>
              <p className="text-xs text-slate-600 font-medium mb-3 leading-relaxed">
                Foundation coaching for 10th grade CBSE, ICSE, and Matriculation board exams.
              </p>
              <div className="space-y-1 text-xs text-slate-700 font-semibold mb-4">
                <div>✓ Concept clarity guarantee</div>
                <div>✓ NCERT board question practice</div>
                <div>✓ Personal doubt clearing</div>
              </div>
            </div>
            <div className="border-t border-slate-100 pt-3">
              <div className="text-[11px] text-slate-500 font-medium">Annual Fee:</div>
              <div className="font-display font-black text-xl sm:text-2xl text-navy-900">₹7,999</div>
            </div>
          </div>

        </div>

        {/* 2. INTERACTIVE DISCOUNT CALCULATOR */}
        <div className="bg-white border-2 border-navy-800/30 rounded-3xl p-5 sm:p-8 shadow-lg max-w-4xl mx-auto">
          
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2.5 bg-navy-800 text-white rounded-2xl flex-shrink-0">
              <Percent className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-lg sm:text-2xl text-navy-900 leading-tight">
                Engineering Maths 25% Discount Calculator
              </h3>
              <p className="text-xs text-slate-600 font-medium">
                Test your total fee calculation with promo code <strong className="text-navy-900">ENGG25</strong> auto-applied.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 items-center border-t border-slate-100 pt-5">
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-extrabold text-navy-900 uppercase mb-2">
                  Select Number of Papers (M1, M2, M3, M4):
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[1, 2, 3, 4].map((num) => (
                    <button
                      key={num}
                      onClick={() => setSelectedEnggPapers(num)}
                      className={`py-2 rounded-xl font-extrabold text-xs border-2 transition ${
                        selectedEnggPapers === num
                          ? 'bg-navy-800 text-white border-navy-800 shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {num} {num === 1 ? 'Paper' : 'Papers'}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold text-navy-900 uppercase mb-2">
                  Class Mode:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setLearningMode('offline')}
                    className={`py-2 rounded-xl text-xs font-bold border transition ${
                      learningMode === 'offline'
                        ? 'bg-blue-50 border-navy-800 text-navy-900'
                        : 'bg-slate-50 border-slate-200 text-slate-600'
                    }`}
                  >
                    📍 Offline (Karur)
                  </button>
                  <button
                    onClick={() => setLearningMode('online')}
                    className={`py-2 rounded-xl text-xs font-bold border transition ${
                      learningMode === 'online'
                        ? 'bg-blue-50 border-navy-800 text-navy-900'
                        : 'bg-slate-50 border-slate-200 text-slate-600'
                    }`}
                  >
                    💻 Online Live
                  </button>
                </div>
              </div>
            </div>

            {/* Discount Result Box */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 text-center space-y-2.5">
              <div className="text-xs text-slate-500 font-semibold">Standard Price: <span className="line-through">₹{enggSubtotal}</span></div>
              <div className="text-xs text-emerald-700 font-extrabold bg-emerald-100 py-1 px-3 rounded-full inline-block">
                ✓ 25% Discount Saved: -₹{enggDiscount}
              </div>
              <div>
                <span className="text-[10px] text-slate-500 font-bold uppercase block">Final Total Payable:</span>
                <span className="font-display font-black text-2xl sm:text-3xl text-navy-900">₹{enggFinal}</span>
              </div>
              <a
                href={`https://wa.me/${ACADEMY_INFO.whatsappNumber}?text=Hi%20RK%20Academy,%20I%20want%20to%20enroll%20for%20${selectedEnggPapers}%20Engineering%20Maths%20paper(s)%20with%2025%25%20Discount.%20Total:%20₹${enggFinal}.`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3 rounded-xl shadow-md flex items-center justify-center gap-1.5 transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Claim Offer on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
