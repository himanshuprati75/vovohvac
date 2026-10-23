import React from 'react';
import { Phone, Mail, MapPin, Clock, Shield, Flame, Snowflake } from 'lucide-react';

export default function Footer({ onOpenCallModal }) {
  const handleDesktopCallClick = (e) => {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024 && onOpenCallModal) {
      e.preventDefault();
      onOpenCallModal();
    }
  };

  const allAreas = [
    'Grand Rapids', 'East Grand Rapids', 'Wyoming', 'Kentwood', 'Walker', 
    'Grandville', 'Rockford', 'Ada', 'Cascade', 'Forest Hills', 'Byron Center', 
    'Caledonia', 'Hudsonville', 'Jenison', 'Comstock Park', 'Sparta', 
    'Cedar Springs', 'Lowell', 'Allendale', 'Coopersville', 'Holland', 'Zeeland'
  ];

  const servicesList = [
    '24/7 Emergency Furnace Repair',
    'High-Efficiency Furnace Replacement',
    'Heat Pumps & Hybrid Systems',
    'Emergency AC Repair & Leak Fixes',
    'High SEER2 Air Conditioner Installation',
    'Ductless Mini-Split Heat Pumps',
    'Tankless & Traditional Water Heaters',
    'Custom Sheet Metal & Duct Balancing',
    'Grand Rapids Rental Mechanical Certifications',
    'Annual 21-Point HVAC Maintenance'
  ];

  return (
    <footer className="bg-navy-950 text-slate-300 pt-12 pb-24 sm:pb-14 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top NAP Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-navy-800">
          
          {/* Col 1: Business Identity & Bio */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-rescue-500 flex items-center justify-center">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-black text-white font-sans tracking-tight">
                  VOVO HVAC
                </span>
                <span className="block text-xs text-rescue-500 font-bold uppercase tracking-wider">
                  Heating & Cooling
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Veteran-owned and operated heating and air conditioning contractor serving residential homeowners and light commercial properties across Grand Rapids and West Michigan with 24/7 emergency dispatch.
            </p>

            <div className="pt-1">
              <div className="text-xs font-bold text-amber-400 mb-0.5">
                🎖️ Proudly Veteran-Owned
              </div>
              <div className="text-xs text-slate-400">
                MI Mechanical License #7119047
              </div>
            </div>
          </div>

          {/* Col 2: Core NAP (Name, Address, Phone, Hours) */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-navy-800 pb-2">
              Contact & Location (NAP)
            </h3>
            
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-rescue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">VOVO Heating and Cooling</strong><br />
                  Grand Rapids, MI 49503<br />
                  <span className="text-slate-400">Serving Kent & Ottawa Counties</span>
                </div>
              </div>

              <div className="flex items-center space-x-2.5 pt-1">
                <Phone className="w-4 h-4 text-rescue-500 flex-shrink-0" />
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">24/7 Emergency Line:</span>
                  <a
                    href="tel:6163094425"
                    onClick={handleDesktopCallClick}
                    className="text-sm font-black text-white hover:text-rescue-500 transition"
                  >
                    (616) 309-4425
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-2.5 pt-1">
                <Mail className="w-4 h-4 text-rescue-500 flex-shrink-0" />
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Direct Email:</span>
                  <a href="mailto:vovohvac@gmail.com" className="text-xs text-slate-300 hover:text-white transition">
                    dispatch@vovohvac.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-2.5 pt-1">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div className="text-[11px]">
                  <strong className="text-white">Operating Hours:</strong><br />
                  Mon – Fri: 8:00 AM – 5:00 PM<br />
                  <span className="text-emerald-400 font-bold">Emergency Dispatch: 24/7/365</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Services Offered */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-navy-800 pb-2 mb-3">
              HVAC Services
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {servicesList.slice(0, 6).map((srv, idx) => (
                <li key={idx} className="hover:text-white transition">
                  • {srv}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Rapid Dispatch Call Action (Solid Rescue Orange, No glow - Requirement 6) */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-navy-800 pb-2">
              Immediate Assistance
            </h3>

            <p className="text-xs text-slate-300">
              Freezing cold or suffocating heat? Speak with our live dispatcher right now. No automation menus.
            </p>

            <a
              href="tel:6163094425"
              onClick={handleDesktopCallClick}
              className="w-full flex items-center justify-center py-3.5 px-4 rounded-xl bg-rescue-500 hover:bg-rescue-600 active:bg-rescue-700 text-white font-extrabold text-sm shadow-md shadow-rescue-500/20 transition-all duration-150 active:scale-95"
            >
              <Phone className="w-4 h-4 mr-2 fill-white" />
              Call (616) 309-4425
            </a>

            <div className="text-[11px] text-slate-400 space-y-0.5">
              <div>✓ $0 Hidden Overtime Surcharges</div>
              <div>✓ Diagnostic credited to repair</div>
              <div>✓ 100% Satisfaction Guarantee</div>
            </div>
          </div>

        </div>

        {/* Core Service Areas SEO Block */}
        <div className="py-6 border-b border-navy-800 text-xs">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
            Grand Rapids & West Michigan Communities We Serve 24/7:
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {allAreas.map((area, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded bg-navy-900 border border-navy-800 text-[11px] text-slate-300"
              >
                {area}, MI
              </span>
            ))}
          </div>
        </div>

        {/* Copyright & Disclaimers */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            © {new Date().getFullYear()} VOVO Heating and Cooling. All Rights Reserved. Michigan Mechanical Contractor License #7119047.
          </div>
          <div className="flex space-x-4 text-slate-400">
            <a href="#services" className="hover:text-white transition">Services</a>
            <span>•</span>
            <a href="#calculator" className="hover:text-white transition">Cost Calculator</a>
            <span>•</span>
            <a href="#testimonials" className="hover:text-white transition">Reviews</a>
            <span>•</span>
            <a href="#service-areas" className="hover:text-white transition">Service Areas</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
