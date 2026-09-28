"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Fraunces, Instrument_Sans,Sora } from "next/font/google";

// Fraunces: a warm, editorial display serif with real optical personality —
// the kind of face you see on Awwards-style storytelling sites.
// Instrument Sans: a quiet, humanist sans for supporting copy.
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function CommunityOutreachHero() {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hand.png"
        alt="Colourful painted hands raised together, symbolising the community outreach programme"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay for legibility */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />

      {/* Centered content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <h1
            className={`${sora.className} text-5xl md:text-6xl lg:text-6xl text-white `}
          >
            Community <span className="italic font-normal text-white/70">Outreach</span> Programmes
          </h1>

          <p
            className={`${instrument.className} mt-8 text-base md:text-lg text-white/75 leading-relaxed max-w-lg mx-auto`}
          >
            Students of Class IX to XII are involved in the Community
            Outreach Programme as the school believes that this is the
            right age to empower them with a deeper understanding of
            responsibility and service.
          </p>

          {/* Highlight Quote */}
          <div className="mt-10 inline-block border-t border-white/30 pt-6">
            <p
              className={`${fraunces.className} italic text-xl md:text-2xl text-white leading-relaxed`}
            >
              Catch them Young
            </p>
            <p
              className={`${instrument.className} text-sm text-white/60 mt-2 leading-relaxed max-w-sm mx-auto`}
            >
              Encouraging students to understand their responsibilities
              while becoming active and compassionate members of society.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}