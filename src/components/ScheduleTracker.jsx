import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Monitor, CheckCircle } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

export default function ScheduleTracker() {
  const [activeTab, setActiveTab] = useState('offline');
  const [currentStatus, setCurrentStatus] = useState('Next Batch: 6:00 PM Today');

  useEffect(() => {
    const updateLiveStatus = () => {
      const now = new Date();
      const hour = now.getHours();
      const day = now.getDay();

      if (day === 0) {
        setCurrentStatus('Sunday Holiday • Next Batch Monday 6:00 PM');
      } else if (hour >= 18 && hour < 21) {
        setCurrentStatus('🔥 CLASS CURRENTLY IN SESSION (6 PM - 9 PM)');
      } else if (hour < 18) {
        setCurrentStatus('⚡ Batch Starts Today at 6:00 PM');
      } else {
        setCurrentStatus('Night Break • Next Batch Tomorrow 6:00 PM');
      }
    };

    updateLiveStatus();
    const interval = setInterval(updateLiveStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="schedule" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-navy-800 text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3 shadow-sm">
            <Clock className="w-3.5 h-3.5 text-amber-300" />
            <span>Class Timings & Schedules</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-navy-900">
            Convenient Schedules Built Around Your College & School
          </h2>
          <p className="text-slate-600 text-base mt-3 font-medium">
            Both Offline center classes in Karur and Online live/recorded batches available.
          </p>
        </div>

        {/* Live Status Pill */}
        <div className="max-w-md mx-auto bg-white border-2 border-navy-800/30 rounded-2xl p-4 text-center mb-10 shadow-md">
          <div className="text-[11px] text-navy-800 font-extrabold uppercase tracking-widest mb-1 flex items-center justify-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
            Live Batch Schedule Tracker
          </div>
          <div className="font-display font-black text-lg text-navy-900">
            {currentStatus}
          </div>
        </div>

        {/* Toggle Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white p-1.5 rounded-2xl border border-slate-300 shadow-sm inline-flex gap-2">
            <button
              onClick={() => setActiveTab('offline')}
              className={`px-6 py-3 rounded-xl font-extrabold text-xs sm:text-sm transition duration-200 flex items-center gap-2 ${
                activeTab === 'offline'
                  ? 'bg-navy-800 text-white shadow-md'
                  : 'text-slate-600 hover:text-navy-900'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>Offline Center Schedule</span>
            </button>
            <button
              onClick={() => setActiveTab('online')}
              className={`px-6 py-3 rounded-xl font-extrabold text-xs sm:text-sm transition duration-200 flex items-center gap-2 ${
                activeTab === 'online'
                  ? 'bg-navy-800 text-white shadow-md'
                  : 'text-slate-600 hover:text-navy-900'
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span>Online Stream Schedule</span>
            </button>
          </div>
        </div>

        {/* Schedule Display */}
        {activeTab === 'offline' ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            
            <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-navy-700 transition shadow-sm">
              <div className="text-navy-700 font-extrabold text-xs uppercase tracking-wider mb-2">Regular Evening Batch</div>
              <div className="font-display font-extrabold text-xl text-navy-900 mb-2">Grade 10 & 12 Tuition</div>
              <div className="text-2xl font-black text-navy-800 mb-3">6:00 PM – 9:00 PM</div>
              <div className="text-xs text-slate-600 space-y-1 font-medium">
                <div>🗓️ Days: Monday – Saturday</div>
                <div>📍 Location: RP Muthu Plaza, Karur</div>
                <div>📚 Subjects: Physics, Chemistry, Maths</div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-navy-700 transition shadow-sm">
              <div className="text-academy-maroon font-extrabold text-xs uppercase tracking-wider mb-2">College Engineering Batch</div>
              <div className="font-display font-extrabold text-xl text-navy-900 mb-2">Engineering Maths (M1–M4)</div>
              <div className="text-2xl font-black text-navy-800 mb-3">6:00 PM – 9:00 PM</div>
              <div className="text-xs text-slate-600 space-y-1 font-medium">
                <div>🗓️ Days: Weekday Evening & Weekends</div>
                <div>🔥 Special Offer: 25% OFF Applied</div>
                <div>🎯 Arrears & Regular Semester Clearing</div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-navy-700 transition shadow-sm sm:col-span-2 lg:col-span-1">
              <div className="text-emerald-700 font-extrabold text-xs uppercase tracking-wider mb-2">Intensive Medical Batch</div>
              <div className="font-display font-extrabold text-xl text-navy-900 mb-2">NEET Crash Course</div>
              <div className="text-2xl font-black text-navy-800 mb-3">March 26 – April 30</div>
              <div className="text-xs text-slate-600 space-y-1 font-medium">
                <div>⚡ Daily High-Yield Topic Discussions</div>
                <div>📝 Full-Length Mock Exams</div>
                <div>👥 Capped Small Batch for Personal Attention</div>
              </div>
            </div>

          </div>
        ) : (
          <div className="grid sm:grid-cols-2 gap-6 animate-fadeIn">
            
            <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-emerald-600 transition shadow-sm">
              <div className="text-emerald-700 font-extrabold text-xs uppercase tracking-wider mb-2">Live Interactive Zoom Sessions</div>
              <div className="font-display font-extrabold text-xl text-navy-900 mb-2">Online Live Lectures</div>
              <div className="text-xs text-slate-600 space-y-2 mt-3 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Real-time doubt resolution with RK Sir</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Digital whiteboard & solved PDFs provided</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Flexible timings for outstation students</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-emerald-600 transition shadow-sm">
              <div className="text-emerald-700 font-extrabold text-xs uppercase tracking-wider mb-2">On-Demand LMS</div>
              <div className="font-display font-extrabold text-xl text-navy-900 mb-2">Recorded Lecture Vault</div>
              <div className="text-xs text-slate-600 space-y-2 mt-3 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>24/7 unlimited access to all recorded sessions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Revision friendly chapter-wise video breakdowns</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Practice test series with auto-evaluation</span>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
