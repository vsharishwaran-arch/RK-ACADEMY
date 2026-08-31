import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Sparkles, MapPin } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

export default function Navbar({ onOpenEnroll }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Contact Bar (Mayiliragu Deep Mahogany #742512) */}
      <div className="bg-[#742512] text-slate-100 text-[11px] sm:text-xs py-2 px-3 sm:px-6 border-b border-terracotta/40">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-1.5 font-medium truncate">
            <MapPin className="w-3.5 h-3.5 text-[#FFDBCE] flex-shrink-0" />
            <span className="truncate">No.17, RP Muthu Plaza, Near Thinnappa Theatre, Karur-1</span>
          </div>

          <div className="flex items-center gap-3 ml-auto sm:ml-0 flex-shrink-0">
            <a 
              href={`https://wa.me/${ACADEMY_INFO.whatsappNumber}`} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-emerald-300 transition py-0.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span className="inline">WhatsApp</span>
            </a>
            <span className="text-rose-300/40">|</span>
            <a 
              href={`tel:${ACADEMY_INFO.phone}`} 
              className="flex items-center gap-1 text-[#FFDBCE] font-bold hover:underline py-0.5"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              <span>{ACADEMY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-terracotta/20 shadow-sm text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-2.5 sm:gap-3 group flex-shrink-0">
              <img 
                src="/22.jpg" 
                alt="RK Academy Logo" 
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#D85628] object-contain bg-white p-0.5 group-hover:scale-105 transition duration-300 shadow-sm"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "22.jpg";
                }}
              />
              <div className="flex flex-col">
                <span className="font-display font-black text-lg sm:text-xl tracking-tight text-[#742512] group-hover:text-[#D85628] transition leading-tight">
                  RK ACADEMY
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#D85628] font-extrabold tracking-wider uppercase">
                  KARUR • {ACADEMY_INFO.tagline}
                </span>
              </div>
            </a>

            {/* Desktop & Tablet Navigation Links */}
            <div className="hidden md:flex items-center gap-5 lg:gap-8 text-xs lg:text-sm font-bold">
              <a href="#" className="text-slate-700 hover:text-[#D85628] transition py-2">
                Home
              </a>
              <a href="#courses-fees" className="text-slate-700 hover:text-[#D85628] transition py-2">
                Courses & Fees
              </a>
              <a href="#why-us" className="text-slate-700 hover:text-[#D85628] transition py-2">
                Why Choose Us
              </a>
              <a href="#toppers" className="text-slate-700 hover:text-[#D85628] transition py-2">
                Results & Toppers
              </a>
              <a href="#testimonials" className="text-slate-700 hover:text-[#D85628] transition py-2">
                Testimonials
              </a>
              <a href="#contact" className="text-slate-700 hover:text-[#D85628] transition py-2">
                Contact & Location
              </a>
            </div>

            {/* Enrollment Button (Mayiliragu Terracotta Red Gradient) */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onOpenEnroll}
                className="bg-gradient-to-r from-[#D85628] to-[#742512] hover:from-[#C2471B] hover:to-[#5E1E0E] text-white font-display font-extrabold text-xs uppercase tracking-wider px-4 lg:px-5 py-2.5 lg:py-3 rounded-xl shadow-md active:scale-95 transition flex items-center gap-2 min-h-[42px]"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>Enroll Now</span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={onOpenEnroll}
                className="sm:hidden bg-gradient-to-r from-[#D85628] to-[#742512] text-white text-xs font-extrabold px-3 py-2 rounded-lg min-h-[38px] flex items-center gap-1"
              >
                <Sparkles className="w-3 h-3 text-amber-200" />
                <span>Enroll</span>
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-slate-700 hover:text-[#742512] rounded-lg focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Toggle Navigation Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-terracotta/20 px-4 pt-3 pb-5 space-y-2 text-slate-800 shadow-xl animate-fadeIn">
            <a 
              href="#" 
              onClick={() => setIsOpen(false)}
              className="block text-slate-700 hover:text-[#D85628] font-bold py-2.5 px-2 border-b border-slate-100 rounded-lg hover:bg-orange-50"
            >
              Home
            </a>
            <a 
              href="#courses-fees" 
              onClick={() => setIsOpen(false)}
              className="block text-slate-700 hover:text-[#D85628] font-bold py-2.5 px-2 border-b border-slate-100 rounded-lg hover:bg-orange-50"
            >
              Courses & Fees
            </a>
            <a 
              href="#why-us" 
              onClick={() => setIsOpen(false)}
              className="block text-slate-700 hover:text-[#D85628] font-bold py-2.5 px-2 border-b border-slate-100 rounded-lg hover:bg-orange-50"
            >
              Why Choose Us
            </a>
            <a 
              href="#toppers" 
              onClick={() => setIsOpen(false)}
              className="block text-slate-700 hover:text-[#D85628] font-bold py-2.5 px-2 border-b border-slate-100 rounded-lg hover:bg-orange-50"
            >
              Results & Toppers
            </a>
            <a 
              href="#testimonials" 
              onClick={() => setIsOpen(false)}
              className="block text-slate-700 hover:text-[#D85628] font-bold py-2.5 px-2 border-b border-slate-100 rounded-lg hover:bg-orange-50"
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="block text-slate-700 hover:text-[#D85628] font-bold py-2.5 px-2 rounded-lg hover:bg-orange-50"
            >
              Contact & Location
            </a>
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenEnroll();
              }}
              className="w-full bg-gradient-to-r from-[#D85628] to-[#742512] text-white font-extrabold py-3.5 rounded-xl text-center shadow-md mt-2 min-h-[48px] flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>Join Now / Admission Inquiry</span>
            </button>
          </div>
        )}
      </nav>
    </>
  );
}
