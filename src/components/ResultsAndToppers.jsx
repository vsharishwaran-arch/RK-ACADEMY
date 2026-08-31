import React from 'react';
import { Trophy, Star, CheckCircle, GraduationCap } from 'lucide-react';

export default function ResultsAndToppers() {
  const toppers = [
    {
      name: "Karthik R.",
      role: "Anna University Student",
      subject: "Engineering Maths (M1 & M2)",
      score: "Cleared with O Grade! (100/100)",
      badge: "ENGINEERING TOPPER",
      quote: "RK Sir solved previous year question patterns step-by-step. M1 & M2 became super easy!",
    },
    {
      name: "Priya S.",
      role: "NEET Qualifier",
      subject: "NEET Physics & Chemistry",
      score: "Physics 160 / 180",
      badge: "NEET TOP RANKER",
      quote: "The rapid revision and high-yielding topic list helped me crack Physics numericals easily.",
    },
    {
      name: "Vignesh M.",
      role: "12th Board Student",
      subject: "Class 12 Physics & Maths",
      score: "97% Marks in Centum Batch",
      badge: "BOARD TOPPER",
      quote: "Weekly mock exams and individual doubt clearing sessions built total confidence for board exams.",
    }
  ];

  return (
    <section id="toppers" className="py-16 bg-[#FAF4F0] text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-300 text-slate-800 text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-3 shadow-sm">
            <Trophy className="w-4 h-4 text-slate-700" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900">
            Results & Student Toppers
          </h2>
          <p className="text-slate-600 text-base mt-2 font-normal">
            Celebrating our students who achieved distinction marks in board and university exams.
          </p>
          <div className="w-16 h-1 bg-[#5C2C1D] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="bg-white border border-slate-200 p-5 rounded-xl text-center shadow-sm">
            <div className="font-display font-bold text-3xl text-slate-900">1,000+</div>
            <div className="text-xs font-medium text-slate-600 mt-1">Students Taught</div>
          </div>
          <div className="bg-white border border-slate-200 p-5 rounded-xl text-center shadow-sm">
            <div className="font-display font-bold text-3xl text-slate-900">98%</div>
            <div className="text-xs font-medium text-slate-600 mt-1">Pass & Distinction Rate</div>
          </div>
          <div className="bg-white border border-slate-200 p-5 rounded-xl text-center shadow-sm">
            <div className="font-display font-bold text-3xl text-[#5C2C1D]">100/100</div>
            <div className="text-xs font-medium text-slate-600 mt-1">Perfect Centums in Maths</div>
          </div>
          <div className="bg-white border border-slate-200 p-5 rounded-xl text-center shadow-sm">
            <div className="font-display font-bold text-3xl text-slate-900">10+ Years</div>
            <div className="text-xs font-medium text-slate-600 mt-1">Academic Experience</div>
          </div>
        </div>

        {/* Topper Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {toppers.map((t, idx) => (
            <div 
              key={idx}
              className="bg-white border border-slate-200 hover:border-[#5C2C1D] rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="bg-slate-900 text-white font-bold text-[10px] uppercase px-3 py-1 rounded-full">
                    {t.badge}
                  </span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-slate-100 rounded-xl w-fit mb-3">
                  <GraduationCap className="w-6 h-6 text-slate-800" />
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900">{t.name}</h3>
                <p className="text-xs text-slate-500">{t.role}</p>

                <div className="mt-3 bg-slate-100 border border-slate-200 text-slate-900 font-bold text-xs px-3 py-2 rounded-xl">
                  {t.score}
                </div>

                <p className="text-xs text-slate-600 italic mt-4 leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-slate-800">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Verified RK Academy Result</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
