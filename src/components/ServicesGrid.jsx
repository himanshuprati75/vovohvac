import React, { useState } from 'react';
import { 
  Flame, Snowflake, Droplets, Wind, ClipboardCheck, Phone, CheckCircle, 
  ArrowRight, Shield, Zap, Sparkles, ChevronDown, ChevronUp 
} from 'lucide-react';

export default function ServicesGrid({ onOpenCallModal }) {
  const [activeTab, setActiveTab] = useState('all');
  const [isExpanded, setIsExpanded] = useState(false);

  // 4 Primary Categories (Hick's Law - Requirement 2)
  const categories = [
    { id: 'all', label: 'All Top Services', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'heating', label: 'Heating', icon: <Flame className="w-4 h-4 text-orange-500" /> },
    { id: 'cooling', label: 'Cooling', icon: <Snowflake className="w-4 h-4 text-cyan-500" /> },
    { id: 'water-air', label: 'Water & Air', icon: <Droplets className="w-4 h-4 text-blue-500" /> },
  ];

  const handleDesktopCallClick = (e) => {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024 && onOpenCallModal) {
      e.preventDefault();
      onOpenCallModal();
    }
  };

  const services = [
    // Top Service 1: Furnace Repair
    {
      id: 'furnace-repair',
      isTop: true,
      category: 'heating',
      title: '24/7 Emergency Furnace Repair',
      badge: 'Immediate Dispatch',
      badgeColor: 'bg-red-50 text-rescue-500 border-red-200',
      description: 'Zero heat during Michigan winter freezes? We arrive in 45 minutes with fully stocked trucks to diagnose igniters, blowers, sensors, and gas valves.',
      features: [
        'Diagnose all furnace brands & ages',
        'Flame sensors, igniters, & limit switches stocked',
        'Zero heat emergency priority dispatch',
        'Diagnostic fee credited toward repair'
      ],
      icon: <Flame className="w-6 h-6 text-rescue-500" />
    },
    // Top Service 2: AC Repair
    {
      id: 'ac-repair',
      isTop: true,
      category: 'cooling',
      title: '24/7 Emergency AC Repair',
      badge: 'Same-Day Cold Air',
      badgeColor: 'bg-cyan-50 text-cyan-600 border-cyan-200',
      description: 'AC blowing warm air, outdoor unit humming, or ice forming on coils? Our certified technicians restore icy comfort fast.',
      features: [
        'Capacitors, contactors, & fan motors in stock',
        'EPA-certified refrigerant leak detection & recharge',
        'Condensate drain line clearing & overflow safety',
        'Flat-rate pricing before work begins'
      ],
      icon: <Snowflake className="w-6 h-6 text-cyan-500" />
    },
    // Top Service 3: Water Heater Services
    {
      id: 'water-heater',
      isTop: true,
      category: 'water-air',
      title: 'Tankless & Tank Water Heaters',
      badge: 'Endless Hot Water',
      badgeColor: 'bg-blue-50 text-blue-600 border-blue-200',
      description: 'Never take a cold shower again. Professional installation and emergency repair for on-demand tankless and traditional gas/electric tanks.',
      features: [
        'Continuous endless hot water supply',
        'Same-day replacement for burst/leaking tanks',
        'Space-saving tankless wall installations',
        'Gas line and venting safety certification'
      ],
      icon: <Droplets className="w-6 h-6 text-blue-500" />
    },
    // Top Service 4: System Replacement
    {
      id: 'system-replacement',
      isTop: true,
      category: 'heating',
      title: 'High-Efficiency System Replacement',
      badge: 'Up to 98% AFUE',
      badgeColor: 'bg-orange-50 text-orange-600 border-orange-200',
      description: 'Upgrade your failing furnace or AC to an ultra-quiet modern system that slashes utility bills by up to 30%. Sized with precision Manual J calculations.',
      features: [
        'Daikin, Lennox, Goodman & Carrier models',
        '10-Year parts & labor warranty options',
        '0% APR financing available from $89/mo',
        'Rebate assistance with local MI utilities'
      ],
      icon: <Flame className="w-6 h-6 text-rescue-500" />
    },
    // Additional Service 5
    {
      id: 'heat-pumps',
      isTop: false,
      category: 'heating',
      title: 'Heat Pumps & Dual-Fuel Hybrid Systems',
      badge: 'Year-Round Comfort',
      badgeColor: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      description: 'Cut carbon footprint and heating costs with inverter heat pumps that seamlessly switch between electric heating and gas backup.',
      features: [
        'Cold-climate inverter operation down to -15°F',
        'Heats in winter & cools in summer',
        'Eligible for up to $2,000 Inflation Reduction Act tax credits',
        'Silent variable-speed technology'
      ],
      icon: <Zap className="w-6 h-6 text-emerald-500" />
    },
    // Additional Service 6
    {
      id: 'boilers',
      isTop: false,
      category: 'heating',
      title: 'Boiler Repair & Hydronic Heating',
      badge: 'Master Certified',
      badgeColor: 'bg-amber-50 text-amber-600 border-amber-200',
      description: 'Specialized diagnostic and repair services for residential hydronic baseboard, radiant in-floor, and radiator boiler systems across Grand Rapids.',
      features: [
        'Circulator pumps & zone valve diagnostics',
        'Expansion tank & pressure relief testing',
        'Air bleeding & system balancing',
        'Annual boiler safety check & tune-up'
      ],
      icon: <Flame className="w-6 h-6 text-amber-500" />
    },
    // Additional Service 7
    {
      id: 'ac-install',
      isTop: false,
      category: 'cooling',
      title: 'New AC Unit Installation',
      badge: 'High SEER2 Rated',
      badgeColor: 'bg-blue-50 text-blue-600 border-blue-200',
      description: 'Stop pouring money into an obsolete R-22 system. We calculate exact Manual J cooling loads so your new AC runs whisper-quiet and efficient.',
      features: [
        'Top-rated energy star cooling systems',
        'Exact load calculation to prevent short-cycling',
        'Free in-home replacement quote',
        'Complete removal & eco-friendly recycling of old unit'
      ],
      icon: <Snowflake className="w-6 h-6 text-blue-500" />
    },
    // Additional Service 8
    {
      id: 'mini-splits',
      isTop: false,
      category: 'cooling',
      title: 'Ductless Mini-Split Heat Pumps',
      badge: 'Zone Control',
      badgeColor: 'bg-purple-50 text-purple-600 border-purple-200',
      description: 'Perfect for homes without ductwork, master bedroom suites, three-season rooms, finished basements, and home additions.',
      features: [
        'Independent room temperature zones',
        'Ultra-efficient up to 28 SEER2 rating',
        'Wall, ceiling cassette, or floor mounts',
        'No invasive ductwork required'
      ],
      icon: <Snowflake className="w-6 h-6 text-purple-500" />
    },
    // Additional Service 9
    {
      id: 'tune-up',
      isTop: false,
      category: 'cooling',
      title: 'Annual Precision Tune-Up & Maintenance',
      badge: 'Prevents Breakdowns',
      badgeColor: 'bg-slate-100 text-slate-700 border-slate-300',
      description: '21-Point comprehensive diagnostic inspection that catches small part failures before they cause an expensive mid-summer breakdown.',
      features: [
        'Chemical condenser coil wash',
        'Electrical amp draw & safety check',
        'Thermostat calibration & airflow check',
        'Extended lifespan for your HVAC investment'
      ],
      icon: <Shield className="w-6 h-6 text-navy-800" />
    },
    // Additional Service 10
    {
      id: 'ductwork',
      isTop: false,
      category: 'water-air',
      title: 'Custom Sheet Metal & Duct Balancing',
      badge: 'Custom Fabrication',
      badgeColor: 'bg-teal-50 text-teal-600 border-teal-200',
      description: 'In-house sheet metal fabrication to design balanced duct transitions, plenums, and supply trunks tailored to your home layout.',
      features: [
        'Custom transitions, elbows, & dampers',
        'Fix uneven room temperatures & weak airflow',
        'Basement remodel duct routing',
        'Airtight mastic sealing to stop heat loss'
      ],
      icon: <Wind className="w-6 h-6 text-teal-500" />
    },
    // Additional Service 11
    {
      id: 'rental-inspections',
      isTop: false,
      category: 'water-air',
      title: 'City Rental Safety Certifications',
      badge: 'Landlord Certified',
      badgeColor: 'bg-purple-50 text-purple-600 border-purple-200',
      description: 'Complete mechanical safety audits required by the City of Grand Rapids and Kent County for rental property certification.',
      features: [
        'Combustion gas & carbon monoxide testing',
        'Heat exchanger integrity verification',
        'Clearance & safety shut-off checks',
        'Fast turnaround on municipal inspection reports'
      ],
      icon: <ClipboardCheck className="w-6 h-6 text-purple-600" />
    }
  ];

  // Filtering Logic with Hick's Law:
  // When activeTab === 'all', show only Top 4 services unless expanded!
  const displayedServices = activeTab === 'all'
    ? (isExpanded ? services : services.filter(s => s.isTop))
    : services.filter(s => s.category === activeTab);

  return (
    <section id="services" className="py-12 sm:py-16 bg-white text-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-rescue-500 text-xs font-bold uppercase tracking-wider mb-2.5">
            <span>Precision Mechanical Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-navy-950 font-sans">
            Everything We Do For You
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            From midnight furnace emergencies in freezing snow to whisper-quiet summer AC installations, VOVO HVAC delivers veteran-backed precision across West Michigan.
          </p>

          {/* 4 Primary Categorized Filter TABS */}
          <div className="mt-6 flex flex-wrap justify-center gap-2 p-1.5 bg-slate-100 rounded-2xl max-w-2xl mx-auto border border-slate-200">
            {categories.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveTab(tab.id);
                  if (tab.id !== 'all') setIsExpanded(false);
                }}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 ${
                  activeTab === tab.id
                    ? 'bg-navy-900 text-white shadow-md shadow-navy-950/20'
                    : 'text-slate-600 hover:text-navy-900 hover:bg-white/80'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Clean CSS Grid Showcase (Displays 4 cards by default, expands to all 11) */}
        <div
          id="services-grid-list"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {displayedServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-rescue-500/50 shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Line on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rescue-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {service.icon}
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${service.badgeColor}`}>
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-lg font-black text-navy-950 mb-2 group-hover:text-rescue-500 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Feature Bullet Points */}
                <div className="space-y-1.5 mb-5">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start text-xs text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 mr-1.5 mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Trigger Card Footer */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <a
                  href="tel:6163094425"
                  onClick={handleDesktopCallClick}
                  className="inline-flex items-center text-xs font-black uppercase tracking-wider text-rescue-500 hover:text-rescue-600 transition"
                >
                  <Phone className="w-3.5 h-3.5 mr-1 fill-current" />
                  Call: (616) 309-4425
                </a>
                <a
                  href="#quote-form"
                  className="inline-flex items-center text-xs font-bold text-slate-500 hover:text-navy-900 group-hover:translate-x-1 transition-all"
                >
                  Quote <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Hick's Law Toggle Button (Requirement 2) */}
        {activeTab === 'all' && (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              aria-expanded={isExpanded}
              aria-controls="services-grid-list"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-navy-900 bg-white hover:bg-navy-900 text-navy-950 hover:text-white font-extrabold text-sm transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 group"
            >
              {isExpanded ? (
                <>
                  <span>Show Top 4 Services</span>
                  <ChevronUp className="w-4 h-4 ml-2 group-hover:-translate-y-0.5 transition-transform" />
                </>
              ) : (
                <>
                  <span>View All 11 Services +</span>
                  <ChevronDown className="w-4 h-4 ml-2 group-hover:translate-y-0.5 transition-transform" />
                </>
              )}
            </button>
            <p className="text-xs text-slate-500 mt-2">
              {isExpanded ? 'Showing all 11 heating, cooling, water & air services' : 'Showing the 4 most requested emergency services'}
            </p>
          </div>
        )}

        {/* Emergency Call Box at bottom of services (Solid color, no excessive glow - Requirement 6) */}
        <div className="mt-12 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 rounded-2xl p-6 sm:p-8 border border-navy-800 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1.5">
            <span className="text-xs font-extrabold uppercase tracking-wider text-rescue-500 flex items-center">
              <span className="w-2 h-2 rounded-full bg-rescue-500 mr-2 animate-pulse"></span>
              Fast Diagnostic & Dispatch
            </span>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
              Don't See Your Specific HVAC Issue Listed?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              We diagnose and repair all makes, models, and custom mechanical layouts across Kent and Ottawa counties. Call right now to speak directly with an on-duty technician.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
            <a
              href="tel:6163094425"
              onClick={handleDesktopCallClick}
              className="px-6 py-3 rounded-xl bg-rescue-500 hover:bg-rescue-600 active:bg-rescue-700 text-white font-black text-sm sm:text-base flex items-center justify-center shadow-md shadow-rescue-500/20 transition-all duration-150 active:scale-95"
            >
              <Phone className="w-4 h-4 mr-2 fill-white" />
              Call Now: (616) 309-4425
            </a>
            <a
              href="#quote-form"
              className="px-5 py-3 rounded-xl bg-navy-800 hover:bg-navy-700 border border-slate-700 text-slate-200 font-bold text-sm sm:text-base flex items-center justify-center transition active:scale-95"
            >
              Online Quote
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
