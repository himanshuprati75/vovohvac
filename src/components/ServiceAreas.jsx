import React, { useState } from 'react';
import { MapPin, Search, Check, Phone } from 'lucide-react';

export default function ServiceAreas() {
  const [search, setSearch] = useState('');

  // All 21 Core Municipalities in West Michigan
  const primaryCities = [
    { name: 'Grand Rapids', county: 'Kent', zip: '49503-49508', tag: 'Headquarters' },
    { name: 'East Grand Rapids', county: 'Kent', zip: '49506', tag: 'Fast Dispatch' },
    { name: 'Wyoming', county: 'Kent', zip: '49509, 49519', tag: 'Active Daily' },
    { name: 'Kentwood', county: 'Kent', zip: '49512, 49548', tag: 'Active Daily' },
    { name: 'Rockford', county: 'Kent', zip: '49341', tag: 'North Hub' },
    { name: 'Ada / Forest Hills', county: 'Kent', zip: '49301, 49546', tag: 'East Hub' },
    { name: 'Cascade', county: 'Kent', zip: '49546', tag: 'Fast Dispatch' },
    { name: 'Walker', county: 'Kent', zip: '49534, 49544', tag: 'West Hub' },
    { name: 'Grandville', county: 'Kent', zip: '49418', tag: 'Active Daily' },
    { name: 'Byron Center', county: 'Kent', zip: '49315', tag: 'South Hub' },
    { name: 'Caledonia', county: 'Kent', zip: '49316', tag: 'Fast Dispatch' },
    { name: 'Hudsonville', county: 'Ottawa', zip: '49426', tag: 'Fast Dispatch' },
    { name: 'Jenison', county: 'Ottawa', zip: '49428', tag: 'Active Daily' },
    { name: 'Comstock Park', county: 'Kent', zip: '49321', tag: 'North Hub' },
    { name: 'Sparta', county: 'Kent', zip: '49345', tag: 'North Hub' },
    { name: 'Cedar Springs', county: 'Kent', zip: '49319', tag: 'North Hub' },
    { name: 'Lowell', county: 'Kent', zip: '49331', tag: 'East Hub' },
    { name: 'Allendale', county: 'Ottawa', zip: '49401', tag: 'Fast Dispatch' },
    { name: 'Coopersville', county: 'Ottawa', zip: '49404', tag: 'West Hub' },
    { name: 'Holland', county: 'Ottawa', zip: '49423, 49424', tag: 'Lakeshore Hub' },
    { name: 'Zeeland', county: 'Ottawa', zip: '49464', tag: 'Lakeshore Hub' },
  ];

  const filtered = search.trim() === ''
    ? primaryCities
    : primaryCities.filter(c => 
        c.name.toLowerCase().includes(search.toLowerCase()) || 
        c.county.toLowerCase().includes(search.toLowerCase()) ||
        c.zip.includes(search)
      );

  return (
    <section id="service-areas" className="py-12 sm:py-16 bg-white text-navy-950 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-navy-100 border border-navy-200 text-navy-900 text-xs font-bold uppercase tracking-wider mb-2.5">
            <MapPin className="w-3.5 h-3.5 text-rescue-500" />
            <span>West Michigan Coverage Map</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-navy-950 font-sans">
            Core Service Areas We Protect
          </h2>
          
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Our mobile service vans are equipped with diagnostic equipment and common replacement components stationed throughout Greater Grand Rapids and Ottawa County.
          </p>

          {/* Optional Quick Finder Input */}
          <div className="mt-5 max-w-sm mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              placeholder="Quick search city or zip..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-300 text-xs focus:border-rescue-500 focus:ring-1 focus:ring-rescue-500 outline-none transition shadow-sm"
            />
          </div>
        </div>

        {/* All 21 Service Area Cities Displayed Simultaneously (Flex Wrap Layout - Requirement 7) */}
        <div className="flex flex-wrap justify-center gap-3 max-w-6xl mx-auto">
          {filtered.map((city, idx) => (
            <div
              key={idx}
              className="bg-slate-50 hover:bg-orange-50/60 border border-slate-200 hover:border-rescue-500/50 rounded-xl p-3 sm:p-3.5 transition-all shadow-sm hover:shadow text-left flex items-center space-x-3 min-w-[145px] sm:min-w-[170px]"
            >
              <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-rescue-500 flex-shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                {/* County badge with WCAG AA compliant text-slate-700 (> 7:1 contrast - Requirement 7) */}
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 leading-tight">
                  {city.county} County
                </span>
                <div className="text-xs sm:text-sm font-extrabold text-navy-950 truncate leading-snug">
                  {city.name}
                </div>
                <div className="text-[10px] font-semibold text-emerald-700 flex items-center mt-0.5">
                  <Check className="w-3 h-3 mr-0.5 flex-shrink-0 text-emerald-600" />
                  <span>45-Min Arrival</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Local Guarantee */}
        <div className="mt-8 text-center text-xs text-slate-600">
          <span>Located outside these 21 primary cities? Call us at </span>
          <a href="tel:6163094425" className="font-extrabold text-rescue-500 hover:text-rescue-600 underline">
            (616) 309-4425
          </a>
          <span> to verify immediate on-call technician availability.</span>
        </div>

      </div>
    </section>
  );
}
