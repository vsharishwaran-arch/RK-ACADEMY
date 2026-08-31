import React from 'react';
import { MapPin, Phone, Instagram, Clock, MessageCircle, Navigation, Send } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

export default function ContactSection({ onOpenEnroll }) {
  return (
    <section id="contact" className="py-20 bg-slate-100/80 text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Details */}
          <div className="lg:col-span-6 space-y-8">
            
            <div>
              <span className="text-navy-700 font-extrabold text-xs uppercase tracking-widest block mb-2">Visit Or Reach Us</span>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-navy-900">
                Get In Touch With RK Academy Karur
              </h2>
              <p className="text-slate-600 text-base mt-3 leading-relaxed font-medium">
                Have questions about course fees, batch schedules, or demo classes? Walk into our Karur center or call our administration office anytime.
              </p>
            </div>

            {/* Contact Items */}
            <div className="space-y-6">
              
              <div className="flex items-start gap-4 p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <div className="p-3 bg-blue-50 rounded-xl text-navy-800 border border-blue-100">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-navy-900 text-sm">Academy Address</h4>
                  <p className="text-slate-800 text-base font-semibold mt-0.5">{ACADEMY_INFO.address}</p>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ACADEMY_INFO.mapQuery)}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-navy-700 hover:underline mt-1 font-bold"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Open in Google Maps →</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <div className="p-3 bg-emerald-50 rounded-xl text-emerald-700 border border-emerald-100">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-emerald-800 text-sm">Phone & Admissions</h4>
                  <a href={`tel:${ACADEMY_INFO.phone}`} className="text-navy-900 font-display font-black text-2xl hover:text-navy-700 transition block">
                    {ACADEMY_INFO.phone}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">Calls answered Mon–Sat (9 AM – 9 PM)</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <Instagram className="w-6 h-6 text-rose-600" />
                  <div>
                    <div className="text-xs text-slate-500 font-semibold">Instagram</div>
                    <a href={ACADEMY_INFO.instagramUrl} target="_blank" rel="noreferrer" className="text-xs font-bold text-navy-900 hover:underline">
                      {ACADEMY_INFO.instagram}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <Clock className="w-6 h-6 text-navy-800" />
                  <div>
                    <div className="text-xs text-slate-500 font-semibold">Center Timings</div>
                    <div className="text-xs font-bold text-navy-900">{ACADEMY_INFO.timing.hours}</div>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Direct Callout Box */}
          <div className="lg:col-span-6 bg-white border-2 border-navy-800/30 rounded-3xl p-8 sm:p-10 shadow-xl space-y-6">
            
            <div className="text-center space-y-2">
              <span className="bg-navy-800 text-white font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                Immediate Response
              </span>
              <h3 className="font-display font-black text-2xl text-navy-900">
                Ready To Step Up Your Academic Future?
              </h3>
              <p className="text-slate-600 text-sm font-medium">
                Get free course counseling, sample lecture material, and clear your doubts directly with RK Academy faculty.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <a
                href={`tel:${ACADEMY_INFO.phone}`}
                className="w-full bg-navy-800 hover:bg-navy-700 text-white font-display font-extrabold text-base py-4 rounded-xl shadow-md flex items-center justify-center gap-2 transition"
              >
                <Phone className="w-5 h-5 text-amber-300" />
                <span>Call Admin Now: {ACADEMY_INFO.phone}</span>
              </a>

              <a
                href={`https://wa.me/${ACADEMY_INFO.whatsappNumber}?text=Hi%20RK%20Academy,%20I%20want%20to%20inquire%20about%20admissions.`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base py-4 rounded-xl shadow-md flex items-center justify-center gap-2 transition"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp Instantly</span>
              </a>

              <button
                onClick={onOpenEnroll}
                className="w-full bg-slate-100 hover:bg-slate-200 text-navy-900 border border-slate-300 font-bold text-sm py-3 rounded-xl transition"
              >
                Fill Quick Callback Request Form
              </button>
            </div>

            <div className="text-center text-[11px] text-slate-500 font-medium pt-2">
              📍 Address: No.17, RP Muthu Plaza, Near Thinnappa Theatre, Karur-1
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
