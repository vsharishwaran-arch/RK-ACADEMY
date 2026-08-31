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
    <section id="courses-fees" className="py-12 sm:py-16 bg-[#FAF6F0] text-slate-900 border-b border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-[#3E1A14] text-amber-200 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full mb-2.5 shadow-sm">
            <BookOpenCheck className="w-3.5 h-3.5 text-amber-300" />
            <span>Academic Offerings</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-[#0F2038]">
            Courses & Fee Details
          </h2>
          <p className="text-slate-600 text-xs sm:text-base mt-2 font-medium">
            Transparent pricing with special discounts for engineering & school students.
          </p>
          <div className="w-12 sm:w-16 h-1 bg-[#3E1A14] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* 1. COURSES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          
          {/* Engineering Maths Card */}
          <div className="bg-white border-2 border-[#3E1A14] rounded-3xl p-5 sm:p-6 shadow-md flex flex-col justify-between relative">
            <div>
              <span className="bg-[#3E1A14] text-amber-200 font-extrabold text-[10px] uppercase px-2.5 py-1 rounded-full w-fit block mb-3">
                🔥 25% DISCOUNT OFFER
              </span>
              <div className="p-2.5 bg-amber-50 rounded-2xl w-fit mb-3 border border-amber-200">
                <Calculator className="w-5 h-5 text-[#3E1A14]" />
              </div>
              <h3 className="font-display font-extrabold text-lg sm:text-xl text-[#0F2038] mb-2">
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
                <span className="font-display font-black text-xl sm:text-2xl text-[#3E1A14]">₹1,125 / paper</span>
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
              <h3 className="font-display font-extrabold text-lg sm:text-xl text-[#0F2038] mb-2">
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
              <div className="font-display font-black text-xl sm:text-2xl text-[#0F2038]">₹8,999</div>
            </div>
          </div>

          {/* Class 12 Card */}
          <div className="bg-white border border-amber-900/15 rounded-3xl p-5 sm:p-6 shadow-sm flex flex-col justify-between">
            <div>
              <span className="bg-[#0F2038] text-white font-extrabold text-[10px] uppercase px-2.5 py-1 rounded-full w-fit block mb-3">
                💯 BOARD TOPPERS
              </span>
              <div className="p-2.5 bg-blue-50 rounded-2xl w-fit mb-3">
                <BookOpenCheck className="w-5 h-5 text-[#0F2038]" />
              </div>
              <h3 className="font-display font-extrabold text-lg sm:text-xl text-[#0F2038] mb-2">
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
              <div className="font-display font-black text-xl sm:text-2xl text-[#0F2038]">₹11,999</div>
            </div>
          </div>

          {/* Class 10 Card */}
          <div className="bg-white border border-amber-900/15 rounded-3xl p-5 sm:p-6 shadow-sm flex flex-col justify-between">
            <div>
              <span className="bg-emerald-700 text-white font-extrabold text-[10px] uppercase px-2.5 py-1 rounded-full w-fit block mb-3">
                🎯 FOUNDATION
              </span>
              <div className="p-2.5 bg-emerald-50 rounded-2xl w-fit mb-3">
                <Sparkles className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="font-display font-extrabold text-lg sm:text-xl text-[#0F2038] mb-2">
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
              <div className="font-display font-black text-xl sm:text-2xl text-[#0F2038]">₹7,999</div>
            </div>
          </div>

        </div>

        {/* 2. INTERACTIVE DISCOUNT CALCULATOR */}
        <div className="bg-white border-2 border-amber-900/20 rounded-3xl p-5 sm:p-8 shadow-lg max-w-4xl mx-auto">
          
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2.5 bg-[#3E1A14] text-amber-200 rounded-2xl flex-shrink-0">
              <Percent className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-lg sm:text-2xl text-[#0F2038] leading-tight">
                Engineering Maths 25% Discount Calculator
              </h3>
              <p className="text-xs text-slate-600 font-medium">
                Test your total fee calculation with promo code <strong className="text-[#3E1A14]">ENGG25</strong> auto-applied.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 items-center border-t border-slate-100 pt-5">
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-extrabold text-[#0F2038] uppercase mb-2">
                  Select Number of Papers (M1, M2, M3, M4):
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[1, 2, 3, 4].map((num) => (
                    <button
                      key={num}
                      onClick={() => setSelectedEnggPapers(num)}
                      className={`py-2 rounded-xl font-extrabold text-xs border-2 transition ${
                        selectedEnggPapers === num
                          ? 'bg-[#3E1A14] text-white border-[#3E1A14] shadow-sm'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {num} {num === 1 ? 'Paper' : 'Papers'}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold text-[#0F2038] uppercase mb-2">
                  Class Mode:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setLearningMode('offline')}
                    className={`py-2 rounded-xl text-xs font-bold border transition ${
                      learningMode === 'offline'
                        ? 'bg-[#0F2038] text-white border-[#0F2038]'
                        : 'bg-white border-slate-200 text-slate-600'
                    }`}
                  >
                    Offline (Karur Center)
                  </button>
                  <button
                    onClick={() => setLearningMode('online')}
                    className={`py-2 rounded-xl text-xs font-bold border transition ${
                      learningMode === 'online'
                        ? 'bg-[#0F2038] text-white border-[#0F2038]'
                        : 'bg-white border-slate-200 text-slate-600'
                    }`}
                  >
                    Online Live Stream
                  </button>
                </div>
              </div>
            </div>

            {/* Discount Result Box */}
            <div className="bg-[#FAF6F0] border border-amber-900/15 rounded-2xl p-4 sm:p-6 text-center space-y-2.5">
              <div className="text-xs text-slate-500 font-semibold">Standard Price: <span className="line-through">₹{enggSubtotal}</span></div>
              <div className="text-xs text-emerald-800 font-extrabold bg-emerald-100 py-1 px-3 rounded-full inline-block border border-emerald-300">
                ✓ 25% Discount Saved: -₹{enggDiscount}
              </div>
              <div>
                <span className="text-[10px] text-slate-500 font-bold uppercase block">Final Total Payable:</span>
                <span className="font-display font-black text-2xl sm:text-3xl text-[#3E1A14]">₹{enggFinal}</span>
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
