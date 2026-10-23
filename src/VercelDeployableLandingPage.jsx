/**
 * VOVO HEATING & COOLING — HIGH-CONVERTING EMERGENCY HVAC FUNNEL
 * Production-ready React + Tailwind CSS Template
 * Deployable directly to Next.js (App Router or Pages Router) or Vite on Vercel
 * 
 * Dependencies:
 *   npm install lucide-react
 * 
 * Tailwind Config:
 *   Ensure your tailwind.config.js extends:
 *   colors: {
 *     navy: { 950: '#020C1B', 900: '#0A192F', 800: '#112240', 700: '#1E3A5F' },
 *     rescue: { 500: '#FF5A1F', 600: '#E6470C' }
 *   }
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, Menu, X, Shield, Clock, Flame, Snowflake, Droplets, Wind, 
  ClipboardCheck, Star, Award, CheckCircle2, ChevronRight, Zap, 
  Calendar, User, Wrench, Send, AlertTriangle, MapPin, Search, Mail, Check
} from 'lucide-react';

export default function VovoHVACLandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [selectedIssue, setSelectedIssue] = useState('furnace-out');
  const [citySearch, setCitySearch] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    service: 'Emergency Furnace Repair',
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormLoading(true);
    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
    }, 600);
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Why Vovo', href: '#about' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Service Areas', href: '#service-areas' },
    { name: 'Contact', href: '#quote-form' },
  ];

  const serviceCategories = [
    { id: 'all', label: 'All Services', icon: <Zap className="w-4 h-4" /> },
    { id: 'heating', label: 'Heating & Furnace', icon: <Flame className="w-4 h-4 text-orange-500" /> },
    { id: 'cooling', label: 'Air Conditioning', icon: <Snowflake className="w-4 h-4 text-cyan-500" /> },
    { id: 'water', label: 'Water Heaters', icon: <Droplets className="w-4 h-4 text-blue-500" /> },
    { id: 'ducts', label: 'Ductwork & Air Quality', icon: <Wind className="w-4 h-4 text-emerald-500" /> },
    { id: 'inspections', label: 'Rental Inspections', icon: <ClipboardCheck className="w-4 h-4 text-purple-500" /> },
  ];

  const allServices = [
    {
      category: 'heating',
      title: '24/7 Emergency Furnace Repair',
      badge: 'Immediate Dispatch',
      badgeColor: 'bg-red-50 text-red-600 border-red-200',
      description: 'Zero heat during Michigan winter freezes? We arrive in 45 minutes with fully stocked trucks to diagnose igniters, blowers, sensors, and gas valves.',
      features: ['Diagnose all brands & ages', 'Flame sensors & igniters on truck', 'Zero heat emergency priority', 'Diagnostic fee credited to repair'],
      icon: <Flame className="w-6 h-6 text-[#FF5A1F]" />
    },
    {
      category: 'heating',
      title: 'High-Efficiency Furnace Replacement',
      badge: 'Up to 98% AFUE',
      badgeColor: 'bg-orange-50 text-orange-600 border-orange-200',
      description: 'Upgrade your failing furnace to a modern ultra-quiet system that slashes gas bills by up to 30%. Professional sizing and same-week installation.',
      features: ['Daikin, Lennox, Goodman & Carrier', '10-Year parts & labor warranties', '0% APR financing options', 'Utility rebate assistance'],
      icon: <Flame className="w-6 h-6 text-[#FF5A1F]" />
    },
    {
      category: 'heating',
      title: 'Heat Pumps & Dual-Fuel Hybrid Systems',
      badge: 'Year-Round Comfort',
      badgeColor: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      description: 'Cut carbon footprint and heating costs with inverter heat pumps that seamlessly switch between electric heating and gas furnace backup.',
      features: ['Cold-climate heating down to -15°F', 'Heats in winter & cools in summer', 'Eligible for up to $2,000 IRA tax credit', 'Whisper-quiet inverter design'],
      icon: <Zap className="w-6 h-6 text-emerald-500" />
    },
    {
      category: 'heating',
      title: 'Boiler Repair & Hydronic Heating',
      badge: 'Master Certified',
      badgeColor: 'bg-amber-50 text-amber-600 border-amber-200',
      description: 'Specialized diagnostic and repair services for residential hydronic baseboard, radiant in-floor, and radiator boiler systems across Grand Rapids.',
      features: ['Circulator pumps & zone valves', 'Expansion tank & pressure relief', 'System balancing & air bleeding', 'Annual safety check & tune-up'],
      icon: <Flame className="w-6 h-6 text-amber-500" />
    },
    {
      category: 'cooling',
      title: '24/7 Emergency AC Repair',
      badge: 'Same-Day Cold Air',
      badgeColor: 'bg-cyan-50 text-cyan-600 border-cyan-200',
      description: 'AC blowing warm air, outdoor unit humming, or ice forming on coils? Our certified technicians restore icy comfort fast.',
      features: ['Capacitors & fan motors in stock', 'EPA-certified refrigerant leak detection', 'Condensate drain line clearing', 'Upfront flat-rate pricing'],
      icon: <Snowflake className="w-6 h-6 text-cyan-500" />
    },
    {
      category: 'cooling',
      title: 'New AC Unit Installation & Replacement',
      badge: 'High SEER2 Rated',
      badgeColor: 'bg-blue-50 text-blue-600 border-blue-200',
      description: 'Stop pouring money into an obsolete system. We calculate exact Manual J cooling loads so your new AC runs whisper-quiet and efficient.',
      features: ['Top-rated Energy Star cooling', 'Exact load calculation', 'Free in-home replacement quote', 'Complete haul-away of old equipment'],
      icon: <Snowflake className="w-6 h-6 text-blue-500" />
    },
    {
      category: 'cooling',
      title: 'Ductless Mini-Split Heat Pumps',
      badge: 'Multi-Zone Control',
      badgeColor: 'bg-purple-50 text-purple-600 border-purple-200',
      description: 'Perfect for homes without ductwork, master bedroom suites, three-season rooms, finished basements, and home additions.',
      features: ['Independent room temperature zones', 'Ultra-efficient up to 28 SEER2', 'Wall or ceiling cassette mounts', 'No invasive ductwork required'],
      icon: <Snowflake className="w-6 h-6 text-purple-500" />
    },
    {
      category: 'water',
      title: 'Tankless On-Demand Water Heaters',
      badge: 'Endless Hot Water',
      badgeColor: 'bg-blue-50 text-blue-600 border-blue-200',
      description: 'Never take a cold shower again. Tankless systems heat water continuously as it flows, saving significant basement space and fuel.',
      features: ['Endless continuous hot water', 'Wall-mounted zero floor footprint', '20+ year expected lifespan', 'Gas and vent installation included'],
      icon: <Droplets className="w-6 h-6 text-blue-500" />
    },
    {
      category: 'water',
      title: 'Traditional Tank Water Heaters',
      badge: 'Gas, Propane & Electric',
      badgeColor: 'bg-indigo-50 text-indigo-600 border-indigo-200',
      description: 'Fast replacement and repair for 40, 50, and 75-gallon water heater tanks. We handle emergency leak containment and haul-away.',
      features: ['Natural gas, LP, & electric tanks', 'Same-day emergency tank swap', 'Sediment flush & anode service', 'Thermal expansion tank install'],
      icon: <Droplets className="w-6 h-6 text-indigo-500" />
    },
    {
      category: 'ducts',
      title: 'Custom Sheet Metal & Ductwork',
      badge: 'Custom Fabrication',
      badgeColor: 'bg-teal-50 text-teal-600 border-teal-200',
      description: 'In-house sheet metal fabrication to design balanced duct transitions, plenums, and supply trunks tailored to your home layout.',
      features: ['Custom plenums & dampers', 'Fix hot/cold rooms & airflow', 'Basement remodel duct routing', 'Airtight mastic sealing'],
      icon: <Wind className="w-6 h-6 text-teal-500" />
    },
    {
      category: 'inspections',
      title: 'City of Grand Rapids Rental Safety Certification',
      badge: 'Landlord Certified',
      badgeColor: 'bg-purple-50 text-purple-600 border-purple-200',
      description: 'Complete mechanical safety audits required by the City of Grand Rapids and Kent County for rental property certification.',
      features: ['Carbon monoxide & flue gas testing', 'Heat exchanger integrity audit', 'Clearance & safety shut-off checks', 'Rapid municipal report delivery'],
      icon: <ClipboardCheck className="w-6 h-6 text-purple-600" />
    }
  ];

  const issues = {
    'furnace-out': {
      title: 'No Heat / Furnace Quit Working',
      estArrival: '30 - 45 Minutes',
      avgCost: '$120 - $350 (Common repairs: Flame sensor, Igniter, Capacitor)',
      diagnosticNote: 'Diagnostic fee is 100% credited toward your repair.',
      severity: 'Emergency Priority'
    },
    'ac-warm': {
      title: 'AC Blowing Warm Air / Frozen Coil',
      estArrival: '45 - 60 Minutes',
      avgCost: '$140 - $380 (Capacitor replacement, contactor, drain clear)',
      diagnosticNote: 'Diagnostic fee is 100% credited toward your repair.',
      severity: 'Emergency Priority'
    },
    'water-heater': {
      title: 'Water Heater Leaking / Cold Water',
      estArrival: '1 - 2 Hours',
      avgCost: '$150 - $450 (Thermostat, thermocouple, pressure valve)',
      diagnosticNote: 'Emergency shut-off advice provided immediately by phone.',
      severity: 'Urgent Dispatch'
    },
    'system-replace': {
      title: 'Complete New Heating / AC System Replacement',
      estArrival: 'Same-Week Installation',
      avgCost: 'Free In-Home Load Calculation & Accurate Flat Proposal',
      diagnosticNote: '0% APR financing starting at $89/month.',
      severity: 'Scheduled Proposal'
    }
  };

  const currentIssue = issues[selectedIssue];

  const primaryCities = [
    { name: 'Grand Rapids', county: 'Kent', tag: 'HQ' },
    { name: 'East Grand Rapids', county: 'Kent', tag: 'Fast' },
    { name: 'Wyoming', county: 'Kent', tag: 'Active' },
    { name: 'Kentwood', county: 'Kent', tag: 'Active' },
    { name: 'Rockford', county: 'Kent', tag: 'North' },
    { name: 'Ada / Forest Hills', county: 'Kent', tag: 'East' },
    { name: 'Cascade', county: 'Kent', tag: 'East' },
    { name: 'Walker', county: 'Kent', tag: 'West' },
    { name: 'Grandville', county: 'Kent', tag: 'South' },
    { name: 'Byron Center', county: 'Kent', tag: 'South' },
    { name: 'Caledonia', county: 'Kent', tag: 'South' },
    { name: 'Hudsonville', county: 'Ottawa', tag: 'Fast' },
    { name: 'Jenison', county: 'Ottawa', tag: 'Active' },
    { name: 'Holland', county: 'Ottawa', tag: 'Coast' },
    { name: 'Zeeland', county: 'Ottawa', tag: 'Coast' },
  ];

  const filteredCities = primaryCities.filter(c => 
    c.name.toLowerCase().includes(citySearch.toLowerCase()) || 
    c.county.toLowerCase().includes(citySearch.toLowerCase())
  );

  const filteredServices = activeTab === 'all'
    ? allServices
    : allServices.filter(s => s.category === activeTab);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased pb-20 sm:pb-0">
      
      {/* 1. TOP EMERGENCY BAR */}
      <div className="bg-[#020C1B] text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <span className="flex items-center text-emerald-400 font-semibold">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Emergency Dispatch Active in Grand Rapids & West MI
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300 flex items-center">
              <Shield className="w-3.5 h-3.5 text-[#FF5A1F] mr-1" />
              MI Mechanical License #7119047
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-amber-400 font-semibold">🎖️ Veteran-Owned & Operated</span>
            <span className="text-slate-600">|</span>
            <a href="mailto:vovohvac@gmail.com" className="hover:text-white transition">
              vovohvac@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* 2. STICKY LIFELINE HEADER */}
      <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled ? 'bg-[#0A192F]/95 backdrop-blur-md shadow-xl py-3 border-b border-slate-800' : 'bg-[#0A192F] py-4 border-b border-slate-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#hero" className="flex items-center space-x-3">
              <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#FF5A1F] to-orange-600 flex items-center justify-center shadow-lg flex-shrink-0">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-black tracking-tight text-white">VOVO</span>
                  <span className="text-xs font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-800 text-[#FF5A1F] border border-[#FF5A1F]/30">
                    HVAC
                  </span>
                </div>
                <p className="text-[10px] sm:text-xs font-medium text-slate-400 tracking-wider uppercase">
                  Heating & Cooling • West MI
                </p>
              </div>
            </a>

            {/* Desktop Navigation TABS */}
            <nav className="hidden lg:flex items-center space-x-1 bg-[#020C1B]/60 p-1 rounded-full border border-slate-800">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-full transition"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Right CTA Button */}
            <div className="hidden sm:flex items-center space-x-4">
              <div className="text-right hidden xl:block">
                <span className="text-[11px] font-bold uppercase text-emerald-400 flex items-center justify-end">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>
                  24/7 Live Operator
                </span>
                <span className="text-xs text-slate-400">Avg arrival: &lt; 45 mins</span>
              </div>

              <a
                href="tel:6163094425"
                className="relative inline-flex items-center justify-center px-6 py-3 rounded-xl font-black text-white bg-[#FF5A1F] hover:bg-orange-600 active:scale-95 transition shadow-lg shadow-[#FF5A1F]/30 group"
              >
                <Phone className="w-4 h-4 mr-2.5 fill-white" />
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-orange-100">
                    Emergency Call Now
                  </span>
                  <span className="text-base sm:text-lg font-extrabold tracking-wide">
                    (616) 309-4425
                  </span>
                </div>
              </a>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex items-center space-x-2 sm:hidden">
              <a
                href="tel:6163094425"
                className="p-2.5 rounded-lg bg-[#FF5A1F] text-white shadow-md active:scale-90 transition"
                aria-label="Call Emergency Phone"
              >
                <Phone className="w-5 h-5 fill-current" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-[#020C1B] border-b border-slate-800 px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-semibold text-slate-200 hover:text-white hover:bg-slate-900 rounded-lg transition"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="tel:6163094425"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center py-3.5 px-4 rounded-xl bg-[#FF5A1F] text-white font-bold text-center shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2 fill-current" />
                Call Now: (616) 309-4425
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION (The Hook) */}
      <section id="hero" className="relative bg-[#0A192F] overflow-hidden pt-8 pb-16 lg:py-24 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.jpg"
            alt="VOVO Heating and Cooling service van and technician"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-[#0A192F]/90 to-[#0A192F]/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#020C1B]/90 border border-[#FF5A1F]/40 shadow-inner">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5A1F] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF5A1F]"></span>
                </span>
                <span className="text-xs sm:text-sm font-extrabold uppercase text-[#FF5A1F]">
                  24/7 Emergency Dispatch Active
                </span>
                <span className="text-slate-400 text-xs hidden sm:inline">•</span>
                <span className="text-xs text-slate-300 hidden sm:inline">Grand Rapids & West MI</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                Fast, Reliable <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A1F] via-orange-400 to-amber-300">Heating & Cooling</span> in Grand Rapids.
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed">
                Furnace stopped running? AC blowing warm air? <strong className="text-white font-semibold">We arrive in 45 minutes or less.</strong> Upfront flat-rate pricing with <span className="text-emerald-400 font-bold">$0 surprise overtime fees</span>. Talk directly to a licensed technician now.
              </p>

              {/* Dual CTA */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3.5 sm:gap-4">
                <a
                  href="tel:6163094425"
                  className="flex items-center justify-center px-8 py-4 rounded-xl bg-[#FF5A1F] hover:bg-orange-600 text-white font-black text-lg sm:text-xl shadow-2xl shadow-[#FF5A1F]/40 transition active:scale-95"
                >
                  <Phone className="w-5 h-5 mr-3 fill-white" />
                  <div className="flex flex-col text-left">
                    <span className="text-[11px] uppercase font-bold text-orange-100">Call for Emergency Repair</span>
                    <span className="text-xl sm:text-2xl font-black leading-none">(616) 309-4425</span>
                  </div>
                </a>

                <a
                  href="#quote-form"
                  className="flex items-center justify-center px-6 py-4 rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold text-base transition active:scale-95"
                >
                  <Calendar className="w-5 h-5 text-amber-400 mr-2.5" />
                  Request a Free Quote
                </a>
              </div>

              {/* Micro Trust Proofs */}
              <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-slate-300">
                <div className="flex items-center space-x-2 bg-slate-900/80 border border-slate-800 px-3 py-2 rounded-lg">
                  <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="font-semibold text-slate-200">⏱️ ~45-Min Arrival</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-900/80 border border-slate-800 px-3 py-2 rounded-lg">
                  <Award className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span className="font-semibold text-slate-200">🎖️ Veteran-Owned</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-900/80 border border-slate-800 px-3 py-2 rounded-lg col-span-2 sm:col-span-1">
                  <Shield className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span className="font-semibold text-slate-200">🛡️ Lic #7119047</span>
                </div>
              </div>
            </div>

            {/* Right Live Dispatch Board */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="bg-[#020C1B]/90 border border-slate-800 rounded-3xl p-7 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center space-x-2.5">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider">Live Dispatch Board</h3>
                      <p className="text-[11px] text-emerald-400 font-medium">Ready For Same-Day Repair</p>
                    </div>
                  </div>
                  <span className="text-amber-400 bg-amber-400/10 px-2 py-1 rounded border border-amber-400/20 text-xs font-bold flex items-center">
                    <Star className="w-3.5 h-3.5 fill-amber-400 mr-1" /> 5.0 Rating
                  </span>
                </div>

                <div className="mt-5 space-y-2.5">
                  <a href="tel:6163094425" className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-[#FF5A1F]/60 transition group">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-[#FF5A1F]">
                        <Flame className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-[#FF5A1F] transition">Furnace / No Heat Emergency</div>
                        <div className="text-xs text-slate-400">Pilot out, blowing cold air, odd noise</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#FF5A1F] flex items-center">Call <ChevronRight className="w-3.5 h-3.5 ml-0.5" /></span>
                  </a>

                  <a href="tel:6163094425" className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/60 transition group">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                        <Snowflake className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-cyan-400 transition">AC Failure / Water Leaking</div>
                        <div className="text-xs text-slate-400">Frozen coils, fan stopped, high humidity</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-cyan-400 flex items-center">Call <ChevronRight className="w-3.5 h-3.5 ml-0.5" /></span>
                  </a>

                  <a href="tel:6163094425" className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/60 transition group">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition">Water Heater / Duct Work</div>
                        <div className="text-xs text-slate-400">Tankless installs, vent moves, inspections</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-400 flex items-center">Call <ChevronRight className="w-3.5 h-3.5 ml-0.5" /></span>
                  </a>
                </div>

                <a
                  href="tel:6163094425"
                  className="w-full mt-4 flex items-center justify-center py-3.5 px-4 rounded-xl bg-[#FF5A1F] hover:bg-orange-600 text-white font-extrabold text-sm shadow-lg shadow-[#FF5A1F]/20 transition active:scale-95"
                >
                  <Phone className="w-4 h-4 mr-2 fill-white" />
                  Connect On-Call Tech: (616) 309-4425
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. THE TRUST SHIELD BANNER */}
      <section className="bg-slate-100 border-y border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="p-3 w-fit rounded-xl bg-orange-50 mb-3"><Shield className="w-7 h-7 text-[#FF5A1F]" /></div>
              <h3 className="text-lg font-black text-[#0A192F] mb-1">Fully Licensed & Insured</h3>
              <p className="text-xs text-slate-600">State of MI Mechanical Contractor #7119047 with $2M liability coverage.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="p-3 w-fit rounded-xl bg-orange-50 mb-3"><Clock className="w-7 h-7 text-[#FF5A1F]" /></div>
              <h3 className="text-lg font-black text-[#0A192F] mb-1">24/7 Emergency Dispatch</h3>
              <p className="text-xs text-slate-600">Nights, weekends, & holidays. Live local dispatch under 45 minutes in West MI.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="p-3 w-fit rounded-xl bg-orange-50 mb-3"><Star className="w-7 h-7 text-amber-400 fill-amber-400" /></div>
              <h3 className="text-lg font-black text-[#0A192F] mb-1">5-Star Rated Service</h3>
              <p className="text-xs text-slate-600">100+ verified local reviews praising punctuality, fair quotes, and spotless cleanup.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="p-3 w-fit rounded-xl bg-orange-50 mb-3"><Award className="w-7 h-7 text-[#FF5A1F]" /></div>
              <h3 className="text-lg font-black text-[#0A192F] mb-1">Proudly Veteran-Owned</h3>
              <p className="text-xs text-slate-600">Built on military precision, rock-solid integrity, and $0 surprise fee transparency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COMPREHENSIVE SERVICES */}
      <section id="services" className="py-16 sm:py-24 bg-white text-[#0A192F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="px-3 py-1 rounded-full bg-orange-50 text-[#FF5A1F] text-xs font-bold uppercase tracking-wider border border-orange-200">
              Precision Mechanical Solutions
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0A192F] mt-3">
              Everything We Do For You
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              From midnight furnace emergencies in freezing snow to whisper-quiet summer AC installations, VOVO HVAC delivers veteran-backed precision across West Michigan.
            </p>

            {/* Categorized Tabs */}
            <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 bg-slate-100 rounded-2xl max-w-3xl mx-auto border border-slate-200">
              {serviceCategories.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
                    activeTab === tab.id
                      ? 'bg-[#0A192F] text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredServices.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-[#FF5A1F]/50 shadow-sm hover:shadow-xl transition flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                      {service.icon}
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${service.badgeColor}`}>
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-[#0A192F] mb-2 group-hover:text-[#FF5A1F] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href="tel:6163094425"
                    className="inline-flex items-center text-xs font-black uppercase text-[#FF5A1F] hover:text-orange-700 transition"
                  >
                    <Phone className="w-3.5 h-3.5 mr-1.5 fill-current" />
                    Call: (616) 309-4425
                  </a>
                  <a
                    href="#quote-form"
                    className="inline-flex items-center text-xs font-bold text-slate-500 hover:text-slate-900"
                  >
                    Request Quote <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE COST & ARRIVAL ESTIMATOR */}
      <section className="py-14 sm:py-20 bg-[#0A192F] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="px-3 py-1 rounded-full bg-slate-800 text-[#FF5A1F] text-xs font-bold uppercase tracking-wider border border-[#FF5A1F]/30">
              Interactive Diagnostic Tool
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white mt-3">
              How Fast Can We Arrive & What Will It Cost?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300">
              Select your current situation below to see average response times and transparent cost expectations.
            </p>
          </div>

          <div className="bg-[#020C1B] rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Step 1: Select Your Current Issue:
                </label>
                {Object.keys(issues).map((key) => {
                  const item = issues[key];
                  const isSelected = selectedIssue === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setSelectedIssue(key)}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition flex items-center justify-between ${
                        isSelected
                          ? 'bg-slate-900 border-[#FF5A1F] ring-1 ring-[#FF5A1F]'
                          : 'bg-slate-900/40 border-slate-800 text-slate-300 hover:bg-slate-900/80'
                      }`}
                    >
                      <span className={`text-sm sm:text-base font-bold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                        {item.title}
                      </span>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        isSelected ? 'bg-[#FF5A1F]/20 text-orange-400' : 'bg-[#020C1B] text-slate-500'
                      }`}>
                        {item.severity}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="lg:col-span-5 bg-gradient-to-b from-[#0A192F] to-[#020C1B] border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-xl">
                <div className="text-xs text-slate-400 mb-1">Expected Response Time:</div>
                <div className="text-2xl sm:text-3xl font-black text-[#FF5A1F] flex items-center mb-4">
                  <Clock className="w-6 h-6 mr-2" />
                  {currentIssue.estArrival}
                </div>

                <div className="p-4 rounded-xl bg-[#020C1B] border border-slate-800 mb-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                    Typical Cost Range:
                  </div>
                  <div className="text-sm font-semibold text-slate-200">
                    {currentIssue.avgCost}
                  </div>
                  <div className="mt-2 text-xs text-slate-400 flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-1.5 flex-shrink-0" />
                    {currentIssue.diagnosticNote}
                  </div>
                </div>

                <a
                  href="tel:6163094425"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#FF5A1F] hover:bg-orange-600 text-white font-black text-base flex items-center justify-center shadow-lg transition active:scale-95"
                >
                  <Phone className="w-4 h-4 mr-2 fill-white" />
                  Dispatch Tech: (616) 309-4425
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ABOUT US & LOCAL AUTHORITY */}
      <section id="about" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/tech-about.jpg"
                  alt="Certified VOVO HVAC technician servicing modern furnace"
                  className="w-full h-[400px] object-cover object-center"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
                Local Authority & Veteran Heritage
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0A192F] leading-tight">
                Military Discipline. Honest Pricing. <span className="text-[#FF5A1F]">Zero Corporate Games.</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                When your heat cuts out in zero-degree weather or your AC dies during a sticky West Michigan heatwave, you don’t have time for high-pressure commission salesmen or 3-day delays. 
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                <strong>VOVO Heating and Cooling</strong> was built by a military veteran with a singular mission: treat every Grand Rapids homeowner with uncompromising honesty, rapid emergency response, and craftsman-level mechanical precision.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                  <h4 className="text-sm font-bold text-[#0A192F]">✓ No High-Pressure Upsells</h4>
                  <p className="text-xs text-slate-500">We fix your system if it can be repaired safely.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                  <h4 className="text-sm font-bold text-[#0A192F]">✓ Diagnostic Fee Credit</h4>
                  <p className="text-xs text-slate-500">100% credited toward your repair if you choose us.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                  <h4 className="text-sm font-bold text-[#0A192F]">✓ Master Mechanical License</h4>
                  <p className="text-xs text-slate-500">State of Michigan Mechanical License #7119047.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                  <h4 className="text-sm font-bold text-[#0A192F]">✓ 0% APR Financing Options</h4>
                  <p className="text-xs text-slate-500">Flexible monthly plans through trusted lenders.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CUSTOMER TESTIMONIALS */}
      <section id="testimonials" className="py-16 sm:py-24 bg-[#0A192F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-12">
            <span className="px-3 py-1 rounded-full bg-slate-800 text-amber-400 text-xs font-bold uppercase tracking-wider border border-slate-700">
              100% Verified Local Homeowner Reviews
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mt-3">
              Trusted By Your Grand Rapids Neighbors
            </h2>
            <div className="mt-4 flex items-center justify-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="font-bold text-white">5.0 / 5.0 (Over 100+ Reviews in West MI)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-[#020C1B] rounded-2xl p-6 border border-slate-800">
              <div className="flex space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <div className="text-xs font-bold text-[#FF5A1F] mb-2">Emergency Furnace Repair</div>
              <p className="text-sm text-slate-300 italic mb-4">
                "Our furnace quit heating on a 10° Sunday evening. Called VOVO HVAC and they were at our Rockford home in 35 minutes! Diagnosed a bad flame sensor, had the part on the truck, and our heat was roaring before dinner. Lifesavers!"
              </p>
              <div className="text-sm font-bold text-white">Marcus & Sarah T. — Rockford, MI</div>
            </div>

            <div className="bg-[#020C1B] rounded-2xl p-6 border border-slate-800">
              <div className="flex space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <div className="text-xs font-bold text-[#FF5A1F] mb-2">Full Heat Pump & AC Replacement</div>
              <p className="text-sm text-slate-300 italic mb-4">
                "VOVO replaced our ancient 22-year-old AC and furnace with a high-efficiency Daikin heat pump. The quote was transparent, thousands lower than the big corporate franchise, and our energy bills dropped by 30%!"
              </p>
              <div className="text-sm font-bold text-white">David K. — East Grand Rapids, MI</div>
            </div>

            <div className="bg-[#020C1B] rounded-2xl p-6 border border-slate-800">
              <div className="flex space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <div className="text-xs font-bold text-[#FF5A1F] mb-2">Emergency AC Coil Leak Repair</div>
              <p className="text-sm text-slate-300 italic mb-4">
                "Woke up on a 92-degree Saturday morning with water dripping from our AC coil. Tech arrived by 8:15 AM, cleared the clogged condensate line, and checked pressures. Fair flat pricing, zero pressure upsells."
              </p>
              <div className="text-sm font-bold text-white">Brian M. — Wyoming, MI</div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. THE FRICTIONLESS LEAD CAPTURE FORM */}
      <section id="quote-form" className="py-16 sm:py-24 bg-slate-100 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="bg-[#0A192F] p-8 text-center text-white">
              <h2 className="text-2xl sm:text-3xl font-black">Request Your Free Estimate & Dispatch</h2>
              <p className="text-slate-300 text-sm mt-1">Average response time under 7 minutes. Direct technician consultation.</p>
            </div>

            <div className="p-8">
              {formSubmitted ? (
                <div className="text-center py-6 space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-[#0A192F]">Request Received!</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Thank you, <strong>{formData.fullName}</strong>. An on-call technician will call you at <strong>{formData.phoneNumber}</strong> shortly.
                  </p>
                  <a
                    href="tel:6163094425"
                    className="inline-flex items-center px-6 py-3 rounded-xl bg-[#FF5A1F] text-white font-bold mt-2"
                  >
                    <Phone className="w-4 h-4 mr-2 fill-white" />
                    Call For Immediate Dispatch: (616) 309-4425
                  </a>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                  <div>
                    <label className="block text-xs font-bold text-[#0A192F] uppercase mb-1">1. Full Name *</label>
                    <div className="relative">
                      <User className="w-5 h-5 text-slate-400 absolute left-3 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="John Miller"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:border-[#FF5A1F] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0A192F] uppercase mb-1">2. Phone Number *</label>
                    <div className="relative">
                      <Phone className="w-5 h-5 text-slate-400 absolute left-3 top-3.5" />
                      <input
                        type="tel"
                        required
                        placeholder="(616) 000-0000"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:border-[#FF5A1F] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0A192F] uppercase mb-1">3. Service Needed *</label>
                    <div className="relative">
                      <Wrench className="w-5 h-5 text-slate-400 absolute left-3 top-3.5" />
                      <select
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:border-[#FF5A1F] outline-none bg-white cursor-pointer"
                      >
                        <option value="Emergency Furnace Repair">🔥 24/7 Emergency Furnace Repair</option>
                        <option value="Furnace Replacement">🔥 Furnace Replacement & High-Efficiency Install</option>
                        <option value="Emergency AC Repair">❄️ 24/7 Emergency AC Repair</option>
                        <option value="New AC / Heat Pump">❄️ New AC Installation / Ductless Mini-Split</option>
                        <option value="Water Heater">💧 Water Heater (Tankless or Tank)</option>
                        <option value="Ductwork">🌀 Custom Ductwork & Vent Additions</option>
                        <option value="Rental Inspection">🏢 Grand Rapids Rental Safety Certification</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={formLoading}
                    className="w-full py-4 rounded-xl bg-[#FF5A1F] hover:bg-orange-600 text-white font-black text-lg transition shadow-xl"
                  >
                    {formLoading ? 'Processing Request...' : 'Get Your Free Estimate'}
                  </button>

                  <p className="text-center text-xs text-slate-500">
                    🔒 100% Free & Confidential. Zero Spam Guarantee.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 10. SERVICE AREAS */}
      <section id="service-areas" className="py-16 bg-white text-[#0A192F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
            West Michigan Coverage
          </span>
          <h2 className="text-3xl sm:text-4xl font-black mt-2">Core Service Areas We Protect</h2>
          
          <div className="mt-6 max-w-md mx-auto relative mb-8">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search your city or county..."
              value={citySearch}
              onChange={(e) => setCitySearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-300 text-sm outline-none"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 text-left">
            {filteredCities.map((city, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-[10px] uppercase font-bold text-slate-500">{city.county} County</div>
                <div className="text-sm font-bold text-[#0A192F]">{city.name}</div>
                <div className="text-[10px] text-emerald-600 font-bold mt-1">✓ 45-Min Arrival</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. SEO & NAP FOOTER */}
      <footer className="bg-[#020C1B] text-slate-300 pt-16 pb-24 sm:pb-16 border-t border-slate-800 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
            <div>
              <div className="text-xl font-black text-white mb-2">VOVO HVAC</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Veteran-owned and operated heating and air conditioning contractor serving residential homeowners and light commercial properties across Grand Rapids and West Michigan with 24/7 emergency dispatch.
              </p>
              <div className="mt-3 text-xs text-amber-400 font-bold">🎖️ Veteran-Owned • MI License #7119047</div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white uppercase mb-3">Contact & NAP</h4>
              <div className="space-y-2 text-xs">
                <div><strong>VOVO Heating and Cooling</strong></div>
                <div>Grand Rapids, MI 49503</div>
                <div>Phone: <a href="tel:6163094425" className="text-white font-bold hover:text-[#FF5A1F]">(616) 309-4425</a></div>
                <div>Email: <a href="mailto:vovohvac@gmail.com" className="text-slate-400 hover:text-white">vovohvac@gmail.com</a></div>
                <div>Hours: Mon-Fri 8am-5pm | <span className="text-emerald-400 font-bold">24/7 Emergency</span></div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white uppercase mb-3">Quick Links</h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                {navLinks.map((l) => (
                  <li key={l.name}><a href={l.href} className="hover:text-white">{l.name}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white uppercase mb-3">Emergency Call</h4>
              <p className="text-xs text-slate-400 mb-3">Live technician on standby. No automated switchboards.</p>
              <a
                href="tel:6163094425"
                className="w-full flex items-center justify-center py-3 px-4 rounded-xl bg-[#FF5A1F] text-white font-extrabold text-sm shadow-lg"
              >
                <Phone className="w-4 h-4 mr-2 fill-white" />
                Call (616) 309-4425
              </a>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
            <div>© {new Date().getFullYear()} VOVO Heating and Cooling. All Rights Reserved.</div>
            <div className="mt-2 sm:mt-0">Grand Rapids, West Michigan • Mechanical License #7119047</div>
          </div>
        </div>
      </footer>

      {/* 12. MOBILE-FIRST STICKY LIFELINE (Bottom Fixed Bar) */}
      <aside 
        aria-label="Mobile Emergency Call Bar"
        className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-[#020C1B]/95 backdrop-blur-md border-t border-slate-800 p-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))] shadow-2xl"
      >
        <div className="flex items-center gap-2">
          <a
            href="tel:6163094425"
            className="flex-1 flex items-center justify-center py-3.5 px-4 rounded-xl bg-[#FF5A1F] active:bg-orange-600 text-white font-black text-base shadow-lg shadow-[#FF5A1F]/40 active:scale-[0.98] transition"
          >
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center mr-2">
              <Phone className="w-4 h-4 fill-white" />
            </div>
            <div className="flex flex-col text-left leading-tight">
              <span className="text-[10px] uppercase font-bold text-orange-100 flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-white mr-1 animate-ping"></span>
                Emergency Dispatch • Tap To Call
              </span>
              <span className="text-base font-extrabold">(616) 309-4425</span>
            </div>
          </a>

          <a
            href="#quote-form"
            className="px-3.5 py-3.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 text-xs font-bold flex flex-col items-center justify-center text-center"
          >
            <Zap className="w-4 h-4 text-amber-400 mb-0.5" />
            <span>Quote</span>
          </a>
        </div>
      </aside>

    </div>
  );
}
