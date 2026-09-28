"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Space_Grotesk, Montserrat } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-montserrat",
});

interface AboutHeroProps {
  backgroundImage?: string;
  logoImage?: string;
  penImage?: string;
  booksImage?: string;
}

const SHADOW_TIGHT = "26px 12px 14px rgba(0,0,0,0.65)";
const SHADOW_SOFT = "48px 22px 36px rgba(0,0,0,0.45)";

const TEXT_SHADOW =
  "16px 6px 10px rgba(0,0,0,0.55), 28px 10px 28px rgba(0,0,0,0.35)";

const IMAGE_SHADOW = `drop-shadow(${SHADOW_TIGHT}) drop-shadow(${SHADOW_SOFT})`;

export default function AboutHero({
  backgroundImage = "/images/abouthero1.png",
  logoImage = "/images/aboutlogo.png",
  penImage = "/images/pen.png",
  booksImage = "/images/books.png",
}: AboutHeroProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className={`${spaceGrotesk.variable} ${montserrat.variable} relative min-h-screen w-full overflow-hidden`}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Heading */}
      <h1
  style={{ textShadow: TEXT_SHADOW }}
  className={`absolute left-[5%] top-[8%] z-20
    font-[family-name:var(--font-montserrat)]
   font-bold leading-[0.9]
tracking-[-0.04em]
text-[#fffce6]
text-[110px]
sm:text-[115px]
lg:text-[155px]
transition-opacity duration-500 ease-out delay-150
sm:top-[9%]
md:left-[6%]
lg:tracking-[-0.06em]
${mounted ? "opacity-100" : "opacity-0"}`}
>
  About Us
</h1>

      {/* Logo */}
      <div
        style={{ filter: IMAGE_SHADOW }}
        className={`absolute
          right-[5%]
          top-[8%]
          z-20
          w-[100px]
          right-[8%]
          top-[15%]
          w-[205px]
          md:right-[11%]
          md:w-[165px]
          lg:right-[15%]
          lg:top-[7%]
          lg:w-[195px]
          xl:right-[17%]
          xl:w-[300px]
          transition-all
          duration-[1100ms]
          ease-out
          delay-300
          ${
            mounted
              ? "translate-y-0 opacity-100"
              : "-translate-y-16 opacity-0"
          }`}
      >
        <Image
          src={logoImage}
          alt="Learn to Lead"
          width={230}
          height={230}
          className="h-auto w-full rotate-[12deg]"
        />
      </div>

      {/* Quote */}
      <p
        style={{ textShadow: TEXT_SHADOW }}
        className={`absolute
          right-[5%]
          top-[35%]
          z-20
          w-[90%]
          max-w-[850px]
          text-center
          font-[family-name:var(--font-space-grotesk)]
          font-medium
          leading-relaxed
          text-white
          text-[clamp(0.85rem,1.5vw,1.5rem)]
          sm:right-[5%]
          sm:top-[38%]
          sm:w-[65%]
          md:right-[4%]
          md:top-[40%]
          md:w-[58%]
          lg:right-[3%]
          lg:top-[42%]
          lg:w-[55%]
          transition-opacity
          duration-500
          ease-out
          delay-300
          ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
      >
        &ldquo;At Prasan Vidya Mandir, we nurture curious minds through
        quality education, strong values, creativity, and meaningful
        experiences that empower students to learn, lead, grow, and
        confidently shape a brighter future.&rdquo;
      </p>

      {/* Books */}
      <div
        style={{ filter: IMAGE_SHADOW }}
        className={`absolute
          left-[-12%]
          top-[42%]
          z-10
          w-[85%]
          max-w-[850px]
          left-[-50%]
          top-[40%]
          w-[102%]
          sm:max-w-[950px]
          md:left-[-8%]
          md:top-[35%]
          md:w-[65%]
          md:max-w-[1050px]
          lg:left-[-6%]
          lg:top-[30%]
          lg:w-[62%]
          lg:max-w-[1200px]
          xl:left-[-4%]
          transition-all
          duration-[1100ms]
          ease-out
          delay-700
          ${
            mounted
              ? "translate-x-0 translate-y-0 opacity-100"
              : "-translate-x-24 translate-y-24 opacity-0"
          }`}
      >
        <Image
          src={booksImage}
          alt=""
          width={1000}
          height={800}
          sizes="
            (max-width: 640px) 85vw,
            (max-width: 768px) 72vw,
            (max-width: 1024px) 65vw,
            (max-width: 1280px) 62vw,
            62vw
          "
          className="h-auto w-full"
        />
      </div>

      {/* Pen */}
      <div
        style={{ filter: IMAGE_SHADOW }}
        className={`absolute
          bottom-[-3%]
          right-[-18%]
          z-10
          w-[60%]
          max-w-[500px]
          sm:bottom-[-2%]
          sm:right-[-14%]
          sm:w-[50%]
          sm:max-w-[600px]
          md:right-[-12%]
          md:w-[45%]
          md:max-w-[650px]
          lg:bottom-[4%]
          lg:right-[-10%]
          lg:w-[40%]
          lg:max-w-[720px]
          xl:bottom-[7%]
          transition-all
          duration-[1100ms]
          ease-out
          delay-[900ms]
          ${
            mounted
              ? "translate-x-0 translate-y-0 opacity-100"
              : "translate-x-24 translate-y-24 opacity-0"
          }`}
      >
        <Image
          src={penImage}
          alt=""
          width={480}
          height={480}
          sizes="
            (max-width: 640px) 60vw,
            (max-width: 768px) 50vw,
            (max-width: 1024px) 45vw,
            (max-width: 1280px) 40vw,
            40vw
          "
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}

