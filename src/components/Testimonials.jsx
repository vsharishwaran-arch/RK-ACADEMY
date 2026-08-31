import React from 'react';
import { Quote, Star, Play, Award, Users } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Karthik R.",
    role: "Engineering Student (M1 & M2 Cleared)",
    college: "VSB Engineering College, Karur",
    quote: "Engineering Maths used to be a big nightmare for me until I joined RK Academy. The shortcut techniques for Fourier Series and Differential Equations made M1 & M2 super easy!",
    rating: 5,
    tag: "Engineering Maths",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Priyanka M.",
    role: "NEET Top Scorer (580+ Marks)",
    college: "Govt Medical College Aspirant, Karur",
    quote: "The 35-day intensive NEET Crash Course was a total game changer. Daily chapter-wise mock tests and 1-on-1 doubt clearing gave me immense confidence in Physics & Chemistry.",
    rating: 5,
    tag: "NEET Crash Course",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Santhosh Kumar",
    role: "Class 12 CBSE Board (Centum 100/100)",
    college: "Chettinad Vidya Mandir, Karur",
    quote: "RK Academy provides the best individual attention in Karur. Sir explained complex Integration and Calculus step-by-step. I secured 100/100 in Class 12 Maths!",
    rating: 5,
    tag: "Class 12 CBSE",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-14 sm:py-20 bg-[#FAF4F0] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-300 text-slate-800 text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-3 shadow-sm">
            <Award className="w-4 h-4 text-slate-700" />
            <span>Student Success & Testimonials</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            Hear What Our Karur Students Say
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 font-normal">
            Over <strong className="text-slate-900 font-bold">1,000+ students</strong> have built strong conceptual foundations and achieved top ranks with RK Academy Karur.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 hover:border-[#5C2C1D] rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Badge & Rating */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-800 border border-slate-200 px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <Quote className="w-8 h-8 text-slate-400 mb-2 opacity-60" />
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic font-normal">
                  "{item.quote}"
                </p>
              </div>

              {/* Student Info */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border border-slate-200 shadow-sm"
                />
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-900">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-slate-600 font-medium">
                    {item.role}
                  </p>
                  <p className="text-[10px] text-slate-400">
                    {item.college}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Video Feedback Callout Box */}
        <div className="bg-[#381A12] rounded-2xl p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-[#E8D8CF] text-xs font-semibold uppercase tracking-wider">
              <Users className="w-4 h-4" />
              <span>Interactive Learning Experience</span>
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
              Want to see our classroom & teaching methods?
            </h3>
            <p className="text-slate-200 text-xs sm:text-sm max-w-xl">
              Visit RK Academy at RP Muthu Plaza, Karur for a free demo session or speak directly with our lead faculty.
            </p>
          </div>

          <a
            href="https://wa.me/919790570707?text=Hi%20RK%20Academy,%20I%20would%20like%20to%20attend%20a%20Free%20Demo%20Class."
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto min-h-[48px] bg-[#5C2C1D] hover:bg-[#4A2216] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md transition flex items-center justify-center gap-2 flex-shrink-0"
          >
            <Play className="w-4 h-4 fill-current text-white" />
            <span>Book Free Demo Class</span>
          </a>
        </div>

      </div>
    </section>
  );
}
