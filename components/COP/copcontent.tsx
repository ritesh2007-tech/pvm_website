"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Fraunces, Instrument_Sans } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const outreachOtherImages = [
  "/images/CopImages/cop24.jpeg",
  "/images/CopImages/cop25.jpeg",
  "/images/CopImages/cop26.jpeg",
  "/images/CopImages/cop27.jpeg",
  "/images/CopImages/cop5.jpeg",
  "/images/CopImages/cop6.jpeg",
  "/images/CopImages/cop8.jpeg",
  "/images/CopImages/cop10.jpeg",
  "/images/CopImages/cop13.jpeg",
  "/images/CopImages/cop14.jpeg",
  "/images/CopImages/cop15.jpeg",
  "/images/CopImages/cop16.jpeg",
  "/images/CopImages/cop17.jpeg",
  "/images/CopImages/cop18.jpeg",
  "/images/CopImages/cop19.jpeg",
  "/images/CopImages/cop20.jpeg",
  "/images/CopImages/cop21.jpeg",
  "/images/CopImages/cop22.jpeg",
  "/images/CopImages/cop23.jpeg",
];

export default function CommunityOutreachContent() {
  return (
    <section className="relative bg-[#F7F5F1] pb-24 md:pb-32 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="pt-8 border-t border-black/10 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <p className={`${fraunces.className} text-2xl md:text-3xl text-black max-w-2xl leading-snug`}>
            Building responsible citizens through{" "}
            <span className="italic text-black/45">meaningful action.</span>
          </p>

          <p className={`${instrument.className} text-sm text-black/45 max-w-sm leading-relaxed`}>
            Community engagement gives students an opportunity to learn,
            contribute and understand the importance of responsibility
            beyond the school environment.
          </p>
        </motion.div>

        {/* Photo Grid */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-2">
          {outreachOtherImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative aspect-[4/3] overflow-hidden bg-black rounded-[10px]"
            >
              <Image
                src={image}
                alt={`Community Outreach Programme ${index + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 83vw, 33vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              {/* <div className="absolute top-3 left-3 z-10 w-10 h-10 md:w-12 md:h-12 p-1.5">
                <Image
                  src="/images/pvmLogo.png"
                  alt="Prasan Vidya Mandir"
                  fill
                  className="object-contain"
                  draggable={false}
                />
              </div> */}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}