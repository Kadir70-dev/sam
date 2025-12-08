import { TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export function History() {
  return (
    <section id="history" className="py-20 px-6 bg-[#faf8f3]">
      <div className="max-w-6xl mx-auto w-full">

        {/* Heading + Description */}
        <div className="mb-12">
          <h2 className="mb-3">History</h2>

          <p className="text-lg text-[#6b5d50] max-w-3xl mb-4">
            5+ years of experience in B2B & B2B marketing and sales as well as B2B & B2C marketing and sales,
            with expertise in international apparel sourcing and trade show management.
          </p>

          <p className="text-lg text-[#6b5d50] max-w-3xl mb-4">
            Skilled in using digital tools like Nearby lead extractor applications and LinkedIn to generate
            high-quality leads and expand networks.
          </p>

          <p className="text-lg text-[#6b5d50] max-w-3xl">
            <span className="font-semibold">Soft Skills:</span> Strong communication, negotiation, problem-solving,
            and relationship management abilities that enhance collaborations with designers, suppliers, and global buyers.
          </p>
        </div>

        {/* -------------------------------------------------
           TIMELINE REMOVED (COMMENTED OUT)
        --------------------------------------------------- */}

        {/*
        <div className="relative">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="origin-top absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-[#d4c7b5] hidden md:block"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-8"
          >
            {timeline.map((item, index) => (
              <motion.div key={index} ...>
                ...
              </motion.div>
            ))}
          </motion.div>
        </div>
        */}

        {/* -------------------------------------------------
           TIMELINE COMMENTED OUT — CLEAN UI NOW
        --------------------------------------------------- */}

      </div>
    </section>
  );
}
