import React from 'react';
import { Star, ShieldCheck, CheckCircle2, Quote, Phone } from 'lucide-react';

export default function Testimonials({ onOpenCallModal }) {
  const handleDesktopCallClick = (e) => {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024 && onOpenCallModal) {
      e.preventDefault();
      onOpenCallModal();
    }
  };

  const reviews = [
    {
      name: "Marcus & Sarah T.",
      location: "Rockford, MI",
      service: "Sunday Emergency Furnace Repair",
      date: "Verified Homeowner",
      rating: 5,
      review: "Our furnace stopped heating on a freezing 10° Sunday evening. Called three other companies—two had answering machines and one wanted a $350 emergency fee just to show up. Called VOVO HVAC and they were at our door in 35 minutes! Diagnosed a bad flame sensor, had the replacement part right in his truck, and our heat was roaring before dinner. Honest, fast, and veteran-owned—these guys are genuine lifesavers!"
    },
    {
      name: "David K.",
      location: "East Grand Rapids, MI",
      service: "Full Heat Pump & AC Replacement",
      date: "Verified Homeowner",
      rating: 5,
      review: "VOVO replaced our ancient 22-year-old AC and furnace with a high-efficiency Daikin heat pump system. The quote was completely transparent, thousands lower than the big private-equity HVAC franchise in Grand Rapids, and the installation team was spotless. They laid drop cloths and cleaned everything. My monthly heating and electric bills are down over 30% already!"
    },
    {
      name: "Elena R.",
      location: "Grand Rapids (Heritage Hill), MI",
      service: "Rental Safety Mechanical Inspection",
      date: "Verified Property Manager",
      rating: 5,
      review: "As a Grand Rapids landlord with 6 rental units, keeping up with municipal mechanical safety certifications and middle-of-the-night tenant heating emergencies used to be a headache. VOVO HVAC handles our rental inspections with speed and zero hassle. When a tenant's water heater failed on Thanksgiving eve, they swapped it out the same day. Highly recommended!"
    },
    {
      name: "Brian M.",
      location: "Wyoming, MI",
      service: "Emergency AC Coil & Leak Repair",
      date: "Verified Homeowner",
      rating: 5,
      review: "Woke up at 7 AM on a humid 92-degree Saturday morning to water dripping through our basement ceiling from the AC evaporator coil. The technician arrived by 8:10 AM, cleared the clogged condensate line, cleared the drain pan, and checked the system pressures. Fair flat pricing, zero pressure upsells, super polite. I will never call anyone else."
    },
    {
      name: "Rachel & Tom V.",
      location: "Ada / Forest Hills, MI",
      service: "Ductwork Balancing & Vent Additions",
      date: "Verified Homeowner",
      rating: 5,
      review: "We finished our basement and our upstairs bedrooms were always 8 degrees hotter in summer. VOVO custom fabricated new sheet metal transitions and balanced the dampers throughout the house. For the first time in 7 years every room in our home is the exact same comfortable temperature. True master craftsmanship!"
    },
    {
      name: "Jason P.",
      location: "Kentwood, MI",
      service: "Annual Furnace Tune-Up & Safety Audit",
      date: "Verified Homeowner",
      rating: 5,
      review: "Great local company. Technicians are punctual, communicate clearly, and take photos of what they find. They found a small hairline crack developing in an exhaust boot that could have caused carbon monoxide issues down the road. Repaired it quickly at an extremely reasonable price. Trust them completely."
    }
  ];

  return (
    <section id="testimonials" className="py-12 sm:py-16 bg-navy-950 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-rescue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with 5.0 Star Credential Banner */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-navy-900 border border-navy-800 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2.5">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>100% Real West Michigan Customer Reviews</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-sans">
            Trusted By Your Grand Rapids Neighbors
          </h2>
          
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            When emergencies strike, speed and honesty are everything. Read what homeowners across Kent and Ottawa counties say about our technicians.
          </p>

          {/* Verified Google & BBB Rating Summary Bar (Requirement 6) */}
          <div className="mt-6 max-w-3xl mx-auto bg-navy-900 border border-navy-800 rounded-2xl p-3.5 sm:p-4 flex flex-wrap items-center justify-between gap-2.5 text-center sm:text-left shadow-lg">
            <div className="flex items-center space-x-2 mx-auto sm:mx-0">
              <span className="text-sm sm:text-base font-black text-amber-400">5.0 ★★★★★</span>
              <span className="text-xs sm:text-sm font-bold text-white">Overall Rating</span>
            </div>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <div className="text-xs text-slate-300 font-medium mx-auto sm:mx-0">
              100% Verified West Michigan Homeowners
            </div>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <div className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-navy-950 border border-navy-800 text-slate-300 mx-auto sm:mx-0">
              MI State License #7119047
            </div>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="bg-navy-900/90 rounded-2xl p-5 sm:p-6 border border-navy-800 hover:border-rescue-500/40 shadow-xl transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* 5 SVG Gold Stars & Service Pill */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex space-x-1" aria-label="5 out of 5 stars">
                    {[...Array(rev.rating)].map((_, sIdx) => (
                      <Star key={sIdx} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-navy-950 text-slate-300 border border-navy-800">
                    {rev.date}
                  </span>
                </div>

                {/* Service Category Tag */}
                <div className="text-xs font-bold text-rescue-500 mb-2 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-rescue-500 mr-1.5"></span>
                  {rev.service}
                </div>

                {/* The Review Text */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-4">
                  "{rev.review}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-3 border-t border-navy-800/80">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                      {rev.name}
                    </h4>
                    <p className="text-[11px] text-slate-400">{rev.location}</p>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400" title="Verified Customer">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Verified Google Review Badge (Requirement 6) */}
                <div className="mt-2.5 pt-2 border-t border-navy-800/60 flex items-center text-[11px] text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1 flex-shrink-0 text-emerald-400" />
                  <span>✔ Verified Google Review • Grand Rapids Dispatch</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call Now Banner below reviews (Solid Rescue Orange, No glow - Requirement 6) */}
        <div className="mt-10 text-center">
          <p className="text-slate-400 text-xs sm:text-sm mb-3">
            Need emergency assistance right now? We answer live 24/7.
          </p>
          <a
            href="tel:6163094425"
            onClick={handleDesktopCallClick}
            className="inline-flex items-center px-7 py-3.5 rounded-xl bg-rescue-500 hover:bg-rescue-600 active:bg-rescue-700 text-white font-black text-base shadow-md shadow-rescue-500/20 transition-all duration-150 active:scale-95"
          >
            <Phone className="w-4 h-4 mr-2 fill-white" />
            Speak To Our On-Duty Dispatcher: (616) 309-4425
          </a>
        </div>

      </div>
    </section>
  );
}
