import { Award, ArrowRight } from 'lucide-react';

export function FreelanceProfile() {
  const flowSteps = ['Sourcing', 'Negotiation', 'Order Execution', 'Delivery'];

  const achievements = [
    { label: 'Latest Deal Closed', value: '₹1.4 Cr' },
    { label: 'Current Projects', value: '$1-2M' },
    { label: 'Commission Rate', value: '4-5%' },
  ];

  return (
    <section id="freelance" className="py-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        
        <div className="mb-12">
          <h2 className="mb-3"> Freelancing & Next Project </h2>
        </div>

        {/* MAIN CONTENT BOX */}
        <div className="bg-white rounded-xl p-10 md:p-12 border border-[#d4c7b5] mb-8">
          <p className="text-lg leading-relaxed mb-6">
            As a <span className="font-semibold text-[#8b7355]">Freelance Global Sourcing Consultant</span>, 
            I work with apparel buyers and manufacturers across India, UAE, and expanding into Portugal and Italy. 
            I identified a major gap in the industry where buyers struggle to find trusted suppliers who match 
            their product, pricing, and payment requirements—especially under open-cost formats such as 
            <span className="font-semibold text-[#8b7355]"> 45 days GRN</span>.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            By aligning the right manufacturers with the right buyers, guiding negotiations, and ensuring 
            transparent communication, I help both sides achieve seamless business operations.
          </p>

          <p className="text-lg leading-relaxed">
            Through this approach, I successfully closed a 
            <span className="font-semibold text-[#8b7355]"> ₹1.4 Cr deal</span> in December, and currently manage 
            projects up to <span className="font-semibold text-[#8b7355]">USD 1–2 million</span>, earning 
            <span className="font-semibold text-[#8b7355]"> 4–5% commission</span> per deal. My work ensures 
            perfect order execution and long-term partnerships without conflicts or quality issues.
          </p>
        </div>

        {/* ACHIEVEMENT BADGES */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white rounded-lg p-6 border border-[#d4c7b5] text-center">
              <div className="w-8 h-8 rounded-full bg-[#c9a96e] bg-opacity-20 flex items-center justify-center mx-auto mb-3">
                <Award className="w-4 h-4 text-[#8b7355]" />
              </div>
              <p className="text-xs text-[#6b5d50] mb-2">{achievement.label}</p>
              <p className="text-xl text-[#2c2419]">{achievement.value}</p>
            </div>
          ))}
        </div>

        {/* PROCESS FLOW */}
        <div className="bg-white rounded-xl p-8 border border-[#d4c7b5]">
          <h5 className="mb-6 text-center">My Process</h5>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {flowSteps.map((step, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-[#f5f1e8] rounded-lg px-5 py-2 border border-[#d4c7b5]">
                  <span className="text-sm text-[#3d3229]">{step}</span>
                </div>

                {index < flowSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-[#c9a96e] hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
