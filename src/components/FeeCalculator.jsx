import React, { useState } from 'react';
import { Calculator, Tag, Check, ArrowRight, MessageCircle, Sparkles, Percent } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

export default function FeeCalculator({ onOpenEnroll }) {
  const [selectedCourse, setSelectedCourse] = useState('engg');
  const [selectedSubjectsCount, setSelectedSubjectsCount] = useState(2);
  const [learningMode, setLearningMode] = useState('offline');
  const [promoCode, setPromoCode] = useState('ENGG25');
  const [isPromoApplied, setIsPromoApplied] = useState(true);

  const courseOptions = [
    { id: 'engg', name: 'Engineering Maths (M1, M2, M3, M4)', basePrice: 1500, perSubject: true },
    { id: 'neet', name: 'NEET Crash Course (March 26 - April 30)', basePrice: 8999, perSubject: false },
    { id: '12th', name: 'Class 12 Board Coaching (PCM)', basePrice: 11999, perSubject: false },
    { id: '10th', name: 'Class 10 Board Coaching (Maths & Sci)', basePrice: 7999, perSubject: false }
  ];

  const currentCourse = courseOptions.find(c => c.id === selectedCourse);

  const subtotal = currentCourse.perSubject 
    ? currentCourse.basePrice * selectedSubjectsCount 
    : currentCourse.basePrice;

  const discountRate = isPromoApplied ? 0.25 : 0;
  const discountAmount = Math.round(subtotal * discountRate);
  const finalTotal = subtotal - discountAmount;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'ENGG25' || promoCode.trim().toUpperCase() === 'RK25') {
      setIsPromoApplied(true);
    } else {
      alert('Invalid Promo Code. Try using ENGG25 for 25% discount!');
    }
  };

  return (
    <section id="calculator" className="py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-academy-maroon text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3 shadow-sm">
            <Percent className="w-3.5 h-3.5 text-amber-300" />
            <span>Interactive Fee Estimator</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-navy-900">
            Transparent Pricing & 25% Discount Calculator
          </h2>
          <p className="text-slate-600 text-base mt-3 font-medium">
            Select your subjects, apply promo code <strong className="text-navy-900">ENGG25</strong>, and instantly view your discounted fee.
          </p>
        </div>

        {/* Calculator Widget */}
        <div className="bg-slate-50 border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Inputs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Select Course */}
            <div>
              <label className="block text-xs font-extrabold text-navy-900 uppercase tracking-wider mb-2">
                1. Choose Course / Program:
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {courseOptions.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      setSelectedCourse(c.id);
                      if (c.id === 'engg') setIsPromoApplied(true);
                    }}
                    className={`text-left p-4 rounded-2xl border-2 text-xs sm:text-sm font-extrabold transition duration-200 ${
                      selectedCourse === c.id
                        ? 'bg-white border-navy-800 text-navy-900 shadow-md'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-navy-600'
                    }`}
                  >
                    <div>{c.name}</div>
                    {c.id === 'engg' && (
                      <span className="text-[10px] text-academy-maroon font-extrabold uppercase mt-1 block">
                        🔥 Eligible for 25% OFF
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. If Engg, select number of subjects M1-M4 */}
            {currentCourse.perSubject && (
              <div>
                <label className="block text-xs font-extrabold text-navy-900 uppercase tracking-wider mb-2">
                  2. Select Number of Papers (M1, M2, M3, M4):
                </label>
                <div className="flex gap-3">
                  {[1, 2, 3, 4].map((num) => (
                    <button
                      key={num}
                      onClick={() => setSelectedSubjectsCount(num)}
                      className={`flex-1 py-3 rounded-xl font-extrabold text-sm border-2 transition ${
                        selectedSubjectsCount === num
                          ? 'bg-navy-800 text-white border-navy-800 shadow-md'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {num} {num === 1 ? 'Paper' : 'Papers'}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 3. Select Learning Mode */}
            <div>
              <label className="block text-xs font-extrabold text-navy-900 uppercase tracking-wider mb-2">
                Learning Mode:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setLearningMode('offline')}
                  className={`p-3.5 rounded-xl text-xs font-bold border-2 transition ${
                    learningMode === 'offline'
                      ? 'bg-blue-50 border-navy-800 text-navy-900 shadow-sm'
                      : 'bg-white border-slate-200 text-slate-600 hover:text-navy-900'
                  }`}
                >
                  📍 Offline (Karur Center)
                </button>
                <button
                  onClick={() => setLearningMode('online')}
                  className={`p-3.5 rounded-xl text-xs font-bold border-2 transition ${
                    learningMode === 'online'
                      ? 'bg-blue-50 border-navy-800 text-navy-900 shadow-sm'
                      : 'bg-white border-slate-200 text-slate-600 hover:text-navy-900'
                  }`}
                >
                  💻 Online (Live + Recorded)
                </button>
              </div>
            </div>

            {/* Promo Code Form */}
            <div>
              <label className="block text-xs font-extrabold text-navy-900 uppercase tracking-wider mb-2">
                Have Promo Code?
              </label>
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Enter ENGG25"
                  className="flex-1 bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-navy-900 uppercase tracking-wider font-mono font-bold focus:outline-none focus:border-navy-800"
                />
                <button
                  type="submit"
                  className="bg-navy-800 hover:bg-navy-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition shadow-sm"
                >
                  Apply
                </button>
              </form>
            </div>

          </div>

          {/* Right Summary Box */}
          <div className="lg:col-span-5 bg-white border-2 border-navy-800/40 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative">
            
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="flex items-center gap-2 text-navy-900 font-extrabold text-sm">
                <Tag className="w-4 h-4 text-navy-700" />
                <span>Fee Summary</span>
              </div>
              {isPromoApplied && (
                <span className="bg-emerald-100 text-emerald-800 border border-emerald-300 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <Check className="w-3 h-3" /> 25% DISCOUNT APPLIED
                </span>
              )}
            </div>

            <div className="space-y-3 text-sm font-medium">
              <div className="flex justify-between text-slate-600">
                <span>Selected Course:</span>
                <span className="font-bold text-navy-900 text-right max-w-[180px]">{currentCourse.name}</span>
              </div>

              <div className="flex justify-between text-slate-600">
                <span>Mode:</span>
                <span className="font-bold text-navy-900 uppercase">{learningMode}</span>
              </div>

              <div className="flex justify-between text-slate-600">
                <span>Standard Fee:</span>
                <span className="line-through text-slate-400 font-semibold">₹{subtotal.toLocaleString()}</span>
              </div>

              {isPromoApplied && (
                <div className="flex justify-between text-emerald-700 font-bold">
                  <span>Special Discount (25%):</span>
                  <span>- ₹{discountAmount.toLocaleString()}</span>
                </div>
              )}
            </div>

            <div className="border-t border-slate-200 pt-4 flex items-baseline justify-between">
              <div>
                <span className="text-xs text-slate-500 font-bold uppercase">Total Payable:</span>
                <div className="font-display font-black text-3xl text-navy-900">
                  ₹{finalTotal.toLocaleString()}
                </div>
              </div>
              <span className="text-[10px] text-slate-500 font-medium">No Hidden Charges</span>
            </div>

            {/* Action Button */}
            <a
              href={`https://wa.me/${ACADEMY_INFO.whatsappNumber}?text=Hi%20RK%20Academy,%20I%20used%20the%20Fee%20Calculator%20for:%20${encodeURIComponent(currentCourse.name)}%20(${learningMode}).%20Discounted%20Total:%20₹${finalTotal}.%20Please%20reserve%20my%20seat.`}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm py-4 rounded-xl shadow-md flex items-center justify-center gap-2 transition duration-200"
            >
              <MessageCircle className="w-5 h-5 text-white" />
              <span>Claim Discount on WhatsApp</span>
            </a>

            <button
              onClick={onOpenEnroll}
              className="w-full bg-slate-100 hover:bg-slate-200 text-navy-900 border border-slate-200 font-bold text-xs py-2.5 rounded-xl transition"
            >
              Or Request Admin Call Back
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}
