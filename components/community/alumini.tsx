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
  weight: ["400", "500", "600"],
});

const contributions = [
  "Alumni Talks",
  "Career Guidance",
  "Judging Competitions",
  "Supporting the Administration",
];

const alumni = [
  {
    name: "Mr. Mithesh. A",
    batch: "Batch of 20XX",
    role: "M.B.B.S - 4th year",
    description:
      "A short description about their journey, contribution to PVM, or involvement with the school.",
    img: "/images/alumni/mithesh.jpeg",
  },
  {
    name: "Ms. Swetha.B ",
    batch: "Batch of 20XX",
    role: "Psychologist",
    description:
      "A short description about their journey, contribution to PVM, or involvement with the school.",
    img: "/images/alumni/swetha.jpeg",
  },
  {
    name: "Ms. Tejal.V",
    batch: "Batch of 20XX",
    role: "Owns business - Tejal Bakery",
    description:
      "A short description about their journey, contribution to PVM, or involvement with the school.",
    img: "/images/alumni/tejal.jpeg",
  },
  {
    name: "Mr. Anantha Narayanan",
    batch: "Batch of 20XX",
    role: "Software Engineer at Launch Ventures Pvt Ltd in Pune, Maharashtra.",
    description:
      "A short description about their journey, contribution to PVM, or involvement with the school.",
    img: "/images/alumni/ananth.jpeg",
  },
];

export default function AlumniContent() {
  return (
    <section className="relative bg-white py-24 md:py-32 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className={`${sora.className} text-lg text-black`}>
            Our Alumni
          </span>

          <h2
            className={`${sora.className} text-3xl md:text-5xl font-semibold text-black mt-4 mb-6 leading-tight`}
          >
            A Strong Bond Beyond School
          </h2>

          <p
            className={`${comfortaa.className} text-base md:text-lg text-black/60 leading-relaxed`}
          >
            PVM has a strong connection with the Alumni who enter the campus
            for involvement with various initiatives. Alumni Talk, Career
            Guidance, To be the Judges for Competitions, support
            administration team are some of the few….
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-black/10 mb-20">
          {contributions.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-b md:border-b-0 md:border-r border-black/10 last:border-r-0 py-8 px-5 first:pl-0"
            >
              <span
                className={`${sora.className} block text-xl md:text-2xl font-semibold text-black leading-snug`}
              >
                {item}
              </span>
            </motion.div>
          ))}
        </div>

       

        <br />
        {/* Alumni spotlight cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {alumni.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative bg-black overflow-hidden"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={a.img}
                  alt={a.name}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                />

                {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" /> */}
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-7">
                {/* <span
                  className={`${sora.className} text-xs uppercase tracking-widest text-white/40 mb-3`}
                >
                  {a.batch}
                </span> */}

                <h3
                  className={`${sora.className} text-white text-xl md:text-2xl font-semibold`}
                >
                  {a.name}
                </h3>

                <span
                  className={`${comfortaa.className} text-white/60 text-sm mt-1`}
                >
                  {a.role}
                </span>

                {/* <p
                  className={`${comfortaa.className} text-white/70 text-sm leading-relaxed mt-4 max-w-md`}
                >
                  {a.description}
                </p> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}