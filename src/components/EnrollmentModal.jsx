import React, { useState } from 'react';
import { X, Sparkles, CheckCircle, MessageCircle, Send, Phone } from 'lucide-react';
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
      
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-gradient-to-br from-white via-[#FAF4F0] to-[#E8D8CF]/50 border-2 border-[#5C2C1D]/30 rounded-3xl p-5 sm:p-8 shadow-2xl text-slate-900">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 text-slate-400 hover:text-[#381A12] rounded-full hover:bg-white/80 transition min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {!submitted ? (
          <div>
            <div className="inline-flex items-center gap-1.5 bg-[#E8D8CF] border border-[#5C2C1D]/30 text-[#381A12] font-extrabold text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#5C2C1D]" />
              <span>Direct Admission Inquiry</span>
            </div>

            <h3 className="font-display font-black text-xl sm:text-3xl text-[#381A12] pr-6">
              Enroll at RK Academy Karur
            </h3>
            <p className="text-xs text-slate-600 mt-1 mb-5 font-medium">
              Fill in your details below to lock in current batch slots and discount offers.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Full Name <span className="text-[#5C2C1D]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full bg-white border border-[#5C2C1D]/30 rounded-xl px-4 py-3 text-sm text-[#381A12] font-medium focus:outline-none focus:border-[#5C2C1D] shadow-sm min-h-[44px]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Mobile / WhatsApp Number <span className="text-[#5C2C1D]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 9790570707"
                  className="w-full bg-white border border-[#5C2C1D]/30 rounded-xl px-4 py-3 text-sm text-[#381A12] font-medium focus:outline-none focus:border-[#5C2C1D] shadow-sm min-h-[44px]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Course Interested In:
                </label>
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full bg-white border border-[#5C2C1D]/30 rounded-xl px-4 py-3 text-sm text-[#381A12] font-bold focus:outline-none focus:border-[#5C2C1D] shadow-sm min-h-[44px]"
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, mode: 'Offline Karur Center' })}
                    className={`py-2.5 rounded-xl text-xs font-bold border transition min-h-[44px] flex items-center justify-center ${
                      formData.mode === 'Offline Karur Center'
                        ? 'bg-[#5C2C1D] border-[#5C2C1D] text-white shadow-sm'
                        : 'bg-white border-slate-200 text-slate-700'
                    }`}
                  >
                    📍 Offline (Karur)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, mode: 'Online Live Classes' })}
                    className={`py-2.5 rounded-xl text-xs font-bold border transition min-h-[44px] flex items-center justify-center ${
                      formData.mode === 'Online Live Classes'
                        ? 'bg-[#5C2C1D] border-[#5C2C1D] text-white shadow-sm'
                        : 'bg-white border-slate-200 text-slate-700'
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
                  className="w-full bg-white border border-[#5C2C1D]/30 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#381A12] font-medium focus:outline-none focus:border-[#5C2C1D] shadow-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full min-h-[48px] bg-gradient-to-r from-[#5C2C1D] to-[#381A12] hover:from-[#4A2216] hover:to-[#2C140E] text-white font-display font-black text-sm sm:text-base py-3.5 rounded-xl shadow-md transition duration-200 mt-2 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5 text-amber-200" />
                <span>Submit Inquiry</span>
              </button>

            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-5 animate-fadeIn">
            
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 border border-emerald-300 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div>
              <h3 className="font-display font-black text-2xl text-navy-900">Inquiry Received!</h3>
              <p className="text-xs text-slate-600 mt-2 max-w-xs mx-auto font-medium">
                Thank you <strong className="text-navy-900">{formData.name}</strong>. Your details have been submitted. For fastest response, send your inquiry directly to our admin via WhatsApp!
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href={getWhatsAppMessageUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full min-h-[48px] bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 transition"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Send via WhatsApp Now</span>
              </a>

              <button
                onClick={handleReset}
                className="block text-xs sm:text-sm text-slate-500 hover:text-navy-900 underline mx-auto font-semibold py-2"
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
