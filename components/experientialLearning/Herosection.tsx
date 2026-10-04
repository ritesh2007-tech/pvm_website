"use client";

import { Sora, Comfortaa } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sora",
});

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-comfortaa",
});

export default function HeroSection() {
  return (
    <section
      className={`${sora.variable} ${comfortaa.variable} w-full bg-white px-2 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:px-5 lg:py-0`}
    >
      <div className="relative h-[75vh] min-h-[500px] w-full overflow-hidden rounded-3xl">
        {/* Background Video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/videos/club.mp4" type="video/mp4" />
        </video>

        {/* Content - Bottom Left */}
        <div className="relative z-10 flex h-full items-end">
          <div className="max-w-3xl px-6 pb-8 text-left sm:px-10 sm:pb-12 md:px-14 md:pb-14 lg:px-16 lg:pb-16">
            <h1
              className="font-[family-name:var(--font-sora)] text-3xl font-light tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Experiential Learning
            </h1>

            <p
              className="mt-4 max-w-2xl font-[family-name:var(--font-comfortaa)] text-sm leading-relaxed text-white/80 sm:text-base md:mt-6 md:text-lg"
            >
              Students participate in various sports activities that promote
              teamwork and discipline.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}