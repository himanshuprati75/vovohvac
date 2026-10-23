import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Shield, Clock, Flame, Snowflake } from 'lucide-react';

export default function Header({ onOpenCallModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 4 Primary Navigation Links (Requirement 3)
  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Cost Calculator', href: '#calculator' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Service Areas', href: '#service-areas' },
  ];

  const handleDesktopCallClick = (e) => {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024 && onOpenCallModal) {
      e.preventDefault();
      onOpenCallModal();
    }
  };

  return (
    <>
      {/* Slim Mobile Trust Bar (< 640px) - Requirement 4 */}
      <div className="bg-navy-950 text-amber-300 text-[11px] font-bold py-1 px-3 border-b border-navy-800 text-center tracking-wide sm:hidden">
        🎖️ Veteran-Owned • MI Lic #7119047
      </div>

      {/* Desktop & Tablet Top Emergency Utility Bar (>= 640px) */}
      <div className="bg-navy-950 text-slate-300 text-xs py-1.5 px-4 border-b border-navy-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
              Emergency Dispatch Active Now in Grand Rapids & West MI
            </span>
            <span className="text-slate-500">|</span>
            <span className="flex items-center text-slate-300">
              <Shield className="w-3.5 h-3.5 text-rescue-500 mr-1" />
              MI Mechanical License #7119047
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-amber-400 font-semibold tracking-wide">🎖️ Proudly Veteran-Owned & Operated</span>
            <span className="text-slate-500">|</span>
            <a href="mailto:vovohvac@gmail.com" className="hover:text-white transition">
              dispatch@vovohvac.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Lifeline Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-navy-900/95 backdrop-blur-md shadow-xl py-3 border-b border-navy-800'
            : 'bg-navy-900 py-4 border-b border-navy-800/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo & Brand Identity */}
            <a href="#hero" className="flex items-center space-x-3 group text-left">
              <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-rescue-500 to-orange-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform flex-shrink-0">
                <div className="relative">
                  <Flame className="w-6 h-6 text-white drop-shadow" />
                  <Snowflake className="w-3.5 h-3.5 text-cyan-200 absolute -bottom-1 -right-1 drop-shadow" />
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-sans">
                    VOVO
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-navy-800 text-rescue-500 border border-rescue-500/30">
                    HVAC
                  </span>
                </div>
                <p className="text-[10px] sm:text-xs font-medium text-slate-400 tracking-wider uppercase">
                  Heating & Cooling • West MI
                </p>
              </div>
            </a>

            {/* Desktop Center Navigation TABS (4 Clean Links) */}
            <nav className="hidden lg:flex items-center space-x-1 bg-navy-950/60 p-1 rounded-full border border-navy-800/80">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white hover:bg-navy-800/80 rounded-full transition-all duration-150"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Right CTA: Solid Rescue Orange Call Button (No excessive glow) */}
            <div className="hidden sm:flex items-center space-x-3">
              <div className="text-right hidden xl:block">
                <span className="block text-[11px] font-bold uppercase text-emerald-400 flex items-center justify-end">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>
                  24/7 Live Operator
                </span>
                <span className="text-xs text-slate-400">Avg response: &lt; 45 mins</span>
              </div>

              <a
                href="tel:6163094425"
                onClick={handleDesktopCallClick}
                id="desktop-header-call-btn"
                className="relative inline-flex items-center justify-center px-5 sm:px-6 py-3 rounded-xl font-black text-sm sm:text-base text-white bg-rescue-500 hover:bg-rescue-600 active:scale-95 transition-all duration-150 shadow-md shadow-rescue-500/20 group"
              >
                <div className="p-1 rounded-full bg-white/20 mr-2.5 group-hover:rotate-12 transition-transform">
                  <Phone className="w-4 h-4 fill-white" />
                </div>
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

            {/* Mobile Header Actions (< 640px) */}
            <div className="flex items-center space-x-2 sm:hidden">
              {/* Clear Mobile Call Button with Bold 'CALL' text - Requirement 4 */}
              <a
                href="tel:6163094425"
                className="px-3 py-2 rounded-lg bg-rescue-500 hover:bg-rescue-600 active:bg-rescue-700 text-white shadow-md active:scale-95 transition flex items-center space-x-1.5"
                aria-label="Call Emergency Phone (616) 309-4425"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span className="text-xs font-black tracking-wider leading-none">CALL</span>
              </a>

              {/* Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-navy-800 text-slate-300 hover:text-white hover:bg-navy-700 transition focus:outline-none focus:ring-2 focus:ring-rescue-500"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Menu with 4 Primary Navigation Links */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-navy-950 border-b border-navy-800 px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
            <div className="p-3 bg-navy-900 rounded-lg border border-navy-800 mb-3">
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center text-emerald-400 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span>
                  24/7 Technicians On Duty
                </span>
                <span className="text-amber-400 font-medium">🎖️ Veteran-Owned</span>
              </div>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-semibold text-slate-200 hover:text-white hover:bg-navy-900 rounded-lg transition"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2">
              <a
                href="tel:6163094425"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center py-3.5 px-4 rounded-lg bg-rescue-500 hover:bg-rescue-600 text-white font-bold text-center shadow-lg transition active:scale-95"
              >
                <Phone className="w-5 h-5 mr-2 fill-current" />
                Call Now: (616) 309-4425
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
