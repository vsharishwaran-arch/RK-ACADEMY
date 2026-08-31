import React from 'react';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

export default function FloatingActions({ onOpenEnroll }) {
  return (
    <>
      {/* Desktop & Tablet Floating Buttons */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col gap-3">
        
        {/* Floating WhatsApp Button */}
        <a
          href={`https://wa.me/${ACADEMY_INFO.whatsappNumber}?text=Hi%20RK%20Academy,%20I%20have%20an%20admission%20inquiry.`}
          target="_blank"
          rel="noreferrer"
          className="relative bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-2xl transition duration-300 hover:scale-110 flex items-center justify-center group"
          title="Chat on WhatsApp"
        >
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-500 rounded-full border-2 border-white animate-ping"></span>
          <MessageCircle className="w-6 h-6 text-white" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out text-xs font-bold pl-0 group-hover:pl-2">
            WhatsApp Admissions
          </span>
        </a>

        {/* Floating Call Button */}
        <a
          href={`tel:${ACADEMY_INFO.phone}`}
          className="bg-[#381A12] hover:bg-[#2C140E] text-white p-4 rounded-full shadow-2xl transition duration-300 hover:scale-110 flex items-center justify-center group border border-[#5C2C1D]"
          title="Call RK Academy Admin"
        >
          <Phone className="w-6 h-6 text-amber-200" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out text-xs font-bold text-white pl-0 group-hover:pl-2">
            {ACADEMY_INFO.phone}
          </span>
        </a>

      </div>

      {/* Mobile Sticky Bottom Bar (Touch Target Optimized) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 flex items-center gap-2 shadow-2xl">
        <a
          href={`tel:${ACADEMY_INFO.phone}`}
          className="flex-1 bg-slate-100 text-slate-900 border border-slate-300 font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-1.5 min-h-[44px] active:bg-slate-200"
        >
          <Phone className="w-4 h-4 text-slate-800" />
          <span>Call Admin</span>
        </a>

        <button
          onClick={onOpenEnroll}
          className="flex-1 bg-[#5C2C1D] text-white font-extrabold text-xs py-3 rounded-xl shadow-md flex items-center justify-center gap-1.5 min-h-[44px] active:scale-95 transition"
        >
          <Sparkles className="w-4 h-4 text-amber-200" />
          <span>Enroll Now</span>
        </button>

        <a
          href={`https://wa.me/${ACADEMY_INFO.whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
          className="bg-emerald-600 active:bg-emerald-700 text-white px-3.5 py-3 rounded-xl flex items-center justify-center shadow-md min-h-[44px] min-w-[44px]"
          title="WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
        </a>
      </div>
    </>
  );
}
