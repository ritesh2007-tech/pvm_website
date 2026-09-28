"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sora, Comfortaa } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const achievements = [
  {
    image: "/images/achievements/sa6.JPEG",
    title: "A Moment to Celebrate",
  },
  {
    image: "/images/achievements/sa2.JPEG",
    title: "Shining on the Stage",
  },
  {
    image: "/images/achievements/sa3.JPEG",
    title: "Celebrating Excellence",
  },
  {
    image: "/images/achievements/sa4.JPEG",
    title: "Learning Beyond the Classroom",
  },
  {
    image: "/images/achievements/sa5.JPEG",
    title: "Proud Moments",
  },
  {
    image: "/images/achievements/sa1.JPEG",
    title: "Growing Together",
  },
];

export default function StudentAchievements() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".achievement-card");

      cards.forEach((card) => {
        const photo = card.querySelector<HTMLElement>(".achievement-photo");
        if (!photo || reduceMotion) return;

        // True parallax: the photo sits inside a fixed-size, clipped frame
        // and is overscanned (taller than the frame), so it can drift the
        // whole time the card is passing through the viewport without ever
        // exposing an edge. The frame's box never resizes, so layout and
        // spacing between cards stay stable.
        gsap.fromTo(
          photo,
          { yPercent: -14 },
          {
            yPercent: 14,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.3,
            },
          }
        );

        // A shorter, separate "settle in closer" zoom as the card arrives —
        // scoped to entry only, so it reaches its size and holds, rather
        // than continuing to warp for the card's entire time on screen.
        gsap.fromTo(
          photo,
          { scale: 1.08 },
          {
            scale: 1.22,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 35%",
              scrub: 1,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-24 md:py-32 lg:py-40"
    >
      {/* Heading */}
      <div className="mx-auto mb-20 max-w-7xl px-6 md:mb-28 lg:px-12">
        <div className="max-w-4xl">
          <p
            className={`${comfortaa.className} mb-5 text-sm font-semibold uppercase tracking-tight text-neutral-500`}
          >
            Our Proud Moments
          </p>

          <h2
            className={`${sora.className} text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-neutral-900`}
          >
            Student
            <br />
            <span className="ml-[8vw]">Achievements</span>
          </h2>

          <p
            className={`${comfortaa.className} mt-7 max-w-xl text-sm text-neutral-500 md:text-base`}
          >
            Every achievement tells a story of curiosity, dedication and the
            courage to keep learning.
          </p>
        </div>
      </div>

      {/* Images */}
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        {achievements.map((achievement, index) => {
          const isRight = index % 2 !== 0;

          return (
            <div
              key={achievement.image}
              className={`achievement-card relative flex ${
                index === achievements.length - 1 ? "" : "mb-10 md:mb-16"
              } ${isRight ? "justify-end" : "justify-start"}`}
            >
              <div className="relative aspect-[4/3] w-[82%] overflow-hidden rounded md:w-[62%] lg:w-[55%]">
                <div
                  className="achievement-photo absolute inset-x-0 -top-[15%] h-[130%]"
                  style={{ willChange: "transform" }}
                >
                  <Image
                    src={achievement.image}
                    alt={achievement.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 82vw, (max-width: 1200px) 62vw, 55vw"
                    priority={index === 0}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom text */}
      <div className="mx-auto mt-20 max-w-7xl px-6 text-center md:mt-28">
        <p className={`${comfortaa.className} text-sm text-neutral-400`}>
          Every milestone deserves to be remembered.
        </p>
      </div>
    </section>
  );
}