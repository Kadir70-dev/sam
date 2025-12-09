import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Bhavna Nihalani',
      role: 'Show Director – IATF',
      quote: `Saima is exceptionally talented and highly efficient in multitasking. Whether it was managing buyer activation programs, leading marketing initiatives, or driving sales activities, she executed every task with perfection and professionalism. Her efforts in connecting global textile buyers from around the world were truly commendable and added immense value to our show. I am confident that Saima will continue to achieve great success in all her future endeavors.`,
      company: 'International Apparel & Textile Fair, Dubai',
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="max-w-6xl mx-auto w-full">

        <div className="mb-12">
          <h2 className="mb-3">Testimonials</h2>
          {/* <p className="text-lg text-[#6b5d50]">What clients and partners say</p> */}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-[#d4c7b5] hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-[#e8dfd0] flex items-center justify-center mb-6">
                <Quote className="w-5 h-5 text-[#8b7355]" />
              </div>

              <p className="text-sm text-[#3d3229] mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="pt-6 border-t border-[#e8dfd0]">
                <h5 className="text-sm mb-1">{testimonial.name}</h5>
                <p className="text-xs text-[#6b5d50] mb-1">{testimonial.role}</p>
                <p className="text-xs text-[#c9a96e]">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
