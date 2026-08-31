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
    <section id="courses-fees" className="py-16 bg-[#FAF0E2]/60 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-300 text-slate-800 text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-3 shadow-sm">
            <BookOpenCheck className="w-4 h-4 text-slate-700" />
            <span>Academic Offerings</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900">
            Courses & Fee Details
          </h2>
          <p className="text-slate-600 text-base mt-2 font-normal">
            Transparent pricing with special discounts for engineering & school students.
          </p>
          <div className="w-16 h-1 bg-[#D85628] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 1. COURSES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Engineering Maths Card */}
          <div className="bg-white border-2 border-[#D85628] rounded-2xl p-6 shadow-md hover:shadow-lg transition flex flex-col justify-between relative overflow-hidden">
            <span className="bg-[#D85628] text-white font-bold text-[11px] uppercase px-3 py-1 rounded-full w-fit mb-3">
              25% DISCOUNT OFFER
            </span>
            <div>
              <div className="p-3 bg-orange-50 rounded-xl w-fit mb-3 border border-orange-100">
                <Calculator className="w-6 h-6 text-[#D85628]" />
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                Engineering Maths (M1–M4)
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Complete semester preparation & arrear recovery for M1, M2, M3, M4 papers.
              </p>
              <div className="space-y-1.5 text-xs text-slate-700 font-medium mb-4">
                <div>✓ Anna Univ & Deemed Varsities</div>
                <div>✓ Solved previous year papers</div>
                <div>✓ Online & Offline batches</div>
              </div>
            </div>
            <div className="border-t border-slate-100 pt-4">
              <div className="text-xs text-slate-500 font-medium">Fee Starting From:</div>
              <div className="flex items-baseline gap-2">
                <span className="font-display font-bold text-2xl text-[#D85628]">₹1,125 / paper</span>
                <span className="text-xs text-slate-400 line-through">₹1,500</span>
              </div>
            </div>
          </div>

          {/* NEET Crash Course Card */}
          <div className="bg-white border border-slate-300 rounded-2xl p-6 shadow-md hover:shadow-lg transition flex flex-col justify-between relative">
            <span className="bg-slate-900 text-white font-bold text-[11px] uppercase px-3 py-1 rounded-full w-fit mb-3">
              MARCH 26 – APRIL 30
            </span>
            <div>
              <div className="p-3 bg-slate-100 rounded-xl w-fit mb-3">
                <Stethoscope className="w-6 h-6 text-slate-800" />
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                NEET Crash Course
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                35-day rapid revision & high-yield topic discussion for medical entrance aspirants.
              </p>
              <div className="space-y-1.5 text-xs text-slate-700 font-medium mb-4">
                <div>✓ Focused Discussion</div>
                <div>✓ Rapid Revision</div>
                <div>✓ High Yielding Topics</div>
                <div>✓ Individual Attention</div>
              </div>
            </div>
            <div className="border-t border-slate-100 pt-4">
              <div className="text-xs text-slate-500 font-medium">Course Fee:</div>
              <div className="font-display font-bold text-2xl text-slate-900">₹8,999</div>
            </div>
          </div>

          {/* Class 12 Card */}
          <div className="bg-white border border-slate-300 rounded-2xl p-6 shadow-md flex flex-col justify-between">
            <span className="bg-slate-800 text-white font-bold text-[11px] uppercase px-3 py-1 rounded-full w-fit mb-3">
              BOARD COACHING
            </span>
            <div>
              <div className="p-3 bg-slate-100 rounded-xl w-fit mb-3">
                <BookOpenCheck className="w-6 h-6 text-slate-800" />
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                Class 12 (PCM)
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Physics, Chemistry, and Maths for CBSE, ICSE, and Tamil Nadu Matriculation boards.
              </p>
              <div className="space-y-1.5 text-xs text-slate-700 font-medium mb-4">
                <div>✓ Complete board syllabus</div>
                <div>✓ Physics derivation practice</div>
                <div>✓ Weekly unit tests</div>
              </div>
            </div>
            <div className="border-t border-slate-100 pt-4">
              <div className="text-xs text-slate-500 font-medium">Annual Fee:</div>
              <div className="font-display font-bold text-2xl text-slate-900">₹11,999</div>
            </div>
          </div>

          {/* Class 10 Card */}
          <div className="bg-white border border-slate-300 rounded-2xl p-6 shadow-md flex flex-col justify-between">
            <span className="bg-slate-800 text-white font-bold text-[11px] uppercase px-3 py-1 rounded-full w-fit mb-3">
              FOUNDATION TUITION
            </span>
            <div>
              <div className="p-3 bg-slate-100 rounded-xl w-fit mb-3">
                <Sparkles className="w-6 h-6 text-slate-800" />
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                Class 10 (Maths & Sci)
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Foundation coaching for 10th grade CBSE, ICSE, and Matriculation board exams.
              </p>
              <div className="space-y-1.5 text-xs text-slate-700 font-medium mb-4">
                <div>✓ Concept clarity guarantee</div>
                <div>✓ NCERT board question practice</div>
                <div>✓ Personal doubt clearing</div>
              </div>
            </div>
            <div className="border-t border-slate-100 pt-4">
              <div className="text-xs text-slate-500 font-medium">Annual Fee:</div>
              <div className="font-display font-bold text-2xl text-slate-900">₹7,999</div>
            </div>
          </div>

        </div>

        {/* 2. INTERACTIVE DISCOUNT CALCULATOR */}
        <div className="bg-white border border-slate-300 rounded-2xl p-6 sm:p-10 shadow-lg max-w-4xl mx-auto">
          
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#D85628] text-white rounded-xl shadow-sm">
              <Percent className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-2xl text-slate-900">
                Engineering Maths 25% Discount Calculator
              </h3>
              <p className="text-xs text-slate-600 font-medium">
                Test your total fee calculation with promo code <strong className="text-slate-900">ENGG25</strong> auto-applied.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 items-center border-t border-slate-200 pt-6">
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-900 uppercase mb-2">
                  Select Number of Papers (M1, M2, M3, M4):
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[1, 2, 3, 4].map((num) => (
                    <button
                      key={num}
                      onClick={() => setSelectedEnggPapers(num)}
                      className={`py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm border transition min-h-[44px] flex items-center justify-center ${
                        selectedEnggPapers === num
                          ? 'bg-[#D85628] text-white border-[#D85628] shadow-sm'
                          : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {num} {num === 1 ? 'Paper' : 'Papers'}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-900 uppercase mb-2">
                  Class Mode:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    onClick={() => setLearningMode('offline')}
                    className={`py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold border transition min-h-[44px] flex items-center justify-center ${
                      learningMode === 'offline'
                        ? 'bg-slate-900 border-slate-900 text-white'
                        : 'bg-white border-slate-300 text-slate-700'
                    }`}
                  >
                    Offline (Karur Center)
                  </button>
                  <button
                    onClick={() => setLearningMode('online')}
                    className={`py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold border transition min-h-[44px] flex items-center justify-center ${
                      learningMode === 'online'
                        ? 'bg-slate-900 border-slate-900 text-white'
                        : 'bg-white border-slate-300 text-slate-700'
                    }`}
                  >
                    Online Live Stream
                  </button>
                </div>
              </div>
            </div>

            {/* Discount Result Box */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 text-center space-y-3 shadow-sm">
              <div className="text-xs sm:text-sm text-slate-500 font-medium">Standard Price: <span className="line-through">₹{enggSubtotal}</span></div>
              <div className="text-xs sm:text-sm text-slate-900 font-bold bg-white border border-slate-300 py-1.5 px-3 rounded-full inline-block">
                ✓ 25% Discount Saved: -₹{enggDiscount}
              </div>
              <div>
                <span className="text-xs sm:text-sm text-slate-500 font-bold uppercase block">Final Total Payable:</span>
                <span className="font-display font-bold text-2xl sm:text-3xl text-slate-900">₹{enggFinal}</span>
              </div>
              <a
                href={`https://wa.me/${ACADEMY_INFO.whatsappNumber}?text=Hi%20RK%20Academy,%20I%20want%20to%20enroll%20for%20${selectedEnggPapers}%20Engineering%20Maths%20paper(s)%20with%2025%25%20Discount.%20Total:%20₹${enggFinal}.`}
                target="_blank"
                rel="noreferrer"
                className="w-full min-h-[48px] bg-slate-900 hover:bg-black text-white font-bold text-xs sm:text-sm py-3 rounded-xl shadow-md flex items-center justify-center gap-2 transition"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Claim Offer on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
