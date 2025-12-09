import { Mail, Phone, Linkedin, QrCode } from 'lucide-react';

export function Contact() {
  const contactMethods = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: 'https://www.linkedin.com/in/saima-shaikh-71125035b/',
    },
    {
      icon: QrCode,
      label: 'Website',
      value: 'www.miraal.in',
      href: 'https://www.miraal.in/',
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-[#faf8f3]">
      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-12">
          <h2 className="mb-3">Let's Connect</h2>
          <p className="text-lg text-[#6b5d50] max-w-2xl">
            Ready to discuss your sourcing needs? Reach out to explore how we can build a successful partnership together.
          </p>
        </div>

        <div className="bg-white rounded-xl p-10 border border-[#d4c7b5]">
          <div className="grid md:grid-cols-2 gap-10">

            {/* Contact Methods */}
            <div>
              <h4 className="mb-6">Contact Information</h4>

              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <a
                      key={index}
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-4 rounded-lg bg-[#faf8f3] hover:bg-[#e8dfd0] transition-colors duration-300 border border-transparent hover:border-[#d4c7b5]"
                    >
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#8b7355]" />
                      </div>
                      <div>
                        <p className="text-xs text-[#6b5d50] mb-1">{method.label}</p>
                        <p className="text-sm text-[#3d3229]">{method.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Footer tagline */}
          <div className="mt-10 pt-10 border-t border-[#e8dfd0] text-center">
            <p className="text-lg italic text-[#6b5d50]">
              "Building bridges between global buyers and trusted manufacturers"
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-xs text-[#6b5d50]">
            © 2025 Saima Shaikh. Freelance Global Sourcing Consultant
          </p>
        </div>
      </div>
    </section>
  );
}
