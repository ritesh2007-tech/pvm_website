"use client";

import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function CurriculumSection() {
  return (
    <section className="flex min-h-[45vh] w-full items-center justify-center overflow-hidden bg-white px-4 py-20 sm:min-h-[55vh] sm:px-6 md:min-h-[65vh]">
      <div className="w-full max-w-full text-center">
        <h1
          className={`${spaceGrotesk.className} w-full overflow-hidden text-center text-[clamp(3.2rem,14vw,12rem)] font-bold uppercase leading-[0.85] tracking-[-0.05em] text-black`}
        >
          CURRICULUM
        </h1>
      </div>
    </section>
  );
}