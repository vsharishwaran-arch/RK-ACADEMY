import React from 'react';
import { MapPin, Phone, Instagram, Clock, MessageCircle, Navigation } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

export default function ContactAndLocation({ onOpenEnroll }) {
  return (
    <section id="contact" className="py-12 sm:py-16 bg-[#FAF6F0] text-slate-900 border-b border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-[#3E1A14] text-amber-200 text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2.5 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-amber-300" />
            <span>Visit Or Contact Us</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-[#0F2038]">
            Contact & Academy Location
          </h2>
          <p className="text-slate-600 text-xs sm:text-base mt-2 font-medium">
            Walk into our Karur center or connect directly on WhatsApp / Phone.
          </p>
          <div className="w-12 sm:w-16 h-1 bg-[#3E1A14] mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Details Box */}
          <div className="lg:col-span-6 space-y-5">
            
            <div className="bg-white border-2 border-amber-900/15 rounded-3xl p-5 sm:p-8 shadow-md space-y-5">
              
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 bg-amber-50 rounded-2xl text-[#3E1A14] border border-amber-200 flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-[#0F2038] text-xs sm:text-sm">Center Address</h4>
                  <p className="text-slate-800 text-xs sm:text-base font-semibold mt-0.5 leading-snug">{ACADEMY_INFO.address}</p>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ACADEMY_INFO.mapQuery)}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-[#3E1A14] hover:underline font-bold mt-2 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions on Google Maps →</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 border-t border-slate-100 pt-4">
                <div className="p-2.5 sm:p-3 bg-emerald-50 rounded-2xl text-emerald-700 border border-emerald-100 flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-emerald-800 text-xs sm:text-sm">Admissions Hotline</h4>
                  <a href={`tel:${ACADEMY_INFO.phone}`} className="text-[#3E1A14] font-display font-black text-xl sm:text-2xl hover:text-[#2A110D] transition block">
                    {ACADEMY_INFO.phone}
                  </a>
                  <p className="text-[11px] text-slate-500 font-medium">Mon – Sat (9:00 AM – 9:00 PM)</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 border-t border-slate-100 pt-4">
                <div className="flex items-center gap-2">
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-rose-600 flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="text-[10px] text-slate-500 font-semibold">Instagram</div>
                    <a href={ACADEMY_INFO.instagramUrl} target="_blank" rel="noreferrer" className="text-xs font-bold text-navy-900 hover:underline truncate block">
                      {ACADEMY_INFO.instagram}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#3E1A14] flex-shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-500 font-semibold">Evening Batch</div>
                    <div className="text-xs font-bold text-navy-900">{ACADEMY_INFO.timing.hours}</div>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <a
                  href={`https://wa.me/${ACADEMY_INFO.whatsappNumber}?text=Hi%20RK%20Academy,%20I%20want%20to%20inquire%20about%20admissions.`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3 rounded-xl shadow-md flex items-center justify-center gap-2 transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>

                <button
                  onClick={onOpenEnroll}
                  className="flex-1 bg-[#3E1A14] hover:bg-[#2A110D] text-amber-200 font-bold text-xs py-3 rounded-xl shadow-md transition"
                >
                  Request Callback
                </button>
              </div>

            </div>

          </div>

          {/* Right Google Maps Embed Preview Frame */}
          <div className="lg:col-span-6 bg-white border-2 border-amber-900/15 rounded-3xl p-3 shadow-md h-full flex flex-col">
            <div className="w-full h-56 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 relative bg-slate-100">
              <iframe
                title="RK Academy Karur Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.423719460299!2d78.0772!3d10.9577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2e76f92d4f29%3A0x867ec4c0db468165!2sThinnappa%20Theatre!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="text-center text-[11px] text-slate-500 font-medium py-2">
              📍 Conveniently located near Thinnappa Theatre, Karur-1
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
