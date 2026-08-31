import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Sparkles, MapPin, Clock, Instagram } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

export default function Navbar({ onOpenEnroll }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* 1. Top Announcement / Quick Contact Bar (Dark Chocolate) */}
      <div className="bg-[#381A12] text-slate-200 text-xs py-2 px-4 border-b border-amber-900/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <a href={`tel:${ACADEMY_INFO.phone}`} className="flex items-center gap-1.5 hover:text-amber-200 transition font-medium">
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              <span>Call: <strong>{ACADEMY_INFO.phone}</strong></span>
            </a>
            <span className="hidden sm:inline text-amber-800">|</span>
            <div className="hidden sm:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              <span>Evening Batch: {ACADEMY_INFO.timing.hours}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-[11px] sm:text-xs font-semibold">
            <span className="text-amber-200 bg-amber-950/80 px-2.5 py-0.5 rounded-full border border-amber-800/40">
              ⚡ Engineering Maths 25% OFF
            </span>
            <a 
              href={ACADEMY_INFO.instagramUrl} 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-amber-200 transition flex items-center gap-1"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Follow Us</span>
            </a>
          </div>

        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <header className="bg-white/95 backdrop-blur-md sticky top-0 z-40 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            
            {/* Brand Logo & Name */}
            <a href="#" className="flex items-center gap-3 group">
              <img 
                src="/22.jpg" 
                alt="RK Academy Logo" 
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#5C2C1D] object-contain bg-white p-0.5 group-hover:scale-105 transition duration-300 shadow-sm"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "22.jpg";
                }}
              />
              <div className="flex flex-col">
                <span className="font-display font-black text-lg sm:text-xl tracking-tight text-[#381A12] group-hover:text-[#5C2C1D] transition leading-tight">
                  RK ACADEMY
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#5C2C1D] font-extrabold tracking-wider uppercase">
                  Karur • Tuition Center
                </span>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-6 font-display text-xs lg:text-sm font-bold tracking-wide">
              <a href="#" className="text-slate-700 hover:text-[#5C2C1D] transition py-2">
                Home
              </a>
              <a href="#courses-fees" className="text-slate-700 hover:text-[#5C2C1D] transition py-2">
                Courses & Fees
              </a>
              <a href="#why-us" className="text-slate-700 hover:text-[#5C2C1D] transition py-2">
                Why Choose Us
              </a>
              <a href="#toppers" className="text-slate-700 hover:text-[#5C2C1D] transition py-2">
                Results & Toppers
              </a>
              <a href="#testimonials" className="text-slate-700 hover:text-[#5C2C1D] transition py-2">
                Testimonials
              </a>
              <a href="#contact" className="text-slate-700 hover:text-[#5C2C1D] transition py-2">
                Contact & Location
              </a>
            </nav>

            {/* Desktop CTA Button */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={onOpenEnroll}
                className="bg-gradient-to-r from-[#5C2C1D] to-[#381A12] hover:from-[#4A2216] hover:to-[#2C140E] text-white font-display font-extrabold text-xs uppercase tracking-wider px-4 lg:px-5 py-2.5 lg:py-3 rounded-xl shadow-md active:scale-95 transition flex items-center gap-2 min-h-[42px]"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>ENROLL NOW</span>
              </button>

              {/* Mobile Quick Enroll Accent */}
              <button
                onClick={onOpenEnroll}
                className="sm:hidden bg-gradient-to-r from-[#5C2C1D] to-[#381A12] text-white text-xs font-extrabold px-3 py-2 rounded-lg min-h-[38px] flex items-center gap-1"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                <span>Enroll</span>
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-[#381A12] hover:bg-slate-100 transition min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            <nav className="flex flex-col space-y-1 font-display text-sm font-bold">
              <a
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-700 hover:text-[#5C2C1D] font-bold py-2.5 px-2 border-b border-slate-100 rounded-lg hover:bg-amber-50/50"
              >
                Home
              </a>
              <a
                href="#courses-fees"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-700 hover:text-[#5C2C1D] font-bold py-2.5 px-2 border-b border-slate-100 rounded-lg hover:bg-amber-50/50"
              >
                Courses & Fee Structure
              </a>
              <a
                href="#why-us"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-700 hover:text-[#5C2C1D] font-bold py-2.5 px-2 border-b border-slate-100 rounded-lg hover:bg-amber-50/50"
              >
                Why Choose Us
              </a>
              <a
                href="#toppers"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-700 hover:text-[#5C2C1D] font-bold py-2.5 px-2 border-b border-slate-100 rounded-lg hover:bg-amber-50/50"
              >
                Results & Toppers
              </a>
              <a
                href="#testimonials"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-700 hover:text-[#5C2C1D] font-bold py-2.5 px-2 border-b border-slate-100 rounded-lg hover:bg-amber-50/50"
              >
                Student Testimonials
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-700 hover:text-[#5C2C1D] font-bold py-2.5 px-2 rounded-lg hover:bg-amber-50/50"
              >
                Contact & Academy Location
              </a>
            </nav>

            <div className="pt-2 border-t border-slate-100 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnroll();
                }}
                className="w-full bg-gradient-to-r from-[#5C2C1D] to-[#381A12] text-white font-extrabold py-3.5 rounded-xl text-center shadow-md mt-2 min-h-[48px] flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>Admissions & Inquiry</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
