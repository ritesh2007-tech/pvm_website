"use client";

import { Space_Grotesk, Sora, Comfortaa } from "next/font/google";
import Image from "next/image";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-label",
});

interface Programme {
  title: string;
  subtitle: string;
  description: string;
  bullets?: string[];
  logo: string;
  background: string;
}

const programmes: Programme[] = [
  {
    title: "Chrysalis",
    subtitle: "Classes I to V",
    description:
      "Chrysalis (I–V) builds strong thinking skills across four facets and inspires children to express themselves freely and meaningfully.",
    logo: "/images/chrysalis.png",
    background: "/images/ca.png",
  },
  {
    title: "Britannica – BELLS",
    subtitle: "Learning Programme · VI to X",
    description:
      "Avails trustworthy content for students to go beyond textbooks and learn by availing an in-school and after-school library.",
    bullets: [
      "Enhances students' critical thinking skills",
      "Strengthens research and knowledge infrastructure",
    ],
    logo: "/images/britannica.png",
    background: "/images/britannica.png",
  },
  {
    title: "Extramarks",
    subtitle: "Classes X to XII",
    description:
      "A comprehensive digital learning platform for Class X to XII school students, with exclusive login designed to make complex concepts simple, engaging, and personalized.",
    logo: "/images/extramarks_logo.jpg",
    background: "/images/em.png",
  },
];

export default function ValueAddedProgrammes() {
  return (
    <section
      className={`${spaceGrotesk.variable} ${sora.variable} ${comfortaa.variable} w-full bg-white px-5 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-20`}
    >
      {/* Top Left Label */}
      <div className="mb-10">
        <p className="font-[family-name:var(--font-body)] text-5xl font-medium tracking-tight text-center text-black ">
          VALUE ADDED LEARNING PROGRAMME
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto grid w-full max-w-9xl grid-cols-1 gap-7 lg:grid-cols-1">
        {programmes.map((programme) => (
          <article
            key={programme.title}
            className="
              group
              relative
              min-h-[560px]
              overflow-hidden
              rounded-[28px]
              bg-neutral-100
              shadow-sm
              transition-all
              duration-500
              hover:-translate-y-2
              hover:shadow-xl
              sm:min-h-[580px]
              lg:min-h-[620px]
            "
          >
            {/* Background */}
            <Image
              src={programme.background}
              alt=""
              fill
              className="
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
              sizes="(max-width: 1024px) 100vw, 33vw"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/85" />

            {/* Content */}
            <div className="relative z-10 flex min-h-[560px] flex-col p-6 sm:min-h-[580px] sm:p-7 md:p-8 lg:min-h-[620px]">

              {/* Logo */}
              <div className="flex h-28 w-36 items-center justify-center overflow-hidden rounded-2xl bg-white/95 p-3">
                <Image
                  src={programme.logo}
                  alt={`${programme.title} logo`}
                  width={150}
                  height={150}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Bottom Content */}
              <div className="mt-auto">

                {/* Title */}
                <h2
                  className={`${spaceGrotesk.className} text-4xl font-semibold leading-tight text-white sm:text-5xl`}
                >
                  {programme.title}
                </h2>

                {/* Subtitle */}
                <p
                  className={`${spaceGrotesk.className} mt-2 text-base font-medium text-white/85 sm:text-lg`}
                >
                  {programme.subtitle}
                </p>

                {/* Description */}
                <p
                  className={`${comfortaa.className} mt-5 text-sm leading-relaxed text-white/80 sm:text-base`}
                >
                  {programme.description}
                </p>

                {/* Bullets */}
                {programme.bullets && (
                  <ul className="mt-5 space-y-2">
                    {programme.bullets.map((point) => (
                      <li
                        key={point}
                        className={`${sora.className} flex items-start gap-3 text-sm text-white/75`}
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}