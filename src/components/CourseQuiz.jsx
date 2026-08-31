import React, { useState } from 'react';
import { Sparkles, CheckCircle, ArrowRight, RotateCcw, MessageCircle, HelpCircle } from 'lucide-react';
import { COURSES, ACADEMY_INFO } from '../data/academyData';

export default function CourseQuiz({ onOpenEnroll }) {
  const [step, setStep] = useState(1);
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedGoal, setSelectedGoal] = useState('');
  const [selectedMode, setSelectedMode] = useState('');

  const levels = [
    { id: '10th', label: 'Class 10th Student', sub: 'CBSE, ICSE or Matric Board' },
    { id: '12th', label: 'Class 12th Student', sub: 'Physics, Chemistry & Maths' },
    { id: 'engg', label: 'Engineering Student', sub: 'M1, M2, M3, M4 Maths' },
    { id: 'neet', label: 'NEET / Medical Aspirant', sub: 'March 26 - April 30 Crash Course' }
  ];

  const goals = [
    { id: 'board', label: 'Score 90%+ in Board Exams', icon: '🏆' },
    { id: 'clear', label: 'Clear Engineering Arrears / Backlogs', icon: '🎯' },
    { id: 'neet-rank', label: 'Rank High in NEET 2025', icon: '🩺' },
    { id: 'foundation', label: 'Build Strong Concept Foundations', icon: '💡' }
  ];

  const modes = [
    { id: 'offline', label: 'Offline Coaching (Karur Center)', desc: 'RP Muthu Plaza, Near Thinnappa Theatre' },
    { id: 'online', label: 'Online Live & Recorded Classes', desc: 'Study flexibly from home with live doubt clearing' }
  ];

  const handleReset = () => {
    setStep(1);
    setSelectedLevel('');
    setSelectedGoal('');
    setSelectedMode('');
  };

  const getMatchedCourse = () => {
    if (selectedLevel === 'engg') return COURSES.find(c => c.id === 'engg-maths');
    if (selectedLevel === 'neet') return COURSES.find(c => c.id === 'neet-crash');
    if (selectedLevel === '12th') return COURSES.find(c => c.id === 'grade-12');
    return COURSES.find(c => c.id === 'grade-10');
  };

  const matchedCourse = getMatchedCourse();

  return (
    <section className="py-16 bg-slate-100/70 text-slate-900 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-navy-800 text-white text-xs font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Interactive Course Matcher</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy-900">
            Find Your Ideal RK Academy Batch in 30 Seconds
          </h2>
          <p className="text-slate-600 text-sm mt-2 font-medium">
            Answer 3 quick questions to get personalized course guidance, fee offer, and schedule.
          </p>
        </div>

        {/* Quiz Box (Clean White) */}
        <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl">
          
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center text-xs text-slate-500 font-bold mb-2">
              <span>Step {step} of 3</span>
              <span>{step === 1 ? 'Select Grade' : step === 2 ? 'Select Goal' : step === 3 ? 'Choose Mode' : 'Your Recommended Batch'}</span>
            </div>
            <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
              <div 
                className="h-full bg-navy-800 transition-all duration-500"
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* STEP 1: SELECT LEVEL */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="font-display font-bold text-xl text-navy-900 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-navy-700" />
                <span>1. What is your current academic level?</span>
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {levels.map((lvl) => (
                  <button
                    key={lvl.id}
                    onClick={() => {
                      setSelectedLevel(lvl.id);
                      setStep(2);
                    }}
                    className={`text-left p-5 rounded-2xl border-2 transition duration-200 ${
                      selectedLevel === lvl.id 
                        ? 'bg-blue-50 border-navy-800 text-navy-900 shadow-md' 
                        : 'bg-slate-50 border-slate-200 text-slate-800 hover:border-navy-600 hover:bg-white'
                    }`}
                  >
                    <div className="font-extrabold text-lg text-navy-900">{lvl.label}</div>
                    <div className="text-xs text-slate-500 font-medium mt-1">{lvl.sub}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: SELECT GOAL */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="font-display font-bold text-xl text-navy-900 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-navy-700" />
                <span>2. What is your main target goal?</span>
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {goals.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => {
                      setSelectedGoal(g.id);
                      setStep(3);
                    }}
                    className={`text-left p-5 rounded-2xl border-2 transition duration-200 ${
                      selectedGoal === g.id 
                        ? 'bg-blue-50 border-navy-800 text-navy-900 shadow-md' 
                        : 'bg-slate-50 border-slate-200 text-slate-800 hover:border-navy-600 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{g.icon}</span>
                      <div className="font-extrabold text-base text-navy-900">{g.label}</div>
                    </div>
                  </button>
                ))}
              </div>
              <div className="pt-4 flex justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs text-slate-500 hover:text-navy-900 underline font-semibold"
                >
                  ← Back to Step 1
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: SELECT MODE */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="font-display font-bold text-xl text-navy-900 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-navy-700" />
                <span>3. Preferred mode of study?</span>
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {modes.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => {
                      setSelectedMode(m.id);
                      setStep(4);
                    }}
                    className={`text-left p-5 rounded-2xl border-2 transition duration-200 ${
                      selectedMode === m.id 
                        ? 'bg-blue-50 border-navy-800 text-navy-900 shadow-md' 
                        : 'bg-slate-50 border-slate-200 text-slate-800 hover:border-navy-600 hover:bg-white'
                    }`}
                  >
                    <div className="font-extrabold text-lg text-navy-900">{m.label}</div>
                    <div className="text-xs text-slate-500 font-medium mt-1">{m.desc}</div>
                  </button>
                ))}
              </div>
              <div className="pt-4 flex justify-between">
                <button
                  onClick={() => setStep(2)}
                  className="text-xs text-slate-500 hover:text-navy-900 underline font-semibold"
                >
                  ← Back to Step 2
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: RECOMMENDATION RESULT */}
          {step === 4 && matchedCourse && (
            <div className="space-y-6 animate-fadeIn">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 border border-emerald-300 px-3.5 py-1.5 rounded-full text-xs font-bold">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Best Recommended Batch Found!</span>
              </div>

              <div className="bg-slate-50 border-2 border-navy-800/40 rounded-2xl p-6 relative shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <span className="text-xs text-navy-700 font-extrabold uppercase tracking-wider">{matchedCourse.category}</span>
                    <h4 className="font-display font-black text-2xl text-navy-900">{matchedCourse.title}</h4>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${matchedCourse.badgeColor}`}>
                    {matchedCourse.badge}
                  </span>
                </div>

                <p className="text-slate-700 text-sm mb-4 leading-relaxed font-medium">
                  {matchedCourse.summary}
                </p>

                <div className="border-t border-slate-200 pt-4 space-y-2">
                  <div className="text-xs text-navy-900 font-extrabold uppercase">Key Course Highlights:</div>
                  <div className="grid sm:grid-cols-2 gap-2 text-xs text-slate-700 font-medium">
                    {matchedCourse.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
                  <div>
                    <span className="text-xs text-slate-500 font-semibold">Offer Price:</span>
                    <div className="text-2xl font-black text-navy-900 font-display">{matchedCourse.offerPrice}</div>
                  </div>

                  <div className="flex gap-3 w-full sm:w-auto">
                    <button
                      onClick={handleReset}
                      className="p-3 text-slate-600 hover:text-navy-900 bg-white border border-slate-200 rounded-xl hover:bg-slate-100 transition"
                      title="Retake Quiz"
                    >
                      <RotateCcw className="w-5 h-5" />
                    </button>
                    <a
                      href={`https://wa.me/${ACADEMY_INFO.whatsappNumber}?text=Hi%20RK%20Academy,%20I%20completed%20the%20course%20quiz%20and%20am%20interested%20in:%20${encodeURIComponent(matchedCourse.title)}%20(${selectedMode === 'offline' ? 'Offline Karur' : 'Online'}).`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 sm:flex-none bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-6 py-3 rounded-xl flex items-center justify-center gap-2 shadow-md"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Inquire on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>
      </div>
    </section>
  );
}
