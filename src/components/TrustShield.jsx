import React from 'react';
import { ShieldCheck, Clock, Star, Award } from 'lucide-react';

export default function TrustShield() {
  const trustItems = [
    {
      icon: <ShieldCheck className="w-7 h-7 text-rescue-500" />,
      title: "Fully Licensed & Insured",
      subtitle: "State of MI Mechanical Contractor #7119047. Up to $2M comprehensive liability coverage for your peace of mind.",
      badge: "State Certified",
    },
    {
      icon: <Clock className="w-7 h-7 text-rescue-500" />,
      title: "24/7 Emergency Dispatch",
      subtitle: "Nights, weekends, & holidays. Live local dispatch with an average arrival time under 45 minutes in West MI.",
      badge: "Under 45 Mins",
    },
    {
      icon: <Star className="w-7 h-7 text-amber-400 fill-amber-400" />,
      title: "5-Star Rated Reputation",
      subtitle: "Hundreds of verified reviews from Grand Rapids homeowners praising our speed, honesty, and spotless cleanup.",
      badge: "100% Recommended",
    },
    {
      icon: <Award className="w-7 h-7 text-rescue-500" />,
      title: "Proudly Veteran-Owned",
      subtitle: "Built on military precision, rock-solid integrity, and transparent flat-rate pricing with zero hidden franchise fees.",
      badge: "Honor & Service",
    },
  ];

  return (
    <section className="bg-slate-100 border-y border-slate-200 py-8 sm:py-10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md border border-slate-200/80 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-orange-50 group-hover:bg-rescue-500/10 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-navy-800 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-black text-navy-950 mb-1.5 font-sans tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.subtitle}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center text-xs font-bold text-rescue-500 group-hover:text-rescue-600">
                <span>Verified Guarantee</span>
                <span className="ml-1 font-normal text-slate-400">✓</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
