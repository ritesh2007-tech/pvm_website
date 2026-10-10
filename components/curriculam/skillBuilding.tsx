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
  "PROGRAMMES",
  "OPPORTUNITIES",
  "EXPERIENCES",
];

const WORD_COLORS = [
  "text-orange-700",
  "text-[#8B5CF6]",
  "text-[#0F766E]",
];

interface SkillProgramme {
  logo: string;
  title: string;
  className: string;
  description: string;
  bgImage?: string;
  secondImage?: string;
  fullWidth?: boolean;
}

const SKILL_PROGRAMMES: SkillProgramme[] = [
  {
    logo: "/images/logos/moneysmart.png",
    title: "MONEY SMART PROGRAMME",
    className: "CLASSES VI TO X",
    description:
      "Equipping students to get empowered in savings and investments.",
    bgImage: "/images/ca.png",
  },

  {
    logo: "/images/logos/schoolcinema.png",
    title: "SCHOOL CINEMAS",
    className: "CLASSES VI TO X",
    description:
      "A curated film-based programme for nurturing life skills and values.",
    bgImage: "/images/sr.png",
  },

  {
    logo: "/images/logos/caca.png",
    title: "CHILDREN AGAINST CHILD ABUSE (CACA)",
    className: "CLASSES I TO X",
    description:
      "Safeguarding oneself and expressing concerns confidently in times of need.",
    bgImage: "/images/sr.png",
    fullWidth: true,
  },

  {
    logo: "/images/logos/bsg.png",
    title: "SCOUTS AND GUIDES / CUBS AND BULBULS",
    className: "CLASSES III AND V",
    description:
      "Be prepared. Do your best and aim to attain the best.",
    bgImage: "/images/ca.png",
    secondImage: "/images/sr.png",
  },

  {
    logo: "/images/logos/ncc.png",
    title: "NATIONAL CADET CORPS",
    className: "NCC",
    description:
      "Guided by the 3 (TN) Battalion Army Wing, the programme shapes the students through unity and discipline.",
    bgImage: "/images/ncc.jpeg",
  },
];

export default function SkillBuildingProgrammes() {
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
          SKILL BUILDING{" "}
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
      <div className="mx-auto grid w-full max-w-9xl grid-cols-1 gap-7 md:grid-cols-2">

        {SKILL_PROGRAMMES.map((program, index) => (
          <SkillProgrammeCard
            key={`${program.title}-${index}`}
            program={program}
          />
        ))}

      </div>
    </section>
  );
}

function SkillProgrammeCard({
  program,
}: {
  program: SkillProgramme;
}) {
  return (
    <article
      className={`
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
        ${program.fullWidth ? "md:col-span-2" : ""}
      `}
    >

      {/* Main Background Image */}
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
          sizes={
            program.fullWidth
              ? "100vw"
              : "(max-width: 768px) 100vw, 50vw"
          }
        />
      )}

      {/* Background when no image */}
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

        {/* Logo */}
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

        {/* Second Photo - mainly for Scouts */}
        {program.secondImage && (
          <div className="absolute right-6 top-6 z-10 h-32 w-32 overflow-hidden rounded-2xl sm:right-8 sm:top-8 sm:h-40 sm:w-40">
            <Image
              src={program.secondImage}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        )}

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
            className={`${comfortaa.className} mt-5 max-w-3xl text-sm text-white/80 sm:text-base`}
          >
            {program.description}
          </p>

        </div>
      </div>
    </article>
  );
}