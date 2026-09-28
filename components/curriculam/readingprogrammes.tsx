"use client";

import Image from "next/image";
import { Comfortaa, Space_Grotesk } from "next/font/google";
import { useEffect, useState } from "react";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const LAST_WORDS = [
  "OFFERED",
  "AVAILABLE",
  "ENRICHED",
];

const WORD_COLORS = [
  "text-orange-700",
  "text-[#8B5CF6]",
  "text-[#0F766E]",

];

interface ReadingProgram {
  logo: string;
  title: string;
  className: string;
  description: string;
  functionName: string;
  bgImage?: string;
}

const READING_PROGRAMS: ReadingProgram[] = [
  {
    logo: "/images/logos/karadi_path.png",
    title: "KARADI PATH",
    className: "CLASSES I TO IV",
    description:
      "A story-led reading program designed to build vocabulary, listening skills and reading confidence.",
    functionName: "Reading Program Offered",
    bgImage: "/images/ca.png",
  },
  {
    logo: "/images/logos/shortreads.png",
    title: "SCHOLASTIC SHORT READS",
    className: "Classes V & VI",
    description:
      "Engaging short reads that encourage independent reading and strengthen comprehension skills.",
    functionName: "Reading Program Offered",
    bgImage: "/images/sr.png",
  },
  {
    logo: "/images/logos/shortreads.png",
    title: "SCHOLASTIC LONG READY",
    className: "Classes VII & VIII",
    description:
      "Students respond to their reading by writing reviews, enhancing comprehension and writing skills.",
    functionName: "Reading Program Offered",
    bgImage: "/images/sr.png",
  },
  {
    logo: "/images/logos/nie.png",
    title: "NEWSPAPER IN EDUCATION - PATTAM AND TIMES OF INDIA",
    className: "Classes V & VI",
    description:
      "Editions of Dinamalar Pattam and Times of India are provided to students to use print and digital newspapers as a living textbook.",
    functionName: "Reading Program Offered",
    bgImage: "/images/pattam.JPG",
  },
];

export default function ReadingProgramCards() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % LAST_WORDS.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white px-5 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      
      {/* Main Title */}
      <div className="mb-12 text-center">
  <h1
    className={`${spaceGrotesk.className} text-4xl font-medium tracking-tight text-black sm:text-5xl md:text-6xl lg:text-7xl`}
  >
    READING PROGRAMS{" "}
    <span className="relative inline-block overflow-hidden align-bottom">
      <span
        key={index}
        className={`inline-block ${WORD_COLORS[index]} animate-[wordSlideUp_0.7s_ease-in-out]`}
      >
        {LAST_WORDS[index]}
      </span>
    </span>
  </h1>
</div>

      {/* Cards */}
      <div className="mx-auto grid w-full max-w-9xl grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-2">
        {READING_PROGRAMS.map((program, index) => (
          <ReadingProgramCard
            key={`${program.title}-${index}`}
            program={program}
          />
        ))}
      </div>
    </section>
  );
}

function ReadingProgramCard({
  program,
}: {
  program: ReadingProgram;
}) {
  return (
    <article
      className="
        group
        relative
        min-h-[560px]
        w-full
        overflow-hidden
        rounded-[30px]
        bg-neutral-100
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-xl
        sm:min-h-[600px]
        lg:min-h-[640px]
      "
    >
      {/* Background Image */}
      {program.bgImage && (
        <Image
          src={program.bgImage}
          alt=""
          fill
          priority={false}
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      )}

      {/* Background when there is no image */}
      {!program.bgImage && (
        <div className="absolute inset-0 bg-neutral-100" />
      )}

      {/* Dark Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/50
          via-black/50
          to-black/80
        "
      />

      {/* Card Content */}
      <div
        className="
          relative
          z-10
          flex
          min-h-[560px]
          flex-col
          p-6
          sm:min-h-[600px]
          sm:p-7
          md:p-8
          lg:min-h-[640px]
          lg:p-9
        "
      >
        {/* Logo - Top Left */}
        <div
          className="
            flex
            h-26
            w-40
            shrink-0
            items-center
            justify-center
            overflow-hidden
            rounded-2xl
          "
        >
          {program.logo ? (
            <Image
              src={program.logo}
              alt={`${program.title} logo`}
              width={90}
              height={90}
              className="h-full w-full object-contain p-2"
            />
          ) : (
            <div className="h-full w-full" />
          )}
        </div>

        {/* Bottom Content */}
        <div className="mt-auto">

          {/* Title */}
          <h2
            className={`${spaceGrotesk.className} text-4xl font-semibold leading-tight text-white sm:text-5xl`}
          >
            {program.title}
          </h2>

          {/* Class */}
          <p
            className={`${spaceGrotesk.className} mt-2 text-base font-medium text-white/90 sm:text-lg`}
          >
            {program.className}
          </p>

          {/* Description */}
          <p
            className={`${comfortaa.className} mt-5 text-sm text-white/80 sm:text-base`}
          >
            {program.description}
          </p>
        </div>
      </div>
    </article>
  );
}