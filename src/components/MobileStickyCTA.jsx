import React from 'react';
import { Phone, ShieldAlert, Zap } from 'lucide-react';

export default function MobileStickyCTA() {
  return (
    <aside 
      aria-label="Emergency Call Bar"
      className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-navy-950/95 backdrop-blur-md border-t border-navy-800 p-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))] shadow-2xl"
    >
      <div className="flex items-center gap-2">
        {/* Urgent Tap to Call Button */}
        <a
          href="tel:6163094425"
          id="mobile-bottom-call-button"
          className="flex-1 btn-emergency-glow flex items-center justify-center py-3.5 px-4 rounded-xl bg-rescue-500 hover:bg-rescue-600 active:bg-rescue-700 text-white font-black text-base shadow-lg shadow-rescue-500/40 transition active:scale-[0.98]"
        >
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-2.5 animate-pulse">
            <Phone className="w-4 h-4 fill-white" />
          </div>
          <div className="flex flex-col text-left leading-tight">
            <span className="text-[10px] uppercase font-bold tracking-wider text-orange-100 flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-white mr-1 animate-ping"></span>
              Emergency Dispatch • Tap To Call
            </span>
            <span className="text-base font-extrabold tracking-wide">
              (616) 309-4425
            </span>
          </div>
        </a>

        {/* Quick Quote Link */}
        <a
          href="#quote-form"
          className="px-3.5 py-3.5 rounded-xl bg-navy-800 hover:bg-navy-700 border border-navy-700 text-slate-200 text-xs font-bold flex flex-col items-center justify-center text-center active:scale-95 transition"
          aria-label="Request Quote"
        >
          <Zap className="w-4 h-4 text-amber-400 mb-0.5" />
          <span className="leading-none">Quote</span>
        </a>
      </div>
    </aside>
  );
}
