import React from 'react';
import { Phone, ArrowRight, MessageCircle, CheckCircle2, BookOpen, Award, Users } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

export default function Hero({ onOpenEnroll }) {
  return (
    <section className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-10 sm:py-16 lg:py-20 border-b border-slate-200" style={{ backgroundImage: "url('/hero_bg.png')" }}>
      
      {/* Background Soft Warm Chocolate Overlay */}
      <div className="absolute inset-0 bg-[#FAF4F0]/90 backdrop-blur-[2px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-slate-300 text-slate-800 text-xs sm:text-sm font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-sm">
              <span>{ACADEMY_INFO.motto}</span>
            </div>

            {/* Main Title */}
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-slate-900">
              RK ACADEMY KARUR <br />
              <span className="text-[#5C2C1D] font-bold text-2xl sm:text-4xl lg:text-5xl">
                Your Dreams Come True.
              </span>
            </h1>

            <p className="text-slate-700 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Top-rated tuition academy in Karur for <strong>Grade 10 & 12</strong> (CBSE, ICSE, Matric), <strong>Engineering Maths (M1–M4)</strong> with 25% discount, and <strong>NEET Crash Course</strong>. Available in both <strong>Offline</strong> & <strong>Online</strong> batches.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 text-xs sm:text-sm text-slate-700 font-medium pt-1">
              <div className="flex items-center gap-1.5 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Concept-First Teaching</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Individual Attention</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Online & Offline Classes</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href="#courses-fees"
                className="w-full sm:w-auto min-h-[48px] bg-[#5C2C1D] hover:bg-[#4A2216] text-white font-display font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-md transition flex items-center justify-center gap-2"
              >
                <span>Explore Courses & Fees</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href={`https://wa.me/${ACADEMY_INFO.whatsappNumber}?text=Hi%20RK%20Academy,%20I%20want%20to%20inquire%20about%20admissions.`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto min-h-[48px] bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-md transition flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Instant Chat</span>
              </a>
            </div>

            {/* Trust Counters Strip */}
            <div className="pt-3 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-600 font-semibold border-t border-slate-200 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-slate-700" />
                <span>1,000+ Students</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-slate-700" />
                <span>98% Pass Rate</span>
              </div>
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-slate-700" />
                <span>Karur Center</span>
              </div>
            </div>

          </div>

          {/* Right Logo & Offer Card Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xl text-center max-w-xs sm:max-w-sm w-full">
              
              <div className="relative inline-block mb-3">
                <img 
                  src="/22.jpg" 
                  alt="RK Academy Logo" 
                  className="w-36 h-36 sm:w-44 sm:h-44 object-contain rounded-2xl p-2 bg-white border border-slate-200 shadow-sm mx-auto"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "22.jpg";
                  }}
                />
              </div>

              <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
                RK ACADEMY
              </h2>
              <p className="text-slate-600 font-bold text-xs tracking-wider uppercase">KARUR</p>
              <p className="text-xs text-slate-500 mt-1 italic">"Your Dreams Come True"</p>

              {/* Offer Highlight Box */}
              <div className="mt-4 bg-[#381A12] text-white rounded-xl p-4 text-center shadow-md">
                <div className="text-[11px] text-[#E8D8CF] font-bold uppercase tracking-wider">SPECIAL OFFER</div>
                <div className="text-2xl font-bold font-display my-0.5 text-white">25% OFF</div>
                <div className="text-xs text-slate-200">Engineering Maths (M1, M2, M3 & M4)</div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
