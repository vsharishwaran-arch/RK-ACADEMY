import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Sparkles, MapPin } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

export default function Navbar({ onOpenEnroll }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
      
      {/* Top Info Bar */}
      <div className="bg-navy-800 text-slate-200 text-[11px] sm:text-xs py-1.5 px-3 sm:px-6 border-b border-navy-700">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 truncate">
            <MapPin className="w-3 h-3 text-amber-300 flex-shrink-0" />
            <span className="truncate">RP Muthu Plaza, Near Thinnappa Theatre, Karur</span>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <a 
              href={`https://wa.me/${ACADEMY_INFO.whatsappNumber}`} 
              target="_blank" 
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1 hover:text-emerald-400 transition"
            >
              <MessageCircle className="w-3 h-3 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
            <a 
              href={`tel:${ACADEMY_INFO.phone}`} 
              className="flex items-center gap-1 text-amber-300 font-bold hover:underline"
            >
              <Phone className="w-3 h-3" />
              <span>{ACADEMY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-2.5 min-w-0">
            <img 
              src="/22.jpg" 
              alt="RK Academy Logo" 
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-navy-800 object-contain bg-white p-0.5 flex-shrink-0 shadow-sm"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "22.jpg";
              }}
            />
            <div className="flex flex-col min-w-0">
              <span className="font-display font-black text-base sm:text-xl tracking-tight text-navy-900 leading-tight truncate">
                RK ACADEMY
              </span>
              <span className="text-[9px] sm:text-[11px] text-academy-maroon font-bold tracking-wider uppercase truncate">
                KARUR • TUITION CENTER
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-bold">
            <a href="#" className="text-slate-700 hover:text-navy-900 transition">
              Home
            </a>
            <a href="#courses-fees" className="text-slate-700 hover:text-navy-900 transition">
              Courses & Fees
            </a>
            <a href="#toppers" className="text-slate-700 hover:text-navy-900 transition">
              Results & Toppers
            </a>
            <a href="#contact" className="text-slate-700 hover:text-navy-900 transition">
              Contact & Location
            </a>
          </nav>

          {/* Action Button Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenEnroll}
              className="bg-navy-800 hover:bg-navy-700 text-white font-display font-extrabold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-md active:scale-95 transition flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Enroll Now</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2 flex-shrink-0">
            <button
              onClick={onOpenEnroll}
              className="bg-navy-800 text-white text-[11px] font-extrabold px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-1 active:scale-95"
            >
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>Enroll</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 text-slate-700 hover:text-navy-900 focus:outline-none rounded-lg border border-slate-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-5 space-y-2 text-slate-800 shadow-xl animate-fadeIn">
          <a 
            href="#" 
            onClick={() => setIsOpen(false)}
            className="block text-slate-700 hover:text-navy-900 font-bold text-sm py-2 border-b border-slate-100"
          >
            Home
          </a>
          <a 
            href="#courses-fees" 
            onClick={() => setIsOpen(false)}
            className="block text-slate-700 hover:text-navy-900 font-bold text-sm py-2 border-b border-slate-100"
          >
            Courses & Fees
          </a>
          <a 
            href="#toppers" 
            onClick={() => setIsOpen(false)}
            className="block text-slate-700 hover:text-navy-900 font-bold text-sm py-2 border-b border-slate-100"
          >
            Results & Toppers
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="block text-slate-700 hover:text-navy-900 font-bold text-sm py-2"
          >
            Contact & Location
          </a>
          <button
            onClick={() => {
              setIsOpen(false);
              onOpenEnroll();
            }}
            className="w-full bg-navy-800 text-white font-extrabold text-xs py-3 rounded-xl text-center shadow-md mt-2 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Join Now / Admission Inquiry</span>
          </button>
        </div>
      )}
    </header>
  );
}
