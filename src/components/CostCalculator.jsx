import React, { useState, useEffect } from 'react';
import { Calculator, Clock, Phone, AlertCircle, CheckCircle2, ChevronRight, Zap, ArrowDown } from 'lucide-react';

export default function CostCalculator({ onOpenCallModal, selectedIssue: propSelectedIssue, onSelectIssue }) {
  const [selectedIssue, setSelectedIssue] = useState(propSelectedIssue || 'furnace-out');

  useEffect(() => {
    if (propSelectedIssue && propSelectedIssue !== selectedIssue) {
      setSelectedIssue(propSelectedIssue);
    }
  }, [propSelectedIssue]);

  const handleSelectIssue = (key) => {
    setSelectedIssue(key);
    if (onSelectIssue) {
      onSelectIssue(key);
    }
  };

  const handleDesktopCallClick = (e) => {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024 && onOpenCallModal) {
      e.preventDefault();
      onOpenCallModal();
    }
  };

  const handleScrollToForm = (e) => {
    const target = document.getElementById('quote-form');
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const issues = {
    'furnace-out': {
      title: 'No Heat / Furnace Quit Working',
      estArrival: '30 - 45 Minutes',
      avgCost: '$120 - $350 (Common part repairs: Flame sensor, Igniter, Blower capacitor)',
      diagnosticNote: 'Diagnostic fee is 100% credited toward your repair.',
      severity: 'High Priority Emergency'
    },
    'ac-warm': {
      title: 'AC Blowing Warm Air / Frozen Coil',
      estArrival: '45 - 60 Minutes',
      avgCost: '$140 - $380 (Capacitor replacement, contactor, drain clearing)',
      diagnosticNote: 'Diagnostic fee is 100% credited toward your repair.',
      severity: 'High Priority Emergency'
    },
    'water-heater': {
      title: 'Water Heater Leaking / No Hot Water',
      estArrival: '1 - 2 Hours',
      avgCost: '$150 - $450 (Thermostat, thermocouple, pressure valve or tank flush)',
      diagnosticNote: 'Emergency shut-off advice provided immediately by phone.',
      severity: 'Urgent Dispatch'
    },
    'system-replace': {
      title: 'Complete New Heating / AC System Replacement',
      estArrival: 'Same-Week Installation',
      avgCost: 'From $79/mo (0% APR Financing)',
      rebateNote: 'Includes Up to $1,500 West Michigan Utility & Tax Rebates + Free Same-Day In-Home Estimate',
      diagnosticNote: '0% APR financing with low monthly payments.',
      severity: '0% APR Financing'
    },
    'annual-tuneup': {
      title: 'Seasonal Precision Tune-Up & Safety Audit',
      estArrival: 'Next Available Preferred Slot',
      avgCost: '$89 - $129 (Complete 21-point safety inspection & coil clean)',
      diagnosticNote: 'Prolongs equipment lifespan & lowers utility bills.',
      severity: 'Routine Maintenance'
    }
  };

  const current = issues[selectedIssue] || issues['furnace-out'];

  return (
    <section id="calculator" className="py-10 sm:py-14 bg-navy-900 text-white relative border-t border-navy-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-navy-800 border border-rescue-500/30 text-rescue-500 text-xs font-bold uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Instant Estimator & Dispatch Time</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white font-sans">
            How Fast Can We Arrive & What Will It Cost?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300">
            Select your situation below to see average response times and transparent cost expectations.
          </p>
        </div>

        <div className="bg-navy-950 rounded-3xl border border-navy-800 p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Selection Column (7 cols) */}
            <div className="lg:col-span-7 space-y-2.5">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Step 1: Select Your Current Mechanical Issue:
              </label>

              {Object.keys(issues).map((key) => {
                const item = issues[key];
                const isSelected = selectedIssue === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => handleSelectIssue(key)}
                    className={`w-full text-left p-3 sm:p-3.5 rounded-xl border transition-all duration-150 flex items-center justify-between group ${
                      isSelected
                        ? 'bg-navy-900 border-rescue-500 shadow-md shadow-rescue-500/10 ring-1 ring-rescue-500'
                        : 'bg-navy-900/40 border-navy-800 hover:border-slate-700 hover:bg-navy-900/80 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center ${
                        isSelected ? 'border-rescue-500 bg-rescue-500' : 'border-slate-600'
                      }`}>
                        {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                      </div>
                      <span className={`text-xs sm:text-sm font-bold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                        {item.title}
                      </span>
                    </div>

                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-rescue-500/20 text-rescue-400' : 'bg-navy-950 text-slate-500'
                    }`}>
                      {item.severity}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Output Card (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-b from-navy-900 to-navy-950 border border-navy-700/80 rounded-2xl p-5 sm:p-6 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-navy-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Estimated Arrival & Pricing
                </span>
                <span className="text-xs font-extrabold text-emerald-400 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>
                  Grand Rapids Area
                </span>
              </div>

              {/* Arrival Window */}
              <div className="my-4">
                <div className="text-xs text-slate-400 mb-0.5">Expected Response Time:</div>
                <div className="text-2xl sm:text-3xl font-black text-white flex items-center text-rescue-500">
                  <Clock className="w-5 h-5 mr-2 text-rescue-500" />
                  {current.estArrival}
                </div>
              </div>

              {/* Estimated Pricing with High-Ticket Anchor & Competitor Anchoring */}
              <div className="p-3.5 rounded-xl bg-navy-950 border border-navy-800 mb-4">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                  Typical Cost Range:
                </div>
                
                {selectedIssue === 'system-replace' ? (
                  <>
                    <div className="text-base sm:text-lg font-black text-emerald-400">
                      {current.avgCost}
                    </div>
                    <div className="mt-2 text-xs text-slate-200 flex items-start bg-emerald-950/50 p-2.5 rounded-lg border border-emerald-600/40">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-1.5 flex-shrink-0 mt-0.5" />
                      <span>{current.rebateNote}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-xs sm:text-sm font-semibold text-slate-200">
                      {current.avgCost}
                    </div>
                    <div className="mt-2 text-xs text-emerald-400 font-semibold flex items-center bg-emerald-950/40 p-2 rounded-lg border border-emerald-800/40">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-1.5 flex-shrink-0" />
                      <span>✔ $0 Overtime Charge (Competitors charge $199+ after-hours) • Service Fee Waived With Repair</span>
                    </div>
                    <div className="mt-1.5 text-xs text-slate-400 flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-slate-500 mr-1.5 flex-shrink-0" />
                      <span>{current.diagnosticNote}</span>
                    </div>
                  </>
                )}
              </div>

              {/* Action Call Now (Solid Rescue Orange, No glow) */}
              <a
                href="tel:6163094425"
                onClick={handleDesktopCallClick}
                className="w-full py-3 px-4 rounded-xl bg-rescue-500 hover:bg-rescue-600 active:bg-rescue-700 text-white font-black text-sm sm:text-base flex items-center justify-center shadow-md shadow-rescue-500/20 transition-all duration-150 active:scale-95"
              >
                <Phone className="w-4 h-4 mr-2 fill-white" />
                Dispatch Tech Now: (616) 309-4425
              </a>

              {/* State-Synced Scroll to Quote Form Button */}
              <a
                href="#quote-form"
                onClick={handleScrollToForm}
                className="w-full mt-2.5 py-2.5 px-4 rounded-xl bg-navy-800 hover:bg-navy-700 border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white font-bold text-xs sm:text-sm flex items-center justify-center transition active:scale-95 text-center group"
              >
                <span>Lock In Online Estimate / Request Dispatch</span>
                <ArrowDown className="w-3.5 h-3.5 ml-1.5 text-rescue-500 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <div className="text-center text-[11px] text-slate-400 mt-2">
                Live dispatcher on call • 100% upfront flat quotes
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
