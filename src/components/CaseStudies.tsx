import { Lightbulb, Target } from 'lucide-react';

export function CaseStudies() {
  const caseStudies = [
    {
      title: 'Organic Business Development Growth at ALHUB, Dubai',
      logo: '/images/Alhublogo.jpg',
      description: `
        I joined ALHUB as a Business Development Manager from day one, leading all growth activities 
        including email marketing, digital outreach, and sales networking. With zero marketing budget, 
        I built strategic industry relationships by attending fashion and hospitality events, executing 
        targeted email campaigns, and directly engaging decision-makers across the UAE. Despite high 
        competition and limited resources, I successfully established the company’s first revenue 
        stream and built long-term partnerships — all through fully organic efforts, without spending 
        a single dirham on marketing.
      `,
    },
    {
      title: 'Lead Generation Transformation at International Apparel & Textile Fair, Dubai',
      logo: '/images/Itrlogo.jpg',
      description: `
        At IATF Dubai, I identified inefficiencies in the lead generation process, which relied heavily 
        on costly manual outreach. I introduced automated lead extraction tools that enabled targeted 
        global sourcing and replaced travel-based prospecting. Within three months, this strategy 
        resulted in over 700,500 in sales revenue, increased visitor footfall across two show editions, 
        and attracted long-term European agency partnerships — while significantly reducing operational 
        costs. This digital transition strengthened IATF’s market presence and improved deal conversion 
        efficiency.
      `,
    },
  ];

  return (
    <section id="case-studies" className="py-20 px-6 bg-[#faf8f3]">
      <div className="max-w-6xl mx-auto w-full">

        {/* Header */}
        <div className="mb-12">
          <h2 className="mb-3">Case Studies</h2>
          <p className="text-lg text-[#6b5d50]">
            Proven track record of delivering exceptional results
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-[#d4c7b5] hover:shadow-md transition-shadow duration-300"
            >
              
              {/* Circular Logo Container */}
              <div className="w-full flex justify-center mb-8">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#e8dfd0] flex items-center justify-center border border-[#d4c7b5] overflow-hidden">
                  <img
                    src={study.logo}
                    alt="Company Logo"
                    className="w-14 h-14 md:w-16 md:h-16 object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h4 className="mb-4 font-semibold text-[1.3rem] text-[#2c2419] leading-snug">
                {study.title}
              </h4>

              {/* Description */}
              <p className="text-sm text-[#3d3229] leading-relaxed whitespace-pre-line">
                {study.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
