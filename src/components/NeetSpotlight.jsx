import React from 'react';
import { Sparkles, Calendar, CheckCircle2, AlertCircle, ArrowRight, UserCheck, Stethoscope } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

export default function NeetSpotlight({ onOpenEnroll }) {
  return (
    <section id="neet-spotlight" className="py-16 bg-gradient-to-r from-navy-800 via-navy-700 to-navy-800 text-white border-y border-navy-900 relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-md border-2 border-amber-400/60 rounded-3xl p-8 sm:p-12 shadow-2xl">
          
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-amber-400 text-navy-900 font-black text-xs px-3.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  Special Spotlight
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/50 font-bold text-xs px-3 py-1 rounded-full">
                  Seats Filling Fast
                </span>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                NEET CRASH COURSE <br />
                <span className="text-amber-300">2025 BATCH</span>
              </h2>

              {/* Date Box */}
              <div className="inline-flex items-center gap-3 bg-navy-900/90 border border-navy-600 px-5 py-3 rounded-2xl shadow-inner">
                <Calendar className="w-6 h-6 text-amber-300" />
                <div>
                  <div className="text-xs text-amber-200 uppercase font-bold">Course Duration</div>
                  <div className="font-display font-black text-lg text-white">MARCH 26 – APRIL 30</div>
                </div>
              </div>

              <p className="text-slate-100 text-base leading-relaxed font-medium">
                Supercharged preparation program designed for medical entrance candidates. Master key concepts, high-yield numericals, and time management strategies in just 35 days.
              </p>

              {/* Features List from official poster */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 bg-navy-900/80 p-3 rounded-xl border border-navy-600">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="font-bold text-sm text-white">Focused Discussion</span>
                </div>
                <div className="flex items-center gap-2.5 bg-navy-900/80 p-3 rounded-xl border border-navy-600">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="font-bold text-sm text-white">Rapid Revision</span>
                </div>
                <div className="flex items-center gap-2.5 bg-navy-900/80 p-3 rounded-xl border border-navy-600">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="font-bold text-sm text-white">High Yielding Topics</span>
                </div>
                <div className="flex items-center gap-2.5 bg-navy-900/80 p-3 rounded-xl border border-navy-600">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="font-bold text-sm text-white">Individual Attention</span>
                </div>
              </div>

              {/* Strict Notice */}
              <div className="flex items-center gap-2 text-amber-200 text-xs font-semibold bg-amber-500/20 p-3 rounded-xl border border-amber-400/40">
                <AlertCircle className="w-4 h-4 flex-shrink-0 text-amber-300" />
                <span>Admission strictly limited to registered candidates to maintain small batch size.</span>
              </div>

            </div>

            {/* Right Card CTA */}
            <div className="lg:col-span-5 bg-white text-slate-900 border border-slate-200 rounded-2xl p-6 sm:p-8 text-center space-y-5 shadow-2xl">
              
              <div className="w-16 h-16 bg-navy-50 border border-navy-100 rounded-full flex items-center justify-center mx-auto text-navy-800">
                <Stethoscope className="w-8 h-8" />
              </div>

              <div>
                <div className="text-xs text-navy-700 uppercase font-extrabold tracking-wider">NEET Intensive Batch</div>
                <div className="font-display font-black text-2xl text-navy-900 mt-1">Register Before Seats Close</div>
                <p className="text-xs text-slate-600 mt-2 font-medium">
                  Get personalized daily problem worksheets and mock tests aligned strictly with NEET syllabus.
                </p>
              </div>

              <div className="pt-2 space-y-3">
                <button
                  onClick={onOpenEnroll}
                  className="w-full bg-navy-800 hover:bg-navy-700 text-white font-display font-extrabold text-base py-3.5 rounded-xl shadow-md active:scale-95 transition duration-200 flex items-center justify-center gap-2"
                >
                  <UserCheck className="w-5 h-5 text-amber-300" />
                  <span>Reserve NEET Seat Now</span>
                </button>

                <a
                  href={`https://wa.me/${ACADEMY_INFO.whatsappNumber}?text=Hi%20RK%20Academy,%20I%20want%20to%20register%20for%20the%20NEET%20Crash%20Course%20(March%2026%20-%20April%2030).`}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-xs text-navy-800 hover:text-navy-600 underline font-bold"
                >
                  Need Details on WhatsApp? Click Here →
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
