import React from 'react';
import { Phone, Calendar, Clock, ShieldCheck, Star, Award, CheckCircle2, ChevronRight, Zap, Flame, Snowflake } from 'lucide-react';

export default function Hero({ onOpenCallModal }) {
  const handleDesktopCallClick = (e) => {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024 && onOpenCallModal) {
      e.preventDefault();
      onOpenCallModal();
    }
  };

  return (
    <section id="hero" className="relative bg-navy-950 overflow-hidden pt-4 pb-12 lg:py-16 text-white">
      {/* Background Image with Dark Vignette Gradient Overlay (No GPU-draining scaling animation - Requirement 6) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="VOVO Heating and Cooling technician and service vehicle"
          className="w-full h-full object-cover object-center opacity-30 sm:opacity-35"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/75"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,90,31,0.15),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Hook & CTAs (Left Column: 7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-left">
            
            {/* Live Dispatch Emergency Urgency Pill (Retained single functional ping - Requirement 6) */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-navy-900/90 border border-rescue-500/40 shadow-inner backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rescue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rescue-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-extrabold tracking-wide uppercase text-rescue-500">
                24/7 Emergency Dispatch Active
              </span>
              <span className="text-slate-400 text-xs hidden sm:inline">•</span>
              <span className="text-xs text-slate-300 font-medium hidden sm:inline">
                Grand Rapids & West Michigan
              </span>
            </div>

            {/* H1 Headline (Huge, Bold, Instantly Scannable) */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              Fast, Reliable <span className="text-transparent bg-clip-text bg-gradient-to-r from-rescue-500 via-orange-400 to-amber-300">Heating & Cooling</span> in Grand Rapids.
            </h1>

            {/* Neuro-Copy Subtitle: Direct Relief for Distressed Homeowners */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal">
              Furnace stopped running? AC blowing warm air? Water heater leaking? <strong className="text-white font-semibold">We arrive in 45 minutes or less.</strong> Upfront flat-rate pricing with <span className="text-emerald-400 font-bold">$0 surprise overtime fees</span>. Talk directly to a licensed technician now.
            </p>

            {/* DUAL CTA BUTTONS */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3.5 sm:gap-4">
              {/* Primary Call Now Action (Retains .btn-emergency-glow - Requirement 6) */}
              <a
                href="tel:6163094425"
                onClick={handleDesktopCallClick}
                id="hero-primary-call-cta"
                className="btn-emergency-glow flex items-center justify-center px-8 py-4 sm:py-4.5 rounded-xl bg-rescue-500 hover:bg-rescue-600 active:bg-rescue-700 text-white font-black text-lg sm:text-xl shadow-2xl shadow-rescue-500/40 transition-all duration-200 group active:scale-95"
              >
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform">
                  <Phone className="w-5 h-5 fill-white text-white" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] uppercase font-bold tracking-wider text-orange-100">
                    Call for Emergency Repair
                  </span>
                  <span className="text-xl sm:text-2xl font-black tracking-wide leading-none">
                    (616) 309-4425
                  </span>
                </div>
              </a>

              {/* Secondary Request Free Quote Action */}
              <a
                href="#quote-form"
                id="hero-secondary-quote-cta"
                className="flex items-center justify-center px-6 py-4 rounded-xl bg-navy-800/90 hover:bg-navy-700 border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white font-bold text-base transition-all duration-150 backdrop-blur-sm active:scale-95"
              >
                <Calendar className="w-5 h-5 text-amber-400 mr-2.5" />
                <span>Request a Free Quote</span>
              </a>
            </div>

            {/* Psychological Trust Micro-Checks */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-slate-300">
              <div className="flex items-center space-x-2 bg-navy-900/60 border border-navy-800 px-3 py-2 rounded-lg">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="font-semibold text-slate-200">⏱️ ~45-Min Arrival</span>
              </div>
              <div className="flex items-center space-x-2 bg-navy-900/60 border border-navy-800 px-3 py-2 rounded-lg">
                <Award className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="font-semibold text-slate-200">🎖️ Veteran-Owned</span>
              </div>
              <div className="flex items-center space-x-2 bg-navy-900/60 border border-navy-800 px-3 py-2 rounded-lg col-span-2 sm:col-span-1">
                <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="font-semibold text-slate-200">🛡️ Lic #7119047</span>
              </div>
            </div>

          </div>

          {/* Right Column: Live Status & Fast Diagnostic Card (Desktop/Tablet) */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="bg-navy-900/90 border border-navy-700/80 rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rescue-500/10 rounded-full blur-2xl pointer-events-none"></div>

              {/* Status Header (Subtle pulse dot instead of competing ping) */}
              <div className="flex items-center justify-between pb-4 border-b border-navy-800">
                <div className="flex items-center space-x-2.5">
                  <span className="relative flex h-3 w-3">
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 animate-pulse"></span>
                  </span>
                  <div>
                    <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                      Live Dispatch Board
                    </h2>
                    <p className="text-[11px] text-emerald-400 font-medium">Ready For Same-Day Repair</p>
                  </div>
                </div>
                <div className="flex items-center text-amber-400 bg-amber-400/10 px-2 py-1 rounded border border-amber-400/20 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400 mr-1" />
                  5.0 Rating
                </div>
              </div>

              {/* Quick Problem Selector / Urgency Funnel */}
              <div className="mt-5 space-y-3">
                <p className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                  Select Your Emergency To Dispatch Help:
                </p>

                <div className="space-y-2">
                  <a
                    href="tel:6163094425"
                    onClick={handleDesktopCallClick}
                    className="flex items-center justify-between p-3 rounded-xl bg-navy-950/80 hover:bg-navy-800 border border-navy-700 hover:border-rescue-500/60 transition group cursor-pointer"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-rescue-500">
                        <Flame className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-rescue-500 transition">
                          Furnace / No Heat Emergency
                        </div>
                        {/* High contrast text-slate-200 (Requirement 7) */}
                        <div className="text-xs text-slate-200 font-medium">Pilot out, blowing cold, strange noises</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-rescue-500 group-hover:translate-x-1 transition-transform flex items-center">
                      Call <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                    </span>
                  </a>

                  <a
                    href="tel:6163094425"
                    onClick={handleDesktopCallClick}
                    className="flex items-center justify-between p-3 rounded-xl bg-navy-950/80 hover:bg-navy-800 border border-navy-700 hover:border-cyan-500/60 transition group cursor-pointer"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                        <Snowflake className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-cyan-400 transition">
                          AC Breakdown / Leaking Water
                        </div>
                        {/* High contrast text-slate-200 (Requirement 7) */}
                        <div className="text-xs text-slate-200 font-medium">Frozen coils, no cooling, fan stopped</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-cyan-400 group-hover:translate-x-1 transition-transform flex items-center">
                      Call <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                    </span>
                  </a>

                  <a
                    href="tel:6163094425"
                    onClick={handleDesktopCallClick}
                    className="flex items-center justify-between p-3 rounded-xl bg-navy-950/80 hover:bg-navy-800 border border-navy-700 hover:border-emerald-500/60 transition group cursor-pointer"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition">
                          Water Heater / Gas / Duct Issues
                        </div>
                        {/* High contrast text-slate-200 (Requirement 7) */}
                        <div className="text-xs text-slate-200 font-medium">No hot water, odors, vent relocations</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-400 group-hover:translate-x-1 transition-transform flex items-center">
                      Call <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                    </span>
                  </a>
                </div>

                {/* Guarantee Banner inside card */}
                <div className="pt-3 border-t border-navy-800">
                  <div className="flex items-center justify-between text-xs text-slate-200">
                    <span className="flex items-center font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-1.5 flex-shrink-0" />
                      Diagnostic fee credited to repair
                    </span>
                    <span className="text-amber-400 font-bold">0% APR Financing</span>
                  </div>
                </div>

                {/* Direct Card Action */}
                <a
                  href="tel:6163094425"
                  onClick={handleDesktopCallClick}
                  className="w-full mt-3 flex items-center justify-center py-3 px-4 rounded-xl bg-rescue-500 hover:bg-rescue-600 text-white font-extrabold text-sm tracking-wide shadow-md shadow-rescue-500/20 transition active:scale-95"
                >
                  <Phone className="w-4 h-4 mr-2 fill-white" />
                  Connect With On-Call Tech: (616) 309-4425
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
