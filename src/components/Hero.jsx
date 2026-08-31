import React from 'react';
import { Sparkles, Phone, ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

export default function Hero({ onOpenEnroll }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/80 via-slate-50 to-white text-slate-900 py-8 sm:py-16 border-b border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-1.5 bg-academy-maroon text-white text-[10px] sm:text-xs font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm max-w-full text-center">
              <Sparkles className="w-3.5 h-3.5 text-amber-300 flex-shrink-0" />
              <span className="truncate sm:whitespace-normal">{ACADEMY_INFO.motto}</span>
            </div>

            {/* Main Title */}
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-navy-900">
              RK ACADEMY KARUR <br />
              <span className="text-navy-700 text-2xl sm:text-4xl lg:text-5xl font-extrabold block mt-1">
                Your Dreams Come True.
              </span>
            </h1>

            <p className="text-slate-600 text-xs sm:text-base max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Top-rated tuition academy in Karur for <strong className="text-navy-900">Grade 10 & 12</strong> (CBSE, ICSE, Matric), <strong className="text-academy-maroon">Engineering Maths (M1–M4)</strong> with 25% discount, and <strong className="text-emerald-700">NEET Crash Course</strong>. Available in both <span className="underline font-bold text-navy-800">Offline</span> & <span className="underline font-bold text-navy-800">Online</span> batches.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-[11px] sm:text-xs text-slate-700 font-semibold pt-1">
              <div className="flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Concept-First</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Individual Attention</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Online & Offline</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#courses-fees"
                className="w-full sm:w-auto bg-navy-800 hover:bg-navy-700 text-white font-display font-black text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md active:scale-95 transition flex items-center justify-center gap-2"
              >
                <span>Explore Courses & Fees</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${ACADEMY_INFO.whatsappNumber}?text=Hi%20RK%20Academy,%20I%20want%20to%20inquire%20about%20admissions.`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md transition flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Instant Chat</span>
              </a>
            </div>

            <div className="text-[11px] sm:text-xs text-slate-500 pt-1 flex items-center justify-center lg:justify-start gap-1.5 font-medium">
              <Phone className="w-3 h-3 text-navy-800" />
              <span>Hotline: <a href={`tel:${ACADEMY_INFO.phone}`} className="text-navy-900 font-extrabold hover:underline">{ACADEMY_INFO.phone}</a></span>
            </div>

          </div>

          {/* Right Logo Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-5 sm:p-8 shadow-xl text-center max-w-xs sm:max-w-sm w-full">
              
              <img 
                src="/22.jpg" 
                alt="RK Academy Logo" 
                className="w-32 h-32 sm:w-44 sm:h-44 object-contain rounded-2xl p-2 bg-white border border-slate-100 shadow-md mx-auto mb-3"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "22.jpg";
                }}
              />

              <h2 className="font-display font-black text-xl sm:text-2xl text-navy-900">
                RK ACADEMY
              </h2>
              <p className="text-navy-700 font-extrabold text-[10px] sm:text-xs tracking-wider uppercase">KARUR</p>
              <p className="text-[11px] text-slate-500 mt-0.5 italic font-medium">"Your Dreams Come True"</p>

              {/* Offer Highlight Box */}
              <div className="mt-3 bg-gradient-to-r from-academy-maroon to-red-900 border border-red-700/50 rounded-xl p-2.5 sm:p-3 text-center text-white shadow-md">
                <div className="text-[9px] text-amber-200 font-bold uppercase tracking-wider">SPECIAL DISCOUNT OFFER</div>
                <div className="text-xl sm:text-2xl font-black text-amber-300 font-display">25% OFF</div>
                <div className="text-[11px] text-slate-100 font-semibold">Engineering Maths (M1 to M4)</div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
