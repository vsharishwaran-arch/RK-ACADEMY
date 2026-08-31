import React, { useState } from 'react';
import { X, Sparkles, CheckCircle, MessageCircle, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ACADEMY_INFO, COURSES } from '../data/academyData';

export default function EnrollmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: 'engg-maths',
    mode: 'Offline Karur Center',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please enter your Name and Mobile Number');
      return;
    }

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log('Confetti triggered');
    }

    setSubmitted(true);
  };

  const getWhatsAppMessageUrl = () => {
    const selectedCourseObj = COURSES.find(c => c.id === formData.course);
    const courseTitle = selectedCourseObj ? selectedCourseObj.title : formData.course;
    
    const msg = `Hi RK Academy Karur,%0A%0AMy Name: ${encodeURIComponent(formData.name)}%0AMobile: ${encodeURIComponent(formData.phone)}%0AInterested Course: ${encodeURIComponent(courseTitle)}%0APreferred Mode: ${encodeURIComponent(formData.mode)}%0ANotes: ${encodeURIComponent(formData.notes || 'None')}%0A%0APlease contact me regarding admissions & fees.`;
    
    return `https://wa.me/${ACADEMY_INFO.whatsappNumber}?text=${msg}`;
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      course: 'engg-maths',
      mode: 'Offline Karur Center',
      notes: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white border-2 border-amber-900/20 rounded-3xl p-5 sm:p-8 shadow-2xl text-slate-900">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-3 right-3 p-2 text-slate-400 hover:text-[#3E1A14] rounded-full hover:bg-slate-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-1.5 text-[#3E1A14] font-extrabold text-xs uppercase tracking-wider mb-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C98A2C]" />
              <span>Direct Admission Inquiry</span>
            </div>

            <h3 className="font-display font-black text-xl sm:text-3xl text-[#0F2038]">
              Enroll at RK Academy Karur
            </h3>
            <p className="text-xs text-slate-600 mt-1 mb-4 font-medium">
              Fill in your details below to lock in current batch slots and discount offers.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 font-medium focus:outline-none focus:border-[#3E1A14]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Mobile / WhatsApp Number <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 9790570707"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 font-medium focus:outline-none focus:border-[#3E1A14]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Course Interested In:
                </label>
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 font-bold focus:outline-none focus:border-[#3E1A14]"
                >
                  <option value="engg-maths">🔥 Engineering Maths M1-M4 (25% OFF)</option>
                  <option value="neet-crash">⚡ NEET Crash Course (March 26 - April 30)</option>
                  <option value="grade-12">Class 12 Physics, Chemistry & Maths</option>
                  <option value="grade-10">Class 10 Foundation Tuition</option>
                  <option value="iit-prep">IIT JEE Advanced Maths & Physics</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Preferred Learning Mode:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, mode: 'Offline Karur Center' })}
                    className={`py-2 rounded-xl text-xs font-bold border transition ${
                      formData.mode === 'Offline Karur Center'
                        ? 'bg-[#3E1A14] border-[#3E1A14] text-amber-100'
                        : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    📍 Offline (Karur)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, mode: 'Online Live Classes' })}
                    className={`py-2 rounded-xl text-xs font-bold border transition ${
                      formData.mode === 'Online Live Classes'
                        ? 'bg-[#3E1A14] border-[#3E1A14] text-amber-100'
                        : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    💻 Online Stream
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Additional Notes (Optional):
                </label>
                <textarea
                  rows="2"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Looking for evening 6 PM batch details..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 font-medium focus:outline-none focus:border-[#3E1A14]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#3E1A14] hover:bg-[#2A110D] text-amber-100 font-display font-black text-xs sm:text-sm py-3 rounded-xl shadow-md transition duration-200 mt-1 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-amber-300" />
                <span>Submit Inquiry</span>
              </button>

            </form>
          </div>
        ) : (
          <div className="text-center py-4 space-y-4 animate-fadeIn">
            
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 border border-emerald-300 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <h3 className="font-display font-black text-xl sm:text-2xl text-[#0F2038]">Inquiry Received!</h3>
              <p className="text-xs text-slate-600 mt-1.5 max-w-xs mx-auto font-medium">
                Thank you <strong className="text-slate-900">{formData.name}</strong>. Your details have been submitted. For fastest response, send your inquiry directly to our admin via WhatsApp!
              </p>
            </div>

            <div className="space-y-2.5 pt-1">
              <a
                href={getWhatsAppMessageUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm py-3 rounded-xl shadow-md flex items-center justify-center gap-2 transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send via WhatsApp Now</span>
              </a>

              <button
                onClick={handleReset}
                className="block text-xs text-slate-500 hover:text-[#3E1A14] underline mx-auto font-semibold"
              >
                Close Window
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
