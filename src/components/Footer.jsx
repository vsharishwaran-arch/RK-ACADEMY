import React from 'react';
import { ACADEMY_INFO } from '../data/academyData';
import { Heart } from 'lucide-react';

export default function Footer({ onOpenEnroll }) {
  return (
    <footer className="bg-[#742512] text-slate-200 text-xs py-12 border-t border-terracotta/40 pb-20 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#D85628]/30">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-3">
              <img 
                src="/22.jpg" 
                alt="RK Academy Logo" 
                className="w-10 h-10 rounded-full border border-[#D85628] object-contain bg-white p-0.5"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "22.jpg";
                }}
              />
              <span className="font-display font-black text-lg text-white tracking-tight">
                RK ACADEMY
              </span>
            </div>
            <p className="text-[#FFDBCE] font-bold text-xs">
              {ACADEMY_INFO.tagline}
            </p>
            <p className="text-slate-200 text-xs leading-relaxed italic opacity-90">
              "{ACADEMY_INFO.motto}"
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-2">
            <h4 className="font-display font-bold text-white text-sm">Quick Links</h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#courses-fees" className="hover:text-[#FFDBCE] transition">Courses Offered</a></li>
              <li><a href="#why-us" className="hover:text-[#FFDBCE] transition">Why Choose Us</a></li>
              <li><a href="#toppers" className="hover:text-[#FFDBCE] transition">Results & Toppers</a></li>
              <li><a href="#testimonials" className="hover:text-[#FFDBCE] transition">Student Testimonials</a></li>
              <li><a href="#contact" className="hover:text-[#FFDBCE] transition">Contact & Location</a></li>
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div className="space-y-2">
            <h4 className="font-display font-bold text-white text-sm">Our Programs</h4>
            <ul className="space-y-1.5 text-xs text-slate-200 opacity-90">
              <li>Class 10 CBSE, ICSE, Matric Tuition</li>
              <li>Class 12 Physics, Chemistry & Maths</li>
              <li>Engineering Maths (M1, M2, M3 & M4)</li>
              <li>NEET Crash Course (March 26 - April 30)</li>
              <li>IIT JEE Maths & Physics Special</li>
            </ul>
          </div>

          {/* Col 4: Address */}
          <div className="space-y-2">
            <h4 className="font-display font-bold text-white text-sm">Academy Location</h4>
            <p className="text-slate-200 leading-relaxed opacity-90">
              {ACADEMY_INFO.address}
            </p>
            <p className="text-amber-300 font-bold">
              📞 Call: {ACADEMY_INFO.phone}
            </p>
            <p className="text-slate-200 opacity-90">
              🕒 Evening Batch: {ACADEMY_INFO.timing.hours}
            </p>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-300 text-[11px]">
          <div>
            © {new Date().getFullYear()} <strong className="text-white">RK Academy Karur</strong>. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-amber-300 fill-current" />
            <span>for Karur Students</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
