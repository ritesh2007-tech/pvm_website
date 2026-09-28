"use client";

import { motion } from "framer-motion";
import { Sora, Comfortaa } from "next/font/google";
import Image from "next/image";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function AlumniHero() {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">

      {/* Layer 1: Background Image */}
      <Image
        src="/images/alumini.jpeg"
        alt="PVM alumni gathered together on campus"
        fill
        priority
        className="object-cover z-0 opacity-[85%]"
      />

      {/* Layer 2: Our Alumni Text */}
      <div className="absolute inset-0 z-10 flex items-center justify-center text-center px-6 -translate-y-29 md:-translate-y-38">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span
            className={`${sora.className} text-[50px] md:text-[250px] font-semibold text-black`}
          >
            Our Alumni
          </span>
        </motion.div>
      </div>

      {/* Layer 3: Foreground Cutout Image */}
      <div className="absolute inset-x-0 bottom-0 z-20 flex justify-center">

        <div className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
          <Image
            src="/images/abg.png"
            alt=""
            fill
            priority
            className="object-cover pointer-events-none"
          />
        </div>

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-black/10 z-10" />

        {/* Orange Content Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-30
                     bg-white px-7 py-6 md:px-10 md:py-7
                     max-w-md"
        >
          <p
            className={`${comfortaa.className} text-sm md:text-base text-black leading-relaxed`}
          >
            
            PVM is proud and happy to share that the developers of this
            website are also our Alumni Students.
          </p>
        </motion.div>

      </div>

    </section>
  );
}