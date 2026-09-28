"use client";

/**
 * Requires GSAP in the project:
 *   npm install gsap
 */

import Image from "next/image";
import { Space_Grotesk, Sora } from "next/font/google";
import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

interface InfoItem {
  label: string;
  content: string;
  isCertificate?: boolean;
}

// Keywords in the Mission copy wrapped in **double asterisks** get highlighted.
const ITEMS: InfoItem[] = [
  {
    label: "Motto",
    content: "Learn To Lead",
  },
  {
    label: "Vision",
    content: "Nurturing students for global readiness, with Indian roots.",
  },
  {
    label: "Mission",
    content:
      "To inspire growth and harmony by fostering **communication**, **creativity**, **critical thinking** and **empathy**. Rooted in Indian values and traditions, we cultivate a respectful, inclusive environment where ideas flourish, relationships deepen, and cultural heritage is celebrated — building a future that honours the past while embracing **innovation** and **collaboration**.",
  },
  {
    label: "NABET Certification",
    content:
      "Our school is NABET accredited, reflecting our ongoing commitment to quality education and continuous improvement.",
    isCertificate: true,
  },
];

/** Splits on **keyword** markers and wraps matches in a highlighted span. */
function renderHighlighted(text: string): ReactNode[] {
  return text.split(/\*\*(.*?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="text-[#7A2E2E] font-medium">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function InfoGridSection() {
  const [certificateOpen, setCertificateOpen] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray<HTMLElement>(".info-row");

      rows.forEach((row) => {
        const title = row.querySelector<HTMLElement>(".info-title");
        const desc = row.querySelector<HTMLElement>(".info-desc");
        if (!title || !desc) return;

        if (reduceMotion) {
          gsap.set([title, desc], { opacity: 1, y: 0 });
          return;
        }

        // Entrance: both columns rise and fade in once, the description
        // trailing slightly behind the title.
        gsap.fromTo(
          title,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.fromTo(
          desc,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Parallax: title and description drift at different speeds the
        // whole time the row is passing through the viewport, so the two
        // columns feel like separate depth layers rather than one flat block.
        gsap.fromTo(
          title,
          { yPercent: -10 },
          {
            yPercent: 10,
            ease: "none",
            scrollTrigger: {
              trigger: row,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );

        gsap.fromTo(
          desc,
          { yPercent: -4 },
          {
            yPercent: 16,
            ease: "none",
            scrollTrigger: {
              trigger: row,
              start: "top bottom",
              end: "bottom top",
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
      className="w-full overflow-hidden bg-white px-6 py-20 sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        {ITEMS.map((item) => (
          <div
            key={item.label}
            className="info-row grid grid-cols-1 gap-6 border-b border-neutral-200 py-14 first:pt-0 last:border-none sm:grid-cols-12 sm:gap-10 sm:py-20"
          >
            {/* Left: bold, tight title */}
            <div className="sm:col-span-4">
              <h3
                className={`${spaceGrotesk.className} info-title text-5xl md:text-6xl font-bold uppercase tracking-tighter text-neutral-900`}
                style={{ willChange: "transform" }}
              >
                {item.label}
              </h3>
            </div>

            {/* Right: description */}
            <div className={`${sora.className} info-desc sm:col-span-8`} style={{ willChange: "transform" }}>
              <p className="max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
                {item.label === "Mission"
                  ? renderHighlighted(item.content)
                  : item.content}
              </p>

              {item.isCertificate && (
                <button
                  type="button"
                  onClick={() => setCertificateOpen(true)}
                  className="mt-6 text-sm font-medium text-neutral-900 underline decoration-[#7A2E2E]/60 decoration-2 underline-offset-4 transition hover:decoration-[#7A2E2E]"
                >
                  View the NABET certificate
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen certificate viewer */}
      {certificateOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 sm:p-8"
          onClick={() => setCertificateOpen(false)}
        >
          <button
            type="button"
            aria-label="Close certificate"
            onClick={() => setCertificateOpen(false)}
            className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            ×
          </button>

          <div
            className="relative h-[92vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/images/nabet.png"
              alt="NABET Certification"
              fill
              priority
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}