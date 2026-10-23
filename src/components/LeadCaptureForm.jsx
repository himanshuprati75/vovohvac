import React, { useState, useEffect } from 'react';
import { Phone, User, Wrench, Shield, CheckCircle, Clock, Send, AlertTriangle, Tag } from 'lucide-react';

export default function LeadCaptureForm({ onOpenCallModal, selectedServiceKey }) {
  const issueToServiceMap = {
    'furnace-out': 'Emergency Furnace Repair',
    'ac-warm': 'Emergency AC Repair',
    'water-heater': 'Water Heater Repair or Replacement',
    'system-replace': 'Furnace Replacement / Installation',
    'annual-tuneup': 'Annual HVAC Tune-Up / Maintenance'
  };

  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    service: 'Emergency Furnace Repair',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Sync with CostCalculator selection
  useEffect(() => {
    if (selectedServiceKey && issueToServiceMap[selectedServiceKey]) {
      setFormData((prev) => ({
        ...prev,
        service: issueToServiceMap[selectedServiceKey]
      }));
    }
  }, [selectedServiceKey]);

  const handleDesktopCallClick = (e) => {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024 && onOpenCallModal) {
      e.preventDefault();
      onOpenCallModal();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate instantaneous dispatch processing
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="quote-form" className="py-10 sm:py-14 bg-slate-100 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden">
          
          {/* Form Header Banner */}
          <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 p-6 sm:p-8 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-rescue-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-navy-800 border border-rescue-500/30 text-rescue-500 text-xs font-bold uppercase tracking-wider mb-2.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Average Response Time: Under 7 Minutes</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white font-sans">
              Request Your Free Fast Quote & Dispatch
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              No pushy sales reps. Just fast, transparent answers and flat-rate pricing directly from certified technicians.
            </p>
          </div>

          <div className="p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-6 space-y-3.5 animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-black text-navy-950">
                  Request Received! We're On It.
                </h3>
                
                <p className="text-slate-600 max-w-md mx-auto text-xs sm:text-sm">
                  Thank you, <strong>{formData.fullName}</strong>. An on-call technician has been notified and will call you at <strong>{formData.phoneNumber}</strong> within a few minutes.
                </p>

                <div className="p-3.5 rounded-xl bg-orange-50 border border-rescue-200 max-w-md mx-auto text-left mt-4">
                  <div className="flex items-start space-x-2.5">
                    <AlertTriangle className="w-4 h-4 text-rescue-500 flex-shrink-0 mt-0.5" />
                    <div className="text-xs text-slate-700">
                      <strong>Is this an active emergency?</strong> Call our live dispatch line directly for immediate response.
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="tel:6163094425"
                    onClick={handleDesktopCallClick}
                    className="inline-flex items-center px-6 py-3 rounded-xl bg-rescue-500 hover:bg-rescue-600 active:bg-rescue-700 text-white font-black text-sm sm:text-base shadow-md shadow-rescue-500/20 transition-all duration-150 active:scale-95"
                  >
                    <Phone className="w-4 h-4 mr-2 fill-white" />
                    Call Now: (616) 309-4425
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="block mx-auto text-xs font-semibold text-slate-400 hover:text-slate-600 mt-3 underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Auto-Applied Instant Web Voucher Pill (Requirement 3A) */}
                <div className="bg-emerald-50 border-2 border-dashed border-emerald-500 rounded-xl p-3 sm:p-3.5 flex items-center justify-between shadow-sm">
                  <div className="flex items-center space-x-2.5 min-w-0">
                    <span className="text-lg sm:text-xl flex-shrink-0" role="img" aria-label="voucher">🎟️</span>
                    <div className="text-xs sm:text-sm font-black text-emerald-950 leading-tight">
                      <span>WEB DISPATCH VOUCHER APPLIED: </span>
                      <span className="text-emerald-700 underline font-black">$50 OFF Any Emergency Repair</span>
                      <span className="text-emerald-900 font-extrabold"> + $0 Overtime Fee Locked In</span>
                    </div>
                  </div>
                  <span className="ml-2 flex-shrink-0 px-2 py-0.5 rounded-md bg-emerald-600 text-white font-black text-[10px] sm:text-xs tracking-wider uppercase shadow-sm">
                    ACTIVE TODAY
                  </span>
                </div>

                {/* Field 1: Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold text-navy-950 mb-1 uppercase tracking-wide">
                    1. Your Full Name <span className="text-rescue-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      required
                      placeholder="e.g. John Miller"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:border-rescue-500 focus:ring-1 focus:ring-rescue-500 text-slate-900 placeholder:text-slate-400 text-sm font-medium transition shadow-sm outline-none"
                    />
                  </div>
                </div>

                {/* Field 2: Phone Number */}
                <div>
                  <label htmlFor="phoneNumber" className="block text-xs font-bold text-navy-950 mb-1 uppercase tracking-wide">
                    2. Phone Number <span className="text-rescue-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      id="phoneNumber"
                      required
                      placeholder="(616) 000-0000"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:border-rescue-500 focus:ring-1 focus:ring-rescue-500 text-slate-900 placeholder:text-slate-400 text-sm font-medium transition shadow-sm outline-none"
                    />
                  </div>
                </div>

                {/* Field 3: Service Selection Dropdown */}
                <div>
                  <label htmlFor="service" className="block text-xs font-bold text-navy-950 mb-1 uppercase tracking-wide">
                    3. Select Service Needed <span className="text-rescue-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Wrench className="w-4 h-4" />
                    </div>
                    <select
                      id="service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:border-rescue-500 focus:ring-1 focus:ring-rescue-500 text-slate-900 text-sm font-medium transition shadow-sm outline-none bg-white cursor-pointer"
                    >
                      <option value="Emergency Furnace Repair">🔥 24/7 Emergency Furnace Repair (No Heat)</option>
                      <option value="Furnace Replacement / Installation">🔥 Furnace Replacement & High-Efficiency Install</option>
                      <option value="Emergency AC Repair">❄️ 24/7 Emergency AC Repair (Not Cooling)</option>
                      <option value="New AC Installation / Heat Pump">❄️ New AC Installation / Ductless Mini-Split</option>
                      <option value="Water Heater Repair or Replacement">💧 Water Heater (Tankless or Traditional Tank)</option>
                      <option value="Custom Ductwork / Vent Additions">🌀 Custom Sheet Metal, Duct Repair or Vent Additions</option>
                      <option value="Grand Rapids Rental Safety Inspection">🏢 Rental Mechanical Safety Inspection (City Compliance)</option>
                      <option value="Annual HVAC Tune-Up / Maintenance">🛡️ Seasonal Precision Tune-Up & Maintenance</option>
                      <option value="Other HVAC Service">🔧 Other HVAC Issue / Consultation</option>
                    </select>
                  </div>
                </div>

                {/* Submit Action Button (Solid Rescue Orange, No glow) */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    id="quote-form-submit-btn"
                    className="w-full py-3.5 px-6 rounded-xl bg-rescue-500 hover:bg-rescue-600 active:bg-rescue-700 text-white font-black text-base sm:text-lg shadow-md shadow-rescue-500/20 transition-all duration-150 flex items-center justify-center group active:scale-95 disabled:opacity-75"
                  >
                    {loading ? (
                      <span className="flex items-center">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                        Dispatching Tech Notification...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <span>Get Your Free Estimate</span>
                        <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </button>
                </div>

                {/* Privacy & Anti-Spam Guarantee */}
                <div className="flex items-center justify-center space-x-1.5 text-xs text-slate-500 pt-1">
                  <Shield className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>🔒 We respect your privacy. No spam guarantee. Zero commitment.</span>
                </div>

                {/* Micro-Social Proof (Requirement 3B) */}
                <div className="text-center text-xs text-slate-600 font-semibold pt-1 flex items-center justify-center space-x-1">
                  <span>⭐⭐⭐⭐⭐ 5.0 Rated Across Kent & Ottawa Counties • Avg Tech Callback: 4 Mins</span>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
