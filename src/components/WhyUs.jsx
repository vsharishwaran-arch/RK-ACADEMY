import React from 'react';
import { Target, Monitor, Award, Users, Trophy, Percent, CheckCircle2 } from 'lucide-react';

export default function WhyUs() {
  const features = [
    {
      icon: <Target className="w-6 h-6 text-slate-800" />,
      title: "Concept-First Teaching",
      desc: "We focus on strong foundational clarity so students truly understand principles rather than blindly memorizing formulas."
    },
    {
      icon: <Monitor className="w-6 h-6 text-slate-800" />,
      title: "Online & Offline Flexibility",
      desc: "Choose between attending classes physically at our Karur center or joining live interactive streams from home."
    },
    {
      icon: <Award className="w-6 h-6 text-slate-800" />,
      title: "Regular Mock Tests",
      desc: "Weekly chapter-wise tests and full-length exam simulations prepare students to handle real exam pressure smoothly."
    },
    {
      icon: <Users className="w-6 h-6 text-slate-800" />,
      title: "Individual Attention",
      desc: "Strictly limited batch sizes ensure that every student's doubts and learning speed are personally addressed."
    },
    {
      icon: <Trophy className="w-6 h-6 text-slate-800" />,
      title: "Proven Track Record",
      desc: "Hundreds of school toppers and university engineering students have passed with distinction under RK Academy."
    },
    {
      icon: <Percent className="w-6 h-6 text-slate-800" />,
      title: "Affordable & Special Discounts",
      desc: "Premium quality coaching at student-friendly fees. Special 25% discount available for Engineering Maths (M1 to M4)."
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-[#FAF4F0] text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-300 text-slate-800 text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-3 shadow-sm">
            <span>The RK Academy Edge</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900">
            Why Karur Students Trust RK Academy
          </h2>
          <p className="text-slate-600 text-base mt-3 font-normal">
            We combine rigorous academic coaching with personalized mentorship to help every student achieve their highest potential.
          </p>
          <div className="w-16 h-1 bg-[#5C2C1D] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 hover:border-[#5C2C1D] rounded-2xl p-8 transition duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="p-3 bg-slate-100 rounded-xl w-fit mb-6 shadow-sm">
                  {f.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900 mb-3">
                  {f.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>RK Academy Guarantee</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
