import React from 'react';
import { ACADEMY_INFO } from '../data/academyData';
import { Users, Calendar, Percent, GraduationCap } from 'lucide-react';

export default function QuickStats() {
  const icons = [
    <Users className="w-6 h-6 text-navy-800" />,
    <Calendar className="w-6 h-6 text-emerald-600" />,
    <GraduationCap className="w-6 h-6 text-amber-600" />,
    <Percent className="w-6 h-6 text-rose-600" />
  ];

  return (
    <section className="bg-white border-b border-slate-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {ACADEMY_INFO.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-slate-50/80 border border-slate-200 rounded-2xl p-6 text-center hover:border-navy-700 hover:scale-105 transition duration-300 shadow-sm hover:shadow-md group"
            >
              <div className="inline-flex items-center justify-center p-3 bg-white border border-slate-200 rounded-xl mb-3 group-hover:bg-blue-50 transition">
                {icons[idx]}
              </div>
              <div className="font-display font-black text-3xl sm:text-4xl text-navy-900 tracking-tight group-hover:text-navy-700 transition">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
