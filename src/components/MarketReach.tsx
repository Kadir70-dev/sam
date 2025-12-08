import { MapPin, Globe } from 'lucide-react';

export function MarketReach() {
  const uaeMarkets = [
    'Dubai, Sharjah, Abu Dhabi',
    'Fashion trade events',
    'Hospitality sourcing',
    'Strong industry networking',
  ];

  const indiaMarkets = [
    'Jaipur',
    'Surat',
    'Mumbai',
    'Tiruppur',
    'Export manufacturers + artisan network',
  ];

  return (
    <section id="market-reach" className="py-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-12">
          <h2 className="mb-3">Global market </h2>
          <p className="text-lg text-[#6b5d50]">UAE & India</p>
        </div>

        {/* Global flow visualization */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <Globe className="w-5 h-5 text-[#8b7355]" />
          <span className="text-sm text-[#6b5d50]">Global Sourcing Network</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* UAE Market */}
          <div className="bg-white rounded-xl p-8 border border-[#d4c7b5]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#e8dfd0] flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#8b7355]" />
              </div>
              <h4>UAE Market</h4>
            </div>

            <ul className="space-y-2">
              {uaeMarkets.map((market, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#c9a96e] mt-2 flex-shrink-0" />
                  <span className="text-sm text-[#3d3229]">{market}</span>
                </li>
              ))}
            </ul>

            {/* Decorative element */}
            <div className="mt-6 pt-6 border-t border-[#e8dfd0]">
              <div className="flex items-center gap-2 text-[#6b5d50]">
                <div className="w-6 h-[2px] bg-[#c9a96e]" />
                <span className="text-xs">Middle East Hub</span>
              </div>
            </div>
          </div>

          {/* India Market */}
          <div className="bg-white rounded-xl p-8 border border-[#d4c7b5]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#e8dfd0] flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#8b7355]" />
              </div>
              <h4>India Market</h4>
            </div>

            <ul className="space-y-2">
              {indiaMarkets.map((market, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#c9a96e] mt-2 flex-shrink-0" />
                  <span className="text-sm text-[#3d3229]">{market}</span>
                </li>
              ))}
            </ul>

            {/* Decorative element */}
            <div className="mt-6 pt-6 border-t border-[#e8dfd0]">
              <div className="flex items-center gap-2 text-[#6b5d50]">
                <div className="w-6 h-[2px] bg-[#c9a96e]" />
                <span className="text-xs">Manufacturing Powerhouse</span>
              </div>
            </div>
          </div>
        </div>

        {/* Expansion notice */}
        <div className="text-center">
          <div className="inline-block bg-white rounded-lg px-6 py-3 border border-[#d4c7b5]">
            <p className="text-sm text-[#6b5d50]">
              <span className="font-semibold text-[#8b7355]">Expanding to:</span> Portugal & Italy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}