import React from 'react';
import { MapPin, Phone, Instagram, Clock, MessageCircle, Navigation } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

export default function ContactAndLocation({ onOpenEnroll }) {
  return (
    <section id="contact" className="py-16 bg-[#FAF4F0] text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-300 text-slate-800 text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-3 shadow-sm">
            <MapPin className="w-4 h-4 text-slate-700" />
            <span>Visit Or Contact Us</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900">
            Contact & Academy Location
          </h2>
          <p className="text-slate-600 text-base mt-2 font-normal">
            Walk into our Karur center or connect directly on WhatsApp / Phone.
          </p>
          <div className="w-16 h-1 bg-[#5C2C1D] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Details Box */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-100 rounded-xl text-slate-800 border border-slate-200 flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-sm">Center Address</h4>
                  <p className="text-slate-800 text-base font-semibold mt-0.5">{ACADEMY_INFO.address}</p>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ACADEMY_INFO.mapQuery)}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-slate-800 hover:text-[#5C2C1D] font-semibold mt-2 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions on Google Maps →</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-slate-100 pt-4">
                <div className="p-3 bg-slate-100 rounded-xl text-slate-800 border border-slate-200 flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-sm">Admissions Hotline</h4>
                  <a href={`tel:${ACADEMY_INFO.phone}`} className="text-slate-900 font-display font-bold text-2xl hover:text-[#5C2C1D] transition block">
                    {ACADEMY_INFO.phone}
                  </a>
                  <p className="text-xs text-slate-500">Mon – Sat (9:00 AM – 9:00 PM)</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 border-t border-slate-100 pt-4">
                <div className="flex items-center gap-3">
                  <Instagram className="w-5 h-5 text-slate-700 flex-shrink-0" />
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">Instagram</div>
                    <a href={ACADEMY_INFO.instagramUrl} target="_blank" rel="noreferrer" className="text-xs font-bold text-slate-900 hover:underline">
                      {ACADEMY_INFO.instagram}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-slate-700 flex-shrink-0" />
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">Evening Batch</div>
                    <div className="text-xs font-bold text-slate-900">{ACADEMY_INFO.timing.hours}</div>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${ACADEMY_INFO.whatsappNumber}?text=Hi%20RK%20Academy,%20I%20want%20to%20inquire%20about%20admissions.`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>

                <button
                  onClick={onOpenEnroll}
                  className="flex-1 bg-[#5C2C1D] hover:bg-[#4A2216] text-white font-bold text-sm py-3.5 rounded-xl shadow-md transition"
                >
                  Request Callback
                </button>
              </div>

            </div>

          </div>

          {/* Right Google Maps Embed Preview Frame */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-3 shadow-md h-full flex flex-col">
            <div className="w-full h-80 sm:h-96 rounded-xl overflow-hidden border border-slate-200 relative bg-slate-100">
              <iframe
                title="RK Academy Karur Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.423719460299!2d78.0772!3d10.9577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2e76f92d4f29%3A0x867ec4c0db468165!2sThinnappa%20Theatre!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="text-center text-xs text-slate-500 font-medium py-2">
              📍 Conveniently located near Thinnappa Theatre, Karur-1
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
