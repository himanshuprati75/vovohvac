import React from 'react';
import { ShieldCheck, Award, HeartHandshake, CheckCircle2, Phone, ArrowRight } from 'lucide-react';

export default function AboutUs({ onOpenCallModal }) {
  const brandPartners = [
    'DAIKIN', 'LENNOX', 'CARRIER', 'GOODMAN', 'BOSCH', 'MITSUBISHI'
  ];

  const handleDesktopCallClick = (e) => {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024 && onOpenCallModal) {
      e.preventDefault();
      onOpenCallModal();
    }
  };

  return (
    <section id="about" className="py-12 sm:py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Image with Authority Badges (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/tech-about.jpg"
                alt="Certified VOVO HVAC technician servicing modern heating system"
                className="w-full h-[360px] sm:h-[420px] object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
              
              {/* Bottom Image Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-navy-900/95 backdrop-blur-md p-3.5 rounded-xl border border-navy-700/80 text-white">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-rescue-500 flex items-center justify-center font-black text-base">
                    🎖️
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white">Veteran-Owned & Operated</h4>
                    <p className="text-xs text-slate-300">Grand Rapids, MI • License #7119047</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Top-Right Stat Card */}
            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-200 hidden sm:block">
              <div className="text-xl font-black text-navy-950 font-sans">&lt; 45 Mins</div>
              <div className="text-[11px] font-bold text-rescue-500 uppercase tracking-wide">
                Avg Dispatch Time
              </div>
            </div>
          </div>

          {/* Right Column: Company Story & Guarantees (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-navy-100 border border-navy-200 text-navy-900 text-xs font-bold uppercase tracking-wider">
              <span>Local Authority & Heritage</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-navy-950 font-sans leading-tight">
              Military Discipline. Honest Pricing. <span className="text-rescue-500">Zero Corporate Games.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              When your heat cuts out in zero-degree weather or your AC dies during a sticky West Michigan heatwave, you don’t have time for high-pressure commission salesmen or three-day delays. 
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              <strong>VOVO Heating and Cooling</strong> was built by a military veteran with a singular mission: treat every Grand Rapids homeowner with uncompromising honesty, rapid emergency response, and craftsman-level mechanical precision. When we give you a quote, that is what you pay—no surprise overtime charges, no unnecessary replacements, and no excuses.
            </p>

            {/* Core Commitments Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-white border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-navy-950">No High-Pressure Upsells</h4>
                  <p className="text-[11px] text-slate-500">We fix your system if it can be safely repaired.</p>
                </div>
              </div>

              <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-white border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-navy-950">Diagnostic Fee Credit</h4>
                  <p className="text-[11px] text-slate-500">100% credited toward your repair if you choose us.</p>
                </div>
              </div>

              <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-white border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-navy-950">Master Mechanical License</h4>
                  <p className="text-[11px] text-slate-500">State of MI Mechanical License #7119047.</p>
                </div>
              </div>

              <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-white border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-navy-950">0% APR Financing Available</h4>
                  <p className="text-[11px] text-slate-500">Flexible monthly plans through trusted lenders.</p>
                </div>
              </div>
            </div>

            {/* Brands Serviced */}
            <div className="pt-2 border-t border-slate-200">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                Authorized Service & Installation For Leading Brands:
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {brandPartners.map((brand, bIdx) => (
                  <span
                    key={bIdx}
                    className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[11px] font-extrabold tracking-wider text-slate-700"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Call to Action (Solid Rescue Orange, No glow - Requirement 6) */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center">
              <a
                href="tel:6163094425"
                onClick={handleDesktopCallClick}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-rescue-500 hover:bg-rescue-600 active:bg-rescue-700 text-white font-extrabold text-sm flex items-center justify-center shadow-md shadow-rescue-500/20 transition-all duration-150 active:scale-95"
              >
                <Phone className="w-4 h-4 mr-2 fill-white" />
                Call Directly: (616) 309-4425
              </a>
              <a
                href="#quote-form"
                className="text-xs sm:text-sm font-bold text-navy-900 hover:text-rescue-500 transition flex items-center"
              >
                Schedule Non-Emergency Visit <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
