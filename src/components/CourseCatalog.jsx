import React, { useState } from 'react';
import { COURSES, ACADEMY_INFO } from '../data/academyData';
import { Calculator, Stethoscope, BookOpenCheck, Sparkles, Target, ChevronDown, ChevronUp, CheckCircle, MessageCircle } from 'lucide-react';

export default function CourseCatalog({ onOpenEnroll }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedCourseId, setExpandedCourseId] = useState('engg-maths');

  const categories = ['All', 'Engineering', 'Medical Entrance', 'Higher Secondary', 'Secondary'];

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Calculator': return <Calculator className="w-7 h-7 text-navy-800" />;
      case 'Stethoscope': return <Stethoscope className="w-7 h-7 text-emerald-600" />;
      case 'BookOpenCheck': return <BookOpenCheck className="w-7 h-7 text-navy-700" />;
      case 'Sparkles': return <Sparkles className="w-7 h-7 text-rose-600" />;
      case 'Target': return <Target className="w-7 h-7 text-purple-600" />;
      default: return <BookOpenCheck className="w-7 h-7 text-navy-800" />;
    }
  };

  const filteredCourses = activeCategory === 'All'
    ? COURSES
    : COURSES.filter(c => c.category === activeCategory);

  const toggleExpand = (id) => {
    setExpandedCourseId(expandedCourseId === id ? null : id);
  };

  return (
    <section id="courses" className="py-20 bg-slate-50 text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-navy-800 text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3 shadow-sm">
            <BookOpenCheck className="w-3.5 h-3.5 text-amber-300" />
            <span>Academic Programs</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-navy-900">
            Courses Offered at RK Academy
          </h2>
          <p className="text-slate-600 text-base mt-3 font-medium">
            Focused coaching designed for board examination success, university degree clearing, and medical/engineering competitive exams.
          </p>
          <div className="w-16 h-1 bg-navy-800 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-navy-800 text-white shadow-md scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredCourses.map((course) => {
            const isExpanded = expandedCourseId === course.id;

            return (
              <div
                key={course.id}
                className={`bg-white border-2 rounded-3xl p-6 sm:p-8 transition-all duration-300 shadow-md flex flex-col justify-between ${
                  course.popular
                    ? 'border-navy-700 shadow-lg'
                    : 'border-slate-200 hover:border-navy-600'
                }`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="p-3 bg-blue-50/80 border border-blue-100 rounded-2xl">
                      {getIcon(course.iconName)}
                    </div>
                    <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${course.badgeColor}`}>
                      {course.badge}
                    </span>
                  </div>

                  <span className="text-xs text-navy-700 font-extrabold uppercase tracking-wider">{course.category}</span>
                  <h3 className="font-display font-extrabold text-2xl text-navy-900 mt-1 mb-3">{course.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 font-medium">{course.summary}</p>

                  {/* Modes Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {course.modes.map((mode, i) => (
                      <span key={i} className="bg-slate-100 text-slate-700 border border-slate-200 text-xs px-3 py-1 rounded-lg font-semibold">
                        📍 {mode}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Syllabus Toggle */}
                  <button
                    onClick={() => toggleExpand(course.id)}
                    className="w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl p-3.5 flex items-center justify-between text-xs font-bold text-navy-900 transition"
                  >
                    <span>View Syllabus & Key Features</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-navy-800" /> : <ChevronDown className="w-4 h-4 text-navy-800" />}
                  </button>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-slate-200 space-y-4 animate-fadeIn">
                      <div>
                        <h4 className="text-xs font-extrabold text-navy-900 uppercase tracking-wider mb-2">Key Highlights:</h4>
                        <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                          {course.highlights.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xs font-extrabold text-navy-900 uppercase tracking-wider mb-2">Syllabus Breakdown:</h4>
                        <ul className="space-y-1 text-xs text-slate-700 font-medium list-disc list-inside">
                          {course.syllabus.map((s, idx) => (
                            <li key={idx} className="leading-relaxed">{s}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer CTA */}
                <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-slate-500 font-semibold block">Tuition Fee</span>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display font-black text-2xl text-navy-900">{course.offerPrice}</span>
                      <span className="text-xs text-slate-400 line-through">{course.regularPrice}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 w-full sm:w-auto">
                    <button
                      onClick={onOpenEnroll}
                      className="bg-navy-800 text-white font-extrabold text-xs px-5 py-2.5 rounded-xl hover:bg-navy-700 transition shadow-sm"
                    >
                      Enroll
                    </button>
                    <a
                      href={`https://wa.me/${ACADEMY_INFO.whatsappNumber}?text=Hi%20RK%20Academy,%20I%20am%20interested%20in%20enrolling%20for:%20${encodeURIComponent(course.title)}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
