import React from 'react';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

export default function FloatingActions({ onOpenEnroll }) {
  return (
    <>
      {/* Desktop & Tablet Floating Action Buttons */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col gap-3">
        
        {/* Floating WhatsApp Button */}
        <a
          href={`https://wa.me/${ACADEMY_INFO.whatsappNumber}?text=Hi%20RK%20Academy,%20I%20have%20an%20admission%20inquiry.`}
          target="_blank"
          rel="noreferrer"
          className="relative bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-2xl transition duration-300 hover:scale-110 flex items-center justify-center group"
          title="Chat on WhatsApp"
        >
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-rose-500 rounded-full border-2 border-white animate-ping"></span>
          <MessageCircle className="w-5 h-5 text-white" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out text-xs font-bold pl-0 group-hover:pl-2">
            WhatsApp Admissions
          </span>
        </a>

        {/* Floating Call Button */}
        <a
          href={`tel:${ACADEMY_INFO.phone}`}
          className="bg-[#3E1A14] hover:bg-[#2D120D] text-white p-3.5 rounded-full shadow-2xl transition duration-300 hover:scale-110 flex items-center justify-center group border border-[#2D120D]"
          title="Call RK Academy Admin"
        >
          <Phone className="w-5 h-5 text-amber-300" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out text-xs font-bold text-amber-200 pl-0 group-hover:pl-2">
            {ACADEMY_INFO.phone}
          </span>
        </a>

      </div>

      {/* Mobile Fixed Bottom Sticky Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-amber-900/15 px-3 py-2 flex items-center gap-2 shadow-2xl">
        <a
          href={`tel:${ACADEMY_INFO.phone}`}
          className="flex-1 bg-amber-50 active:bg-amber-100 text-[#3E1A14] border border-amber-200 font-bold text-xs py-2.5 rounded-xl flex items-center justify-center gap-1 min-w-0 truncate"
        >
          <Phone className="w-3.5 h-3.5 text-[#3E1A14] flex-shrink-0" />
          <span className="truncate">Call Admin</span>
        </a>

        <button
          onClick={onOpenEnroll}
          className="flex-1 bg-[#3E1A14] active:bg-[#2D120D] text-amber-200 font-extrabold text-xs py-2.5 rounded-xl shadow-md flex items-center justify-center gap-1 min-w-0 truncate"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
          <span className="truncate">Enroll Now</span>
        </button>

        <a
          href={`https://wa.me/${ACADEMY_INFO.whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
          className="bg-emerald-600 active:bg-emerald-500 text-white p-2.5 rounded-xl flex items-center justify-center shadow-md flex-shrink-0"
          title="WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
        </a>
      </div>
    </>
  );
}
