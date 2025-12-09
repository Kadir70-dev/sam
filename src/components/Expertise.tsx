import { Briefcase, Heart } from 'lucide-react';

export function Expertise() {
  const hardSkills = [
    'Global Apparel Sourcing',
    'Trade Show Management',
    'Lead Generation (Digital + Automation)',
    'Supplier–Buyer Negotiation',
    'Email Marketing',
    'B2B Sales + Networking',
    'Project Execution & Quality Control',
  ];

  const softSkills = [
    'Communication',
    'Negotiation',
    'Problem-solving',
    'Relationship Management',
    'Global Market Understanding',
  ];

  const companies = [
    { name: 'ALHUB', role: 'Business Development Manager' },
    { name: 'IATF Dubai', role: 'Lead Generation Specialist' },
    // { name: 'UAE Brands', role: 'Sourcing Consultant' },
    // { name: 'India Exporters', role: 'Trade Partner' },
  ];

  return (
    <section id="expertise" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="mb-3">Professional Expertise</h2>
          <div className="w-16 h-[2px] bg-[#c9a96e]" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Hard Skills */}
          <div className="lg:col-span-1 bg-white rounded-xl p-8 border border-[#d4c7b5]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#e8dfd0] flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-[#8b7355]" />
              </div>
              <h4>Skills</h4>
            </div>
            
            <ul className="space-y-3">
              {hardSkills.map((skill, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#c9a96e] mt-2 flex-shrink-0" />
                  <span className="text-sm text-[#3d3229]">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Soft Skills */}
          <div className="lg:col-span-1 bg-white rounded-xl p-8 border border-[#d4c7b5]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#e8dfd0] flex items-center justify-center">
                <Heart className="w-5 h-5 text-[#8b7355]" />
              </div>
              <h4>Soft Skills</h4>
            </div>
            
            <ul className="space-y-3">
              {softSkills.map((skill, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#c9a96e] mt-2 flex-shrink-0" />
                  <span className="text-sm text-[#3d3229]">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Companies Worked With */}
          {/* <div className="lg:col-span-1 bg-white rounded-xl p-8 border border-[#d4c7b5]">
            <h4 className="mb-6">Experience</h4>
            
            <div className="space-y-4">
              {companies.map((company, index) => (
                <div key={index} className="pb-4 border-b border-[#e8dfd0] last:border-0 last:pb-0">
                  <div className="w-12 h-12 rounded-lg bg-[#e8dfd0] flex items-center justify-center mb-3">
                    <span className="text-xs text-[#8b7355]">{company.name.substring(0, 2).toUpperCase()}</span>
                  </div>
                  <h5 className="text-sm mb-1">{company.name}</h5>
                  <p className="text-xs text-[#6b5d50]">{company.role}</p>
                </div>
              ))}
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}