import { MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CoverPage() {
  return (
    <section
      id="cover"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#f5f1e8] to-[#e8dfd0] px-6"
    >
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#d4c7b5] rounded-full opacity-20 blur-3xl transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#c9a96e] rounded-full opacity-15 blur-3xl transform -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-5xl mx-auto text-center relative z-10">

        {/* Map markers */}
        <div className="flex items-center justify-center gap-8 mb-8 opacity-60">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#8b7355]" />
            <span className="text-sm tracking-wide uppercase">UAE</span>
          </div>

          <div className="w-12 h-[1px] bg-[#8b7355]" />

          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#8b7355]" />
            <span className="text-sm tracking-wide uppercase">India</span>
          </div>
        </div>

        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">

            {/* 🔥 SAIMA REAL IMAGE */}
            <ImageWithFallback
              src="/images/don.jpg"
              alt="Saima Shaikh"
              className="w-full h-full object-cover"
            />

          </div>
        </div>

        {/* Name */}
        <h1 className="mb-6">Saima Shaikh</h1>

        {/* Subtitle */}
        <p className="text-2xl mb-8 text-[#6b5d50] font-light tracking-wide">
          Freelance Global Sourcing Consultant
        </p>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-[2px] bg-[#c9a96e]" />
          <div className="w-2 h-2 bg-[#c9a96e] rounded-full" />
          <div className="w-16 h-[2px] bg-[#c9a96e]" />
        </div>

        {/* Tagline */}
        <p className="text-xl italic text-[#6b5d50] max-w-2xl mx-auto">
          "Connecting Global Buyers With Trusted Manufacturers."
        </p>

        {/* Industry tags */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
          <span className="px-5 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm tracking-wide border border-[#d4c7b5]">
            Apparel & Textiles
          </span>
          <span className="px-5 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm tracking-wide border border-[#d4c7b5]">
            International Trade
          </span>
          <span className="px-5 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm tracking-wide border border-[#d4c7b5]">
            Business Development
          </span>
        </div>

      </div>
    </section>
  );
}
